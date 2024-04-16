import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate} from "react-router-dom"
import PropTypes from 'prop-types';


const ProtectedProfile = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    


    if(loading){
        return <div className="w-full flex justify-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
    }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>
   
  
};

ProtectedProfile.propTypes = {
    children: PropTypes.object,
  };

export default ProtectedProfile;