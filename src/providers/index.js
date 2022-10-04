import { ModalControllerProvider } from "./modalController";
import { SimulationProvider } from "./simulation";

const Providers = ({ children }) => {
  return (
    <SimulationProvider>
      <ModalControllerProvider>{children}</ModalControllerProvider>;
    </SimulationProvider>
  );
};
export default Providers;
