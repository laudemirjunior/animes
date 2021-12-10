import { Route, Switch } from "react-router";
import AnimeInfo from "../pages/AnimeInfo";
import Home from "../pages/home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/anime/:id/:title">
        <AnimeInfo />
      </Route>
    </Switch>
  );
};

export default Routes;
