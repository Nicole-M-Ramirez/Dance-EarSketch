declare module 'react-lottie' {
  import React from 'react';

  interface LottieOptions {
    loop?: boolean;
    autoplay?: boolean;
    animationData: any;
    rendererSettings?: {
      preserveAspectRatio?: string;
    };
  }

  interface LottieProps {
    options: LottieOptions;
    height?: number | string;
    width?: number | string;
    isStopped?: boolean;
    isPaused?: boolean;
  }

  const Lottie: React.FC<LottieProps>;
  export default Lottie;
} 