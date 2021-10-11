import { Route, Switch } from "react-router";
import AnimeInfo from "../pages/AnimeInfo";
import Home from "../pages/home";
import Form from "../pages/Form/Form";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/anime/:title">
        <AnimeInfo />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
    </Switch>
  );
};

export default Routes;
