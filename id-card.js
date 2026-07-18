/* =========================================================================
   ID CARD — small interaction layer
   Kept in its own file (id-card.js) so your existing script.js is never
   touched. The drop / bounce / swing entrance animation itself is pure
   CSS (see the "PROFILE IMAGE UPGRADE" section at the end of style.css)
   so it runs automatically on load with zero JS and stays lightweight.

   This file only adds one small extra touch: clicking or tapping the
   card gently replays the swing, like nudging a real hanging ID card.
   ========================================================================= */
(function () {
    "use strict";

    var wrapper = document.getElementById("idCardWrapper");
    var card = document.getElementById("idCard");

    if (!wrapper || !card) return; // safety check, does nothing if markup isn't found

    var prefersReducedMotion =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function replaySwing() {
        if (prefersReducedMotion) return; // respect accessibility preference

        // Restart the CSS animation cleanly by toggling the class
        wrapper.classList.remove("id-card-replay");
        // Force reflow so the browser registers the class removal
        // before it gets added again (otherwise the animation won't restart).
        void wrapper.offsetWidth;
        wrapper.classList.add("id-card-replay");
    }

    // Remove the replay class once the animation finishes so it can be re-triggered
    wrapper.addEventListener("animationend", function (e) {
        if (e.animationName === "idCardSwingAgain") {
            wrapper.classList.remove("id-card-replay");
        }
    });

    card.addEventListener("click", replaySwing);
    card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            replaySwing();
        }
    });
})();
