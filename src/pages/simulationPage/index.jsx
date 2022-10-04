import Form from "../../components/Form";
import {
  MainContainer,
  MainSection,
  TitleBox,
  ModalBox,
  SimulationContainer,
} from "./style";
import { useSimulation } from "../../providers/simulation";

const SimulationPage = () => {
  const { simulationData } = useSimulation();

  return (
    <MainContainer>
      <MainSection>
        <TitleBox>
          <h1>Faça sua simulação</h1>
        </TitleBox>
        <Form name="simulation"></Form>
        <SimulationContainer>
          {!!simulationData ? (
            <>
              <h2>Você recebe:</h2>
              {simulationData &&
                simulationData.map((value, index) =>
                  value[1] ? (
                    <span key={index}>Amanhã: R${value[1]}</span>
                  ) : (
                    false
                  )
                )}
              {simulationData &&
                simulationData.map((value, index) =>
                  value[15] ? (
                    <span key={index}>Em 15 dias: R${value[15]}</span>
                  ) : (
                    false
                  )
                )}
              {simulationData &&
                simulationData.map((value, index) =>
                  value[30] ? (
                    <span key={index}>Em 30 dias: R${value[30]}</span>
                  ) : (
                    false
                  )
                )}
              {simulationData &&
                simulationData.map((value, index) =>
                  value[90] ? (
                    <span key={index}>Em 90 dias: R${value[90]}</span>
                  ) : (
                    false
                  )
                )}
              {simulationData &&
                simulationData.map((value, index) =>
                  value[120] ? (
                    <span key={index}>Em 120 dias: R${value[120]}</span>
                  ) : (
                    false
                  )
                )}
            </>
          ) : (
            <>
              <h2>Você recebe:</h2>
              <span>Amanhã: R$0,00</span>
              <span>Em 15 dias: R$0,00</span>
              <span>Em 30 dias: R$0,00</span>
              <span>Em 90 dias: R$0,00</span>
            </>
          )}
        </SimulationContainer>
      </MainSection>
    </MainContainer>
  );
};
export default SimulationPage;
