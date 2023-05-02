import React from 'react'
import styles from './HomeStyle.module.css'
import { useAuth } from "../context/auth.js";
import { useNavigate } from 'react-router-dom';
function Home() {
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
  return (
    <div className= {styles.home}>
        
        <div  className={styles.box}>
        <h1 className='text-bold' style={{color: "white"}}>Welcome to Treasure-Hunt</h1>
        <h3 className='text-bold text-center'  style={{color: "white"}}>Get ready to follow the clues and uncover the prize in a thrilling treasure hunt!</h3>
           {auth?.user ? 
            <button className={styles.box1 }
              style={{maxWidth: "120px"}}
              onClick={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
            >
              Dashboard
            </button>
           : 
            <button className= {styles.box1}
              style={{maxWidth: "120px"}}
              
              onClick={(e) => {
                e.preventDefault();
                navigate("/register");
              }}
            >
              Register
        </button>}
        </div>
    </div>
  )
}

export default Home