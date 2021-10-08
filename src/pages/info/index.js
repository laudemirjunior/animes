import { Link, useParams } from "react-router-dom";

const Info = ({ members }) => {
  const { name } = useParams();
  const member = members.find((item) => item.id === id);

  return (
    <div>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Info;
