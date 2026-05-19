import React, { useState } from "react";
import { useGetUserLoginByNameMutation } from "../../servies/loginApi";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
function LoginPage(){
    var [getLoginFn]=useGetUserLoginByNameMutation();
    var [loginFailed,setLoginFailed]=useState(null)
    var navigate=useNavigate()
    var loginForm=useFormik({
        initialValues:{
            username:"",
            password:"",
            role:"admin"
        },
        onSubmit:(values)=>{
            console.log(values);
            getLoginFn(values).then((res)=>{
                console.log(res);
                if(res?.data?.msg === "login success" ){
                    window.localStorage.setItem("username",res.data.username);
                    window.localStorage.setItem("token",res.data.token);
                    setLoginFailed(null);
                    navigate("/homePage")
                }else{
                    setLoginFailed(res?.error?.data)
                }
            })
        }
    })
    /* <div class="row g-4 align-items-center">
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">username</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" class="form-control"/>
                            </div>                           
                        </div>
                        <div class="row g-4 align-items-center">
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">Password</label>
                            </div>
                            <div class="col-auto">
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
                            </div>
                            <div class="col-auto">
                                <span id="passwordHelpInline" class="form-text">
                                Must be 8-20 characters long.
                                </span>
                            </div>
                        </div>*/
    return <div>
        <h1 className="text-center" >Login</h1>
        <div class="outerDiv" >                
            <div class="myContainer">            
                    <form onSubmit={loginForm.handleSubmit} >
                        <label htmlFor="username">Username</label>
                        <input type="text"id="username" class="inputBoxBorder" {...loginForm.getFieldProps("username")} />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" class="inputBoxBorder" {...loginForm.getFieldProps("password")} />                       
                        { /*window.localStorage.getItem("username") ? navigate("/homePage") : */<button className="btn btn-primary" type="submit">Login </button> }  <br />  
                        <b>Not Yet Registered?</b><Link to="/signUpPage" >signUp</Link>   <br/><br />             
                        { loginFailed!==null && <b className="text-danger" >{loginFailed}</b> }                  
                    </form>                    
            </div>
        </div>
    </div> 
}
export default LoginPage