// Utility to detect mobile devices and reduce animations
export const isMobileDevice = (): boolean => {
  if (typeof window === "undefined") return false;

  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < 768
  );
};

// Reduce motion preferences
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Get optimized animation config based on device
export const getAnimationConfig = () => {
  const isMobile = isMobileDevice();
  const reducedMotion = prefersReducedMotion();

  if (reducedMotion) {
    return {
      duration: 0,
      delay: 0,
      disabled: true,
    };
  }

  if (isMobile) {
    return {
      duration: 0.3,
      delay: 0,
      disabled: false,
    };
  }

  return {
    duration: 0.6,
    delay: 0.1,
    disabled: false,
  };
};

// Get transition object for Framer Motion
export const getTransition = (baseDuration: number, baseDelay: number = 0) => {
  const config = getAnimationConfig();

  if (config.disabled) {
    return { duration: 0 };
  }

  return {
    duration: config.duration || baseDuration * 0.5,
    delay: config.delay || baseDelay * 0.5,
  };
};
