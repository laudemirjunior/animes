import { useHistory } from "react-router";
import { StyleBar } from "./styles";

const Bar = () => {
  const history = useHistory();
  return (
    <StyleBar>
      <div>
        <span onClick={() => history.push("/")}>Home</span>
      </div>
      <div>
        <span>Cadastro</span>
        <span>Login</span>
      </div>
    </StyleBar>
  );
};

export default Bar;
