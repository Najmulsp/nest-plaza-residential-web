import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);

  const handleRegister = e =>{
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.email.value;
    

    // createUser
    createUser(email, password)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  }



  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Nest Plaza/ Register</title>
      </Helmet>
      <div className="hero-content w-4/5">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold px-4 mt-6">Register</h1>
          <form
              onSubmit={handleRegister}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="URL of your Photo "
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="p-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-300">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
