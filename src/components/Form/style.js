import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 34vh;
  width: 95%;
  max-width: 320px;
  margin-top: 10px;

  span {
    color: var(--text);
    font-size: 13px;
  }
`;
export const ModalContainer = styled.section`
  width: 95%;
  height: 30px;
  display: flex;
  flex-direction: column;
`;
export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15px;
  width: 20px;
  background-color: var(--text);
  border-radius: 5px;
  border: var(--second);
  color: var(--white);
  font-size: 14px;
  cursor: pointer;
  :hover {
    background-color: var(--second);
    color: var(--white);
    border: 1px solid var(--white);
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
`;

export const FormButton = styled.button`
  width: 30%;
  border-radius: 5px;
  background-color: var(--text);
  border: none;
  color: var(--white);

  :hover {
    background-color: var(--second);
    color: var(--white);
    border: 1px solid var(--white);
    text-decoration: underline;
    text-decoration-color: var(--white);
  }
`;
