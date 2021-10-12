import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Bar from "../../components/bar";

function Login() {
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const api = axios.create({
    baseURL: "http://localhost:3000",
  });

  const onSubmitFunction = ({ user, email, password }) => {
    const users = { user, email, password };
    api.post("/posts", users);
  };

  return (
    <div>
      <Bar />
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <h1>Login</h1>
        <div>
          {errors.email?.message}
          <input
            placeholder="Endereço de Email"
            type="email"
            {...register("email")}
          />
        </div>
        <div>
          {errors.password?.message}
          <input
            placeholder="Senha"
            {...register("password")}
            type="password"
          />
        </div>
        <button type="submit">Enviar!</button>
      </form>
    </div>
  );
}

export default Login;
