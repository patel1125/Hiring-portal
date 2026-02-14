import React,{useState} from "react";


const Forget_pass =()=>{
    
    return(
        <div className="app-bg" >
            <div className="auth-card">
                <h2 className="auth-title" >Forget Password</h2>
                
                <form action=""className="space-y-4" >
                    <label htmlFor="" className="auth-label">Email</label>
                    <input 
                    type="email"
                    placeholder="enter email"
                    name="email"
                    className="auth-input"
                      />
                    <button className="auth-btn">Reset Password</button>
                </form>
                
           
            </div>
            
        </div>
    );

};
export default Forget_pass;