import { CINEMATIC_EASING } from "@/lib/constants";

export const revealFadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.4,
      delay,
      ease: CINEMATIC_EASING
    }
  })
};

export const cinematicBlurReveal = {
  hidden: { opacity: 0, filter: "blur(20px)", scale: 1.05 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 2.5,
      delay,
      ease: CINEMATIC_EASING
    }
  })
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4
    }
  }
};
