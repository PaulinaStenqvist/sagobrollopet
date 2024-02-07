import React from 'react'
import styles from "./login.module.css";
import { FaUser, FaLock } from "react-icons/fa";
const Login = () => {
    return(
     <div className="wrapper">
        <form action="">
         <h1>Logga In</h1>
         <div className="input-box">
            <input type="text" placeholder='Användarnamn' required />
            <FaUser className='icon' />
         </div>
         <div className="input-box">
            <input type="text" placeholder='Lösenord' required />
            <FaLock className='icon' />
         </div>
         <div className="remember-forgot">
            <label> <input type="checkbox" />Kom ihåg mig</label>
            <a href="a">Glömt Lösenord</a>
         </div>

         <button type="submit">Logga In</button>
         <div className="register-link">
            <p>Har inget konto <a href="a">Registera</a></p>
         </div>
        </form>
     </div>
    );
    };
    export default Login;