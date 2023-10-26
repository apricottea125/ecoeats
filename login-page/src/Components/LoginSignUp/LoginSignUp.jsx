
import './LoginSignUp.css';
import React, {useState} from "react";
import food_img from '../Assets/foodimg.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';


const LoginSignUp = () => {

    const[action,setAction] = useState("Login");

    return(
    <div>
        <div className = "food" ><img src = {food_img} alt = ""/></div>
        <div className = "container">
            <div className = "header">
                <div className = "text">
                    {action}
                </div>
                <div className = "underline"></div>
                <div className = "inputs">
                    <div className = "input">
                        <img src = {email_icon} alt = ""/>
                        <input type = "email" placeholder='Email Id'/>
                    </div>
                    <div className = "input">
                        <img src = {password_icon} alt = ""/>
                        <input type = "password" placeholder='Password'/>
                    </div>
                </div>
                {action==="Sign Up"?<div></div>:<div className="forgot-password">
                    Lost Password? <span>Click Here!</span>
                </div>}
                
                <div className="submitContainer">
                    <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>
                        Sign Up
                    </div>
                    <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>
                        Login
                    </div>
                </div>
            </div>
           
        </div>
    </div>
    )
}

export default LoginSignUp