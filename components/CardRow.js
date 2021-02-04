import Card from "./Card";
import styled from "styled-components";

const CardsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CardRow = ({ data }) => {
  return (
    <CardsRow>
      {data.map((cardInfo) => (
        <Card data={cardInfo} />
      ))}
    </CardsRow>
  );
};
