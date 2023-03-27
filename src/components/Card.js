import { StyledCard } from "./styles/Card.styled";

export default function Card({
  item: { title, diameterText, hazardText },
  hazardous,
}) {
  return (
    <StyledCard hazardous={hazardous}>
      <div>
        <h2>{title}</h2>
        <p>{diameterText}</p>
        <p>{hazardText}</p>
      </div>
    </StyledCard>
  );
}
