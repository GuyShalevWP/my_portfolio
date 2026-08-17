import  { useState } from "react";
import { Container, Message, Tag, TagsContainer, Title } from "./HireMe.styles";

const qualities: string[] = [
    "Creative",
    "Team Player",
    "Problem Solver",
    "Communicative",
    "Fast Learner",
    "Self Taught",
    "Passionate",
];

const HireMe = () => {
    const [selected, setSelected] = useState<string[]>([]);

    const toggleSelect = (item: string): void => {
        setSelected((prev: string[]) =>
            prev.includes(item)
                ? prev.filter((i: string) => i !== item)
                : [...prev, item]
        );
    };

    const allSelected: boolean = selected.length === qualities.length;

    return (
        <Container>
            <Title>I'm looking to hire:</Title>
            <TagsContainer>
                {qualities.map((q: string) => (
                    <Tag
                        key={q}
                        selected={selected.includes(q)}
                        onClick={() => toggleSelect(q)}
                    >
                        {q}
                    </Tag>
                ))}
            </TagsContainer>
            {allSelected && (
                <Message>Guy Shalev is the best for that 💼🚀</Message>
            )}
        </Container>
    );
};

export default HireMe;
