import { Route, Switch } from "react-router";
import AnimeInfo from "../pages/AnimeInfo";
import Home from "../pages/home";
import SignUp from "../pages/SignUp/";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/anime/:id/:title">
        <AnimeInfo />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
