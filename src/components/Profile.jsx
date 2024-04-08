import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";


const Profile = () => {
    const {user}  = useContext(AuthContext);
    return (
        <div>
            {
            user && <p src={user.displayName
            } alt="" ></p>
            }
            {/* input */}
            <div className="hero-content w-4/5 mx-auto">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold px-4 mt-6">My Profile</h1>
          <form
            
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
            
          </form>
          <p className="p-3 text-center"> 
            <Link to="/" className="text-blue-300 ">
            Go to home
            </Link>
          </p>
        </div>
      </div>
        </div>
    );
};

export default Profile;