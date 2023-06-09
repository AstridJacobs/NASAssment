import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 18px;
  padding: 10px 40px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#4169E1"};
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 20px;
  }
`;
