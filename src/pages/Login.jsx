import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { authFirebase } from "../firebase";
import "../styles/Auth.css";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleLogin = async (data) => {
    const { email, password } = data;

    try {
      await signInWithEmailAndPassword(authFirebase, email, password);
      navigate("/dashboard");
    } catch (error) {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <main className="auth-container">
      <h1>Iniciar Sesión</h1>

      <form className="auth-form" onSubmit={handleSubmit(handleLogin)}>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Tu correo"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="error">El correo es obligatorio</span>}
        </div>

        <div className="field">
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Tu contraseña"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="error">La contraseña es obligatoria</span>
          )}
        </div>

        <button type="submit" className="btn-primary">
          Ingresar
        </button>
      </form>

      <NavLink to="/register" className="auth-link">
        ¿No tienes cuenta? Regístrate
      </NavLink>
    </main>
  );
};

export default Login;
