import { Switch, Route } from "react-router-dom";
import SimulationPage from "../pages/simulationPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={SimulationPage} />
    </Switch>
  );
};
export default Routes;
