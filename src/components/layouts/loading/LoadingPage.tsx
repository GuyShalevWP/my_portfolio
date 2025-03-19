import { LoadingContainer, LoadingDot } from "./LoadingPage.styles";
import { Variants } from "framer-motion";


const LoadingPage = () => {

    const dotVariants: Variants = {
        jump: {
            y: -30,
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            },
        },
    }

    return (
        <LoadingContainer 
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
