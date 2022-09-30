import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 5px 10px 5px 10px;

  width: 100%;

  border: none;
  border-radius: 8px;

  outline: none;

  transition: transform 0.5s;

  :focus {
    outline: 2px solid var(--primary);
  }
`;
