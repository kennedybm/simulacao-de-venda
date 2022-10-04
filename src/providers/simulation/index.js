import { createContext, useContext, useState } from "react";
import { simulationApi } from "../../services/api";

const SimulationContext = createContext();

export const SimulationProvider = ({ children }) => {
  const [simulationData, setSimulationData] = useState();

  const handleSimulation = (data) => {
    // console.log(data);
    simulationApi
      .post("", data)
      .then((resp) => {
        const newData = [];
        newData.push(resp.data);
        setSimulationData(newData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SimulationContext.Provider
      value={{ simulationData, setSimulationData, handleSimulation }}
    >
      {children}
    </SimulationContext.Provider>
  );
};
export const useSimulation = () => useContext(SimulationContext);
