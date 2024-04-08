import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";
// import auth from "../Firebase/FirebaseConfig";
// import googleProvider from "./Providers/AuthProvider";
// import githubProvider from "./Providers/AuthProvider";

const Login = () => {
  const { login, googleLogin, githubLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.email.value;
    console.log(email, password);

    // login
    login(email, password)
      .then((result) => {
        console.log(result.user);
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
              onClick={() => {googleLogin()}}
              className="btn btn-outline btn-primary text-secondary"
            >
              Google
            </button>
            <button
              // onClick={}
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
