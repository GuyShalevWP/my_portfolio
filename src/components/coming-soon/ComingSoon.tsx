import { Variants } from "framer-motion";
import {
    ComingSoonContainer,
    Letter,
} from "./ComingSoon.styles";
import { WavyTextProps } from "./ComingSoon.types";



const ComingSoon = ({ text }: WavyTextProps) => {
    const letterVariants: Variants = {

        animate: (index: number) => ({
            y: [20, -20], // Move letter up and back down
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                duration: 2,
                
                delay: index * 0.1 - 1, // Stagger the letters a bit
            },
        }),
    };

    return (
        <ComingSoonContainer>
            {Array.from(text).map((char, index) => {
                if (char === " ") {
                    return (
                        <span
                            key={`${char}-${index}`}
                            style={{ margin: "0" }}
                        >
                            &nbsp;
                        </span>
                    );
                }

                return (
                    <Letter
                        key={`${char}-${index}`}
                        variants={letterVariants}
                        initial="initial"
                        animate="animate"
                        custom={index}
                    >
                        {char}
                    </Letter>
                );
            })}
        </ComingSoonContainer>
    );
};

export default ComingSoon;
