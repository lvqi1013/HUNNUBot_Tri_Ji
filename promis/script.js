const root = document.documentElement;
const glow = document.querySelector(".cursor-glow");

if (glow && !window.matchMedia("(pointer: coarse)").matches) {
    window.addEventListener("pointermove", (event) => {
        root.style.setProperty("--cursor-x", `${event.clientX}px`);
        root.style.setProperty("--cursor-y", `${event.clientY}px`);
    }, { passive: true });
}

const revealItems = document.querySelectorAll(".reveal");
const tickerTrack = document.querySelector(".ticker-track");

if (tickerTrack) {
    const tickerSet = tickerTrack.querySelector(".ticker-set");

    const buildTickerLoop = () => {
        if (!tickerSet) return;

        tickerTrack.querySelectorAll(".ticker-set:not(:first-child)").forEach((set) => {
            set.remove();
        });

        const setWidth = tickerSet.getBoundingClientRect().width;
        const tickerWidth = tickerTrack.parentElement.getBoundingClientRect().width;

        if (!setWidth || !tickerWidth) return;

        tickerTrack.style.setProperty("--ticker-distance", `${setWidth}px`);

        const setCount = Math.ceil((tickerWidth + setWidth) / setWidth) + 1;

        for (let index = 1; index < setCount; index += 1) {
            const clone = tickerSet.cloneNode(true);
            clone.setAttribute("aria-hidden", "true");
            tickerTrack.appendChild(clone);
        }
    };

    buildTickerLoop();

    if (document.fonts) {
        document.fonts.ready.then(buildTickerLoop);
    }

    let tickerResizeFrame = 0;

    window.addEventListener("resize", () => {
        cancelAnimationFrame(tickerResizeFrame);
        tickerResizeFrame = requestAnimationFrame(buildTickerLoop);
    }, { passive: true });
}

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.16,
        rootMargin: "0px 0px -40px 0px"
    });

    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});
