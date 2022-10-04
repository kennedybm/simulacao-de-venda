import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);
  height: 100vh;
`;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  width: 80%;
  background-color: var(--second);
  border: 1px solid var(--text);
  border-radius: 5px;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  height: 30px;
  margin-top: 10px;
  h1 {
    color: var(--white);
  }
`;

export const SimulationContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 95%;
  height: 19vh;
  margin-top: 35px;
  h2 {
    color: var(--white);
  }
  span {
    color: var(--white);
  }
`;
