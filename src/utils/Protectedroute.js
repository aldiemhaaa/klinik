import React, { useEffect, useState } from "react";
import { Navigate,useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = sessionStorage.getItem('token');
        if (!userToken || userToken === 'undefined') {
            // console.log(userToken);
            setIsLoggedIn(false);
            // <Navigate to={'login'} replace />
            return navigate('/login',{replace:true});
        }
        return setIsLoggedIn(true);
    }
    useEffect(() => {
            checkUserToken();
        }, [isLoggedIn]);
    return (
        <>
            {
                isLoggedIn ?props.children : null
            }
        </>
    );
}
export default ProtectedRoute;