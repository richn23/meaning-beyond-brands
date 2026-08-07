/* Meaning Beyond Brands — landing page
 *
 * The invitations are real anchors, so hover, focus, click, tap and Enter are
 * all handled natively by the browser and by style.css. The only thing links
 * do not do on their own is activate on Space, which the brief asks for.
 */

(function () {
  "use strict";

  var invitations = document.querySelectorAll(".invitation");

  Array.prototype.forEach.call(invitations, function (invitation) {
    invitation.addEventListener("keydown", function (event) {
      if (event.key !== " " && event.key !== "Spacebar") return;
      // Stop the page scrolling, then follow the link.
      event.preventDefault();
      invitation.click();
    });
  });
})();


/* ==========================================================================
 * Corporate / Brands (theme pages)
 *
 * Everything below is a no-op on index.html: each block returns early if the
 * element it drives is not on the page, so Landing loads the same file and
 * runs only the invitation block above.
 *
 * Three signature moments live here — hero depth, the experience gallery —
 * plus the ambient cursor glint. Nothing loops.
 * ========================================================================== */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---- Persistent header: transparent over the hero, solid once past it --- */

  (function stickyHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;

    var ticking = false;

    function update() {
      header.classList.toggle("is-stuck", window.scrollY > 40);
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }, { passive: true });

    update();
  })();

  /* ---- Motion moment 2: cinematic hero depth ------------------------------
   * On entry the media settles from scale(1.025) to 1, the headline rises
   * through its clipping mask and the star takes one gold pass. All of that is
   * CSS; this only adds the .is-loaded class that triggers it, plus the
   * pointer parallax, which has no CSS-only equivalent.
   */

  (function heroDepth() {
    var hero = document.querySelector(".page-hero");
    if (!hero) return;

    // Arms the pre-entry state. The CSS only hides the headline and support
    // line while this class is present, so if the script never runs at all the
    // hero is simply visible rather than stuck invisible.
    document.documentElement.classList.add("js-motion");

    function reveal() {
      document.body.classList.add("is-loaded");
    }

    // Next frame, so the browser has painted the pre-entry state first. The
    // class goes on <body> because the one-time gold pass belongs to the
    // header star, which sits outside the hero.
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(reveal);
    });

    // rAF does not fire in a tab that is never rendered (background tab,
    // prerender, some headless contexts). Without this the hero would stay
    // hidden in exactly those cases, so a timer guarantees the reveal.
    window.setTimeout(reveal, 600);

    var media = hero.querySelector(".page-hero__photo-layer");
    if (!media || reduceMotion.matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    var MAX = 4;            // px — "barely perceptible", per the brief
    var pending = false;
    var targetX = 0;
    var targetY = 0;

    function apply() {
      media.style.transform = "scale(1) translate3d(" + targetX + "px," + targetY + "px,0)";
      pending = false;
    }

    hero.addEventListener("pointermove", function (event) {
      var box = hero.getBoundingClientRect();
      // -1..1 from the centre of the hero, then scaled to a few pixels.
      targetX = (((event.clientX - box.left) / box.width) * 2 - 1) * MAX;
      targetY = (((event.clientY - box.top) / box.height) * 2 - 1) * MAX;
      if (pending) return;
      pending = true;
      window.requestAnimationFrame(apply);
    });

    hero.addEventListener("pointerleave", function () {
      targetX = 0;
      targetY = 0;
      window.requestAnimationFrame(apply);
    });
  })();

  /* ---- Motion moment 3: experience gallery --------------------------------
   * Plain IntersectionObserver against three cues inside the sticky section,
   * per the architecture's complexity guardrail — no animation library.
   * The pinned layout itself is opt-in from CSS (desktop + no reduced-motion);
   * when that media query does not apply, the states are already stacked and
   * visible, and this observer simply never changes anything that matters.
   */

  (function experienceGallery() {
    var scroll = document.querySelector(".gallery__scroll");
    if (!scroll || !("IntersectionObserver" in window)) return;

    var states = scroll.querySelectorAll(".gallery__state");
    var cues = scroll.querySelectorAll(".gallery__cue");
    if (!states.length || cues.length !== states.length) return;

    function activate(index) {
      for (var i = 0; i < states.length; i++) {
        states[i].classList.toggle("is-active", i === index);
      }
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        activate(Number(entry.target.getAttribute("data-index")));
      });
    }, {
      // A one-pixel band across the middle of the viewport: whichever cue
      // crosses the centre line is the active state. Predictable, and it never
      // fights the scroll.
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0
    });

    Array.prototype.forEach.call(cues, function (cue) { observer.observe(cue); });
  })();

  /* ---- Ambient detail: premium cursor glint -------------------------------
   * Desktop, fine pointer, motion allowed. The two hard rules from the brief
   * are enforced structurally, not by tuning:
   *   1. never more than one glint alive at a time  -> `live` gate
   *   2. the MBB star form is occasional            -> 1 in 7 spawns
   */

  (function cursorGlint() {
    if (!document.querySelector(".theme-corporate, .theme-brands")) return;
    if (reduceMotion.matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    var STAR = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
      '<polygon points="12,1 12.69,10.34 16.38,7.62 13.66,11.31 23,12 13.66,12.69 ' +
      '16.38,16.38 12.69,13.66 12,23 11.31,13.66 7.62,16.38 10.34,12.69 1,12 ' +
      '10.34,11.31 7.62,7.62 11.31,10.34" /></svg>';

    var LIFESPAN = 1100;    // must match the mbb-glint animation duration
    var MIN_GAP = 220;      // ms of quiet between glints
    var MIN_TRAVEL = 90;    // px the pointer must cover before another glint
    var STAR_EVERY = 7;     // 1 in 7 glints takes the 8-point star form

    var layer = document.createElement("div");
    layer.className = "glint-layer";
    layer.setAttribute("aria-hidden", "true");
    document.body.appendChild(layer);

    var live = false;       // rule 1: exactly one, or none
    var lastAt = 0;
    var lastX = null;
    var lastY = null;
    var spawned = 0;

    document.addEventListener("pointermove", function (event) {
      if (live) return;

      var now = event.timeStamp;
      if (now - lastAt < MIN_GAP) return;

      if (lastX !== null) {
        var dx = event.clientX - lastX;
        var dy = event.clientY - lastY;
        if (Math.sqrt(dx * dx + dy * dy) < MIN_TRAVEL) return;
      }
      lastX = event.clientX;
      lastY = event.clientY;
      lastAt = now;

      var glint = document.createElement("span");
      glint.className = "glint";
      // rule 2: the star is occasional, not every movement
      if (spawned % STAR_EVERY === STAR_EVERY - 1) {
        glint.className += " glint--star";
        glint.innerHTML = STAR;
      }
      spawned++;

      // A few px off the pointer, so it reads as light on the material rather
      // than as a cursor attachment.
      glint.style.left = (event.clientX + 10) + "px";
      glint.style.top = (event.clientY - 8) + "px";

      layer.appendChild(glint);
      live = true;

      window.setTimeout(function () {
        glint.remove();
        live = false;
      }, LIFESPAN);
    }, { passive: true });
  })();
})();
