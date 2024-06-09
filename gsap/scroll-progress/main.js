gsap.registerPlugin(ScrollTrigger);
gsap.to("progress", {
  value: 100,
  scrollTrigger: {
    scrub: 0.5,
  },
});
