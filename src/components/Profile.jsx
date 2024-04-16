import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";
import { useState } from "react";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setName(user?.displayName);
    setPhoto(user?.photoURL);
  }, [user?.displayName, user?.photoURL]);

  const onChangeName = (e) => {
    e.preventDefault();
    const newName = e.target.value;
    console.log(newName);
    setName(newName);
  };
  const onChangePhoto = (e) => {
    e.preventDefault();
    const newPhoto = e.target.value;
    console.log(newPhoto);
    setPhoto(newPhoto);
  };

  const handleUpdate = () => {
    setLoading(true);
    updateUserProfile(name, photo);
    // .then((result) => {
    //   console.log(result);
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
    toast.success("Your profile has updated successfully");
    location.reload();
    setTimeout(setLoading, 1500, false);
  };

  return loading ? (
    ""
  ) : (
    <div className="">
      {user && <p src={user.displayName} alt=""></p>}
      {/* input */}
      <div className="hero-content w-4/5 mx-auto">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold px-4 mt-6">
            My Profile
          </h1>
          <div className="">
            <img
              className="w-52 mx-auto my-6 h-52 rounded-full"
              src={
                user
                  ? photo
                  // : "https://i.ibb.co/hBtcNgp/blank-profile-picture.webp"
                  : "https://i.ibb.co/RPpmvwb/images-blank-profile.png"
              }
              alt="profile image"
            />
            <p className="text-center">{user?name:''}</p>
          </div>
          <div className="p-4">
            <div>
              <h2> Your Name:</h2>
              <input
                type="text"
                className="input w-full bg-gray-300 mb-3 "
                value={name}
                onChange={(e) => onChangeName(e)}
              />
            </div>
            <div>
              <h2> Your Photo URL:</h2>
              <input
                type="text"
                className="input bg-gray-300 w-full mb-3 "
                value={photo}
                onChange={(e) => onChangePhoto(e)}
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleUpdate}
                className="btn bg-blue-700 hover:bg-blue-gray-900 text-white "
              >
                Update Now
              </button>
            </div>
          </div>
          <p className="p-3 text-center">
            <Link to="/" className="text-blue-500 ">
              Go to home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
