import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoadingGIF from "../../images/Loading.gif";

export default function Loading( {path = "login"} ) {
    // state 
    const [count, setCount] = useState(3);
    // hooks
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currenCount) => --currenCount);
        }, 1000);

        count==0  && navigate(`/${path}`, {
            state: location.pathname,
        });
        
        return () => clearInterval(interval);
    }, [count]);

    return <div className="d-flex justify-content-center align-items-center" style={{height: "90vh"}} >
        <img src={LoadingGIF} alt="Loading" style={{width: "450px"}}/>    
    </div>
}