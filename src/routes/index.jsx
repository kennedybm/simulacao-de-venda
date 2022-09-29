import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import SimulationPage from "../pages/simulationPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/simulation" component={SimulationPage} />
    </Switch>
  );
};
export default Routes;
