import { createContext, useContext, useState } from "react";
import { simulationApi } from "../../services/api";

const SimulationContext = createContext();

export const SimulationProvider = ({ children }) => {
  const [simulation, setSimulation] = useState();

  simulationApi
    .post()
    .then((resp) => {
      console.log(resp);
    })
    .catch((error) => {
      console.log(error);
    });

  return <SimulationContext.Provider>{children}</SimulationContext.Provider>;
};
export const useSimulation = () => useContext(SimulationContext);
