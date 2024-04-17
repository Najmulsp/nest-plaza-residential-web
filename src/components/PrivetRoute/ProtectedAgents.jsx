import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';

const ProtectedAgents = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location =useLocation();

    
    if(loading){
        return <div className="w-full flex justify-center">
          <span className="loading loading-spinner loading-lg
        "></span>
        </div>
    }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>
};

ProtectedAgents.propTypes = {
    children: PropTypes.object,
  };

export default ProtectedAgents;