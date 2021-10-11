import { useHistory } from "react-router";
import { StyleBar } from "./styles";

const Bar = () => {
  const history = useHistory();
  return (
    <StyleBar>
      <article>
        <div>
          <span onClick={() => history.push("/")}>Home</span>
        </div>
        <div>
          <span onClick={() => history.push("/form")}>Form</span>
          <span>Cadastro</span>
          <span>Login</span>
        </div>
      </article>
    </StyleBar>
  );
};

export default Bar;
