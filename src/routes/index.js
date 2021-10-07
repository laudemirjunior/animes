import { Route, Switch } from "react-router";
import Home from "../pages/home";
import Info from "../pages/info";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Company/:name">
        <Info />
      </Route>
    </Switch>
  );
};

export default Routes;
