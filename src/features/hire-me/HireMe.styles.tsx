import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    background: #4A4947;
    border-radius: 1.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    max-width: 550px;
    margin: 2rem auto;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 2.1rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: #FAF7F0;
`;

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    margin-bottom: 1rem;
`;

interface TagProps {
    selected: boolean;
}

export const Tag = styled.div<TagProps>`
    padding: 0.5rem 1rem;
    border-radius: 999px;
    cursor: pointer;
    background: ${({ selected }) => (selected ? "#B17457" : "#f3f4f6")};
    color: ${({ selected }) => (selected ? "#f3f4f6" : "#1f2937")};
    font-weight: 600;
    border: 1px solid #d1d5db;
    transition: background 0.2s ease;
`;

export const Message = styled.div`
    color: #F97300;
    font-weight: 600;
    font-size: 2rem;
    margin-top: 1rem;
`;