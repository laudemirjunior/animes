import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Bar from "../../components/bar";

function SignUp() {
  const formSchema = yup.object().shape({
    user: yup.string().required("Nome de usuário obrigatorio"),
    email: yup.string().required("E-mail obrigatório"),
    confirmEmail: yup
      .string()
      .required("Confirmação do e-mail obrigatório")
      .oneOf([yup.ref("email"), null], "Os emails devem corresponder"),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup
      .string()
      .required("Confirmação da senha obrigatória")
      .oneOf([yup.ref("password"), null], "As senhas devem corresponder"),
    checkbox: yup
      .boolean()
      .oneOf([true], "Você deve aceitar os Termos e Condições"),
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
        <h1>Sign Up</h1>
        <div>
          {errors.user?.message}
          <input
            placeholder="Nome de usuário"
            type="text"
            {...register("user")}
          />
        </div>
        <div>
          {errors.email?.message}
          <input
            placeholder="Endereço de Email"
            type="email"
            {...register("email")}
          />
        </div>
        <div>
          {errors.confirmEmail?.message}
          <input
            placeholder="Confirme seu Email"
            {...register("confirmEmail")}
            type="email"
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
        <div>
          {errors.confirmPassword?.message}
          <input
            placeholder="Confirme sua Senha"
            {...register("confirmPassword")}
            type="password"
          />
        </div>
        <div>
          {errors.checkbox?.message}
          <div className="checkbox">
            <input
              type="checkbox"
              placeholder="Confirme sua Senha"
              {...register("checkbox")}
            />
            <span>Eu aceito os termos de uso da aplicação</span>
          </div>
        </div>
        <button type="submit">Enviar!</button>
      </form>
    </div>
  );
}

export default SignUp;
