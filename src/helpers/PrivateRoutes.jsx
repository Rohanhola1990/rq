// import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = (props) => {
    // const logState = useSelector((state) => state.auth.isLoggedIn);
    const logState = false

    return (
        logState ? 
            <Outlet /> :
            <Navigate to="/auth/login" />
    )
};  

export default PrivateRoutes;