import Jumbotron from "../../components/cards/Jumbotron.js";
import { useState } from "react";
import toast from "react-hot-toast";
import styles from '../HomeStyle.module.css'
import axios from "axios";
import { useAuth } from "../../context/auth.js";
import { useNavigate, useLocation } from "react-router-dom";
export default function Login(){
    // state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //hooks
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const { data } = await axios.post(`/login`,{
                email, password,
            });
            if (data?.error){
                toast.error(data.error);
            }
            else {
                // // save user and token to localstorage
                localStorage.setItem("auth", JSON.stringify(data));
                setAuth({...auth, token: data.token, user: data.user});       
                 
                console.log("auth", data.user.role)
                
                toast.success("Login successful.");

                if(data.user.role === 0)
                navigate( "/dashboard");

                if(data.user.role === 1)
                navigate( "/score/admin");
            }
        }
        catch(err){
            console.log(err);
            toast.error("Login failed. Please try again.");
        }
    }
    return (
        <div className= {styles.home2}>
            <Jumbotron   title="Login"/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form onSubmit={handleSubmit}> 
                            <input 
                                type="email" 
                                className="form-control mb-4 p-2" 
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoFocus
                            />
                            <input 
                                type="password" 
                                className="form-control mb-4 p-2" 
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="btn btn-dark" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}