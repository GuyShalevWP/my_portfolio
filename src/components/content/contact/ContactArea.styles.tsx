import { motion } from "motion/react";
import styled from "styled-components";

export const ContactAreaContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    margin: 1rem;
`
export const ContactAnchor = styled(motion.a)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background-color: #f0f0f0;
    cursor: pointer;
`

export const ContactIcon = styled.img`
    width: 2.5rem;
    height: 2.5rem;
`;