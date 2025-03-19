import styled from "styled-components";
import { motion } from "framer-motion";

export const ComingSoonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
    margin: 2rem 0;
`;
export const Letter = styled(motion.span)`
    display: inline-block;
`;


