import styled from "styled-components";

export const StyledCard = styled.div`
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 20px 0;
  padding: 10px;
  background-color: ${({ hazardous }) => (hazardous ? "#FFCCCB" : "#fff")};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
