import { useFormik } from "formik";
import {  Link, useNavigate } from "react-router-dom";
import { useGetAdminSignUpNameMutation } from "../../servies/signUpApi";

function SignUpPage(){
    var navigate=useNavigate();
    var [addAdminFn]=useGetAdminSignUpNameMutation()
    var signUpForm=useFormik({
        initialValues:{
            "username":"",
            "password":"",
            "role":"admin"
        },
        onSubmit:(values)=>{
           console.log(values)
           addAdminFn(values).then((res)=>{
            console.log(res);
            navigate("/")
           })
        }
    })
return<div>
            <h1 className="text-center" >signUp</h1>
            <div className="outerDiv" >                
                <div className="myContainer">            
                        <form onSubmit={signUpForm.handleSubmit} >
                            <label htmlFor="username">Username</label>
                            <input type="text"id="username" className="inputBoxBorder" {...signUpForm.getFieldProps("username")}  />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="inputBoxBorder" {...signUpForm.getFieldProps("password")} />
                            <button className="btn btn-primary" type="submit">SignUp </button>  <br />
                            <b>Already a User?</b><Link to="/" >Login</Link>          
                        </form>                    
                </div>
            </div>
    </div> 
}
export default SignUpPage