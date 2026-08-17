import { motion } from "motion/react";
import styled from "styled-components";

export const LoadingContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 10px;
`;

export const LoadingDot = styled(motion.div)`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    will-change: transform;
    background-color: #fff;
`;