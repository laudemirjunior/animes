import { Route, Switch } from "react-router-dom";
import AnimeInfo from "../pages/AnimeInfo";
import Home from "../pages/home";

export default () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/anime/:id/:title">
      <AnimeInfo />
    </Route>
  </Switch>
);
