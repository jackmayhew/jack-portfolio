import gsap from "gsap";

export const pageLoadGSAP = () => {
  const context = gsap.context(() => {
    const timeline = gsap.timeline();
    timeline.fromTo(
      ".main-content",
      { y: 15, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out" },
      0.5
    );
  });

  return {
    context,
    cleanup: () => context.revert(),
  };
};

export const footerGSAP = () => {
  const context = gsap.context(() => {
    gsap.set(".footer", { y: 0, autoAlpha: 1 });
    gsap
      .timeline()
      .to(".footer", {
        y: -15,
        autoAlpha: 0,
        duration: 0.3,
        ease: "power2.out",
      })
      .eventCallback("onComplete", () => {
        gsap.set(".footer", { y: 0, autoAlpha: 1 });
      });
  });

  return {
    context,
    cleanup: () => context.revert(),
  };
};
