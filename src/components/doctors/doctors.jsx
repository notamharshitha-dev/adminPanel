import React from "react";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
function DoctorsPage(){
    return <div>
        <Navbar/>
        <Link  className="btn btn-primary " style={{"position":"fixed","top":"80px","right":"0px"}} to="/addDoctorPage" >Add Doctor</Link >
    </div>
}
export default DoctorsPage