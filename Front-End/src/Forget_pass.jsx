import React,{useState} from "react";
import "./Forget_pass.css";

const Forget_pass =()=>{
    
    return(
        <div className="container" >
            <div className="card">
                <h2 className="text" >Forget Password</h2>
                
                <form action=""className="Form" >
                    
                    <input 
                    type="email"
                    placeholder="enter email"
                    name="email"
                      />
                    <button>Reset Password</button>
                </form>
                
            <p>Don't have an account <a href="">Signup?</a></p>
            </div>
            
        </div>
    );

};
export default Forget_pass;