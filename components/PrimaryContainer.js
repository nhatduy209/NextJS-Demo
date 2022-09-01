import styled from "styled-components";
export const PrimaryContainer = styled.div`
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.main};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
`;
