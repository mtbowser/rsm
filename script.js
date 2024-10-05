// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Global subtle scroll effect for the container
gsap.to(".container", {
  scrollTrigger: {
    trigger: ".container",
    start: "top top", // Start at the top of the page
    end: "bottom bottom", // End when the user reaches the bottom of the page
    scrub: true, // Sync with scroll to maintain a smooth effect
    pin: false, // No pinning the container
  },
  y: "-10%", // Slight upward movement for a parallax effect
  duration: 2, // Slow down for a smooth scroll effect
});

// Super Slow Scroll Animation for the content
gsap.to(".content", {
  scrollTrigger: {
    trigger: ".content",
    start: "top center",
    end: "bottom center",
    scrub: true,
    pin: true,
    onEnter: () => document.body.style.paddingTop = "0px",  // Remove padding when entering
    onLeave: () => document.body.style.paddingTop = "0px",  // Keep it removed when leaving
  },
  y: "-100vh",
  duration: 3
});
// Animate individual boxes as they scroll into view with stagger
gsap.from(".box", {
  scrollTrigger: {
    trigger: ".box",
    start: "top 80%", // Animation starts when the top of ".box" is at 80% of the viewport
    end: "bottom 60%", // Ends when 60% of the box is in the viewport
    scrub: true, // Sync animation with scrolling
  },
  opacity: 0, // Start transparent
  y: 30, // Move upward for a subtle scroll effect
  duration: 1.5, // Make it smooth
  stagger: 0.2, // Adds delay between each box's animation
});

// Slow scroll effect for the footer with parallax
gsap.to(".footer", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top bottom", // Start when the top of the footer hits the bottom of the viewport
    end: "bottom bottom", // Ends when the footer bottom hits the viewport bottom
    scrub: 1, // Sync with scroll
  },
  opacity: 1, // Gradually appear
  y: -30, // Footer slides up slightly as the user scrolls
  duration: 2, // Slow effect
});

// Animate right-column sections with staggered effects
gsap.from(".right-column h3", {
  scrollTrigger: {
    trigger: ".right-column h3",
    start: "top 80%",  // Start when the top of the element is 80% in the viewport
    end: "bottom 60%", // Ends when 60% is in view
    scrub: true,  // Smooth scrolling sync
  },
  opacity: 0,  // Fade in
  y: 40,  // Slight move upwards
  duration: 1,  // Animation duration
  stagger: 0.3,  // Apply stagger to each h3 tag to animate them one by one
});

// Subtle parallax effect on images
gsap.from(".profile-pic", {
  scrollTrigger: {
    trigger: ".profile-pic",
    start: "top 100%", // Start when image enters the viewport
    end: "bottom 80%", // End near the bottom of the viewport
    scrub: true, // Smooth sync with scroll
  },
  opacity: 0, // Fades in
  y: 50, // Moves up slightly
  duration: 2, // Slow and smooth
});
