import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { login, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.email.value;
    console.log(email, password);

    // login
    login(email, password)
      .then((result) => {
        console.log(result.user);
        toast("You have successfully logged in");

        // navigate after log in
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero  min-h-screen bg-base-200">
      <Helmet>
        <title>Nest Plaza/ Login</title>
      </Helmet>
      <div className="hero-content w-4/5">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold px-4 mt-6">
            Login now!
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <ToastContainer />
            </div>
          </form>
          
          <p className="p-8">
            Do not have an account?{" "}
            <Link to="/register" className="text-sky-300">
              Register
            </Link>
          </p>
          <div className="flex justify-center items-center gap-6 pb-4">
            <p>Log in with</p>
            <button
              onClick={() => {
                googleLogin();
              }}
              className="btn btn-outline btn-primary text-secondary"
            >
              Google
            </button>
            <button
              onClick={() => {
                githubLogin();
              }}
              className="btn btn-outline btn-secondary "
            >
              Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
