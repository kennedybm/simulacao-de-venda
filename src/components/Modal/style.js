import styled from "styled-components";

export const MainContainer = styled.main`
  position: fixed;
  width: 84%;
  max-width: 320px;
  height: 58vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;
export const ModalContainer = styled.div`
  width: 50%;
  max-width: 180px;
  height: 32vh;
  display: flex;
  flex-direction: column;
  background-color: var(--second);
  border: 1px solid var(--text);
  border-radius: 5px;
  align-items: center;
  position: absolute;
  top: 17%;
  right: 27%;
`;

export const CloseModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 11%;
    height: 13px;
    border-radius: 2px;
    border: none;
    margin-top: 1px;
    margin-right: 1px;
    background-color: var(--text);
    color: var(--white);
    cursor: pointer;
    :hover {
      background-color: var(--second);
      color: var(--white);
      border: 1px solid var(--white);
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 30vh;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h1 {
    color: var(--white);
  }
`;

export const DayBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  input {
    width: 50%;
    margin-right: 50px;
    margin-top: 6px;
  }

  span {
    color: var(--white);
    width: 50%;
    display: flex;
    justify-content: flex-end;
    margin-left: 50px;
  }
`;

export const DayBoxTwo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  input {
    width: 50%;
    margin-right: 58px;
    margin-top: 6px;
  }

  span {
    color: var(--white);
    width: 50%;
    display: flex;
    justify-content: flex-end;
    margin-left: 45px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 9px;
  button {
    width: 59%;
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
  }
`;
