import { useHistory } from "react-router";
import Search from "../Search";
import { StyleBar } from "./styles";

const Bar = () => {
  const history = useHistory();
  return (
    <StyleBar>
      <article>
        <div>
          <span onClick={() => history.push("/")}>Home</span>
        </div>
        <Search />
        <div>
          <span onClick={() => history.push("/signup")}>Sign Up</span>
          <span onClick={() => history.push("/login")}>Login</span>
        </div>
      </article>
    </StyleBar>
  );
};

export default Bar;
