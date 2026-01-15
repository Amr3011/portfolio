// Motion configuration utilities for better mobile performance

/**
 * Check if user prefers reduced motion or is on a mobile device
 * Returns simplified animation config for better performance
 */
export const shouldReduceMotion = () => {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Check if device is mobile (simple check)
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  return prefersReducedMotion || isMobile;
};

/**
 * Get optimized animation config based on device capability
 */
export const getAnimationConfig = (
  fullConfig: any,
  reducedConfig: any = {}
) => {
  return shouldReduceMotion() ? reducedConfig : fullConfig;
};

/**
 * Optimized viewport config for better performance
 */
export const optimizedViewport = {
  once: true,
  amount: 0.3, // Trigger animation when 30% of element is visible
  margin: "0px 0px -100px 0px", // Start animation slightly before element enters viewport
};

/**
 * Simple fade in animation (lightweight)
 */
export const simpleFadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 },
};

/**
 * Simple slide up animation (lightweight)
 */
export const simpleSlideUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: optimizedViewport,
  transition: { duration: 0.4 },
};
