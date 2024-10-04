// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Example: Super Slow Scroll Animation
gsap.to(".content", {
  scrollTrigger: {
    trigger: ".content",
    start: "top center", // When the top of ".content" hits the center of the viewport
    end: "bottom center", // When the bottom of ".content" hits the center of the viewport
    scrub: true, // This will make the animation sync with scroll
    pin: true, // Pins the content so that it moves slowly as you scroll
    pinSpacing: false // Prevents additional spacing after pinning
  },
  y: "-100vh", // Move up by 100% of the viewport height
  duration: 3 // Slow down the animation
});

// Animate individual boxes as they scroll into view
gsap.from(".box", {
  scrollTrigger: {
    trigger: ".box",
    start: "top 75%", // Animation starts when the top of ".box" is at 75% of the viewport
    end: "bottom 50%",
    scrub: true, // Synchronizes animation with scrolling
  },
  opacity: 0, // Starts transparent
  y: 50, // Start from below
  duration: 1
});

// Slow scroll effect for the footer
gsap.to(".footer", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1,
  },
  opacity: 1,
  y: -50, // Footer comes up slightly while scrolling
  duration: 2,
});



// Animate right-column sections
gsap.from(".right-column h3", {
  scrollTrigger: {
    trigger: ".right-column h3",
    start: "top 75%",  // Start when the top of the element reaches 75% of the viewport
    end: "bottom 50%",
    scrub: true,  // Slow scrolling sync
  },
  opacity: 0,
  y: 50,
  duration: 1,
});