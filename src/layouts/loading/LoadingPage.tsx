import { useReducedMotion, type Variants } from "motion/react";
import {
  LoadingContainer,
  LoadingDot,
} from "@layouts/loading/LoadingPage.styles";

const LoadingPage = () => {
  const reducedMotion = useReducedMotion();

  const dotVariants: Variants = {
    jump: {
      y: [20, -20],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  if (reducedMotion) {
    return (
      <LoadingContainer role="status" aria-label="Loading">
        <LoadingDot />
        <LoadingDot />
        <LoadingDot />
      </LoadingContainer>
    );
  }

  return (
    <LoadingContainer
      role="status"
      aria-label="Loading"
      animate="jump"
      transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
    >
      <LoadingDot variants={dotVariants} />
      <LoadingDot variants={dotVariants} />
      <LoadingDot variants={dotVariants} />
    </LoadingContainer>
  );
};

export default LoadingPage;
