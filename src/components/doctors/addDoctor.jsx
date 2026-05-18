import React from "react";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
function AddDoctor(){
    var doctorForm=useFormik({
        initialValues:{
            name:"",
            email:"",
            degree:"",
            speciality:"",
            gender:"",
            experience:"",
            fees:"",
            phone:"",
            address:""
        },
        onSubmit:(values)=>{
            console.log(values)
        }
    })
    return <div>
        <Navbar/>
        
        <button ><Link  to="/doctorsPage" ><i className="bi bi-x-lg"></i></Link></button>
        <form onSubmit={doctorForm.handleSubmit} >                 
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInputDisabled" placeholder="name@example.com" {...doctorForm.getFieldProps("email")} />
                    <label htmlFor="floatingInputDisabled">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputDisabled" placeholder="Degree" {...doctorForm.getFieldProps("name")} />
                    <label htmlFor="floatingInputDisabled">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputDisabled" placeholder="Degree" {...doctorForm.getFieldProps("degree")} />
                    <label htmlFor="floatingInputDisabled">Degree</label>
                </div>                
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputDisabled" placeholder="Experience" {...doctorForm.getFieldProps("experience")} />
                    <label htmlFor="floatingInputDisabled">Experience</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputDisabled" placeholder="Fee" {...doctorForm.getFieldProps("fees")} />
                    <label htmlFor="floatingInputDisabled">Fee</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputDisabled" placeholder="phone"  {...doctorForm.getFieldProps("phone")} />
                    <label htmlFor="floatingInputDisabled">Phone</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputDisabled" placeholder="Address" {...doctorForm.getFieldProps("address")} />
                    <label htmlFor="floatingInputDisabled">Address</label>
                </div>               
                <div className="form-floating  ">
                    <select className="form-select" id="floatingSelectDisabled" aria-label="Floating label  select example" {...doctorForm.getFieldProps("speciality")} >
                        <option value="1">General</option>
                        <option value="2">Dental</option>
                        <option value="3">Mental</option>
                        <option value="3">Eye</option>
                    </select>  
                    <label htmlFor="floatingSelectDisabled">Select speciality</label>                  
                </div> 
                <div className="form-floating  ">
                    <select className="form-select" id="floatingSelectDisabled" aria-label="Floating label  select example" {...doctorForm.getFieldProps("gender")} >
                        <option value="1">Male</option>
                        <option value="2">Female</option>                        
                    </select>   
                    <label htmlFor="floatingSelectDisabled">Select Gender</label>                 
                </div> 
                <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-primary" type="submit">Add Doctor</button>
                    
                </div>                
        </form>
    </div>
}
export default AddDoctor