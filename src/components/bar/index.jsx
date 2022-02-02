import { useHistory } from "react-router-dom";
import Search from "../Search";
import { StyleBar } from "./styles";

const Bar = () => {
  const history = useHistory();
  return (
    <StyleBar>
      <span onClick={() => history.push("/")}>Home</span>
      <Search />
    </StyleBar>
  );
};

export default Bar;
