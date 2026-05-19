import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    var navigate=useNavigate()
    function logOutFn(){
        window.localStorage.clear();
        navigate("/");
    }
    return (
          <nav className="navbar sticky-top bg-body-tertiary" >
            <div className="container-fluid">    
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Admin Panel</a>
                        <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page"  to="/homePage" >Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/doctorsPage">Doctors</Link>
                            </li>   
                            <li className="nav-item">
                            <Link className="nav-link" to="/allPatientsPage" >All Patients</Link>
                            </li>                         
                            <li className="nav-item">
                            <Link className="nav-link" to="/appointments" >All Apponitments</Link>
                            </li>                          
                            
                        </ul>
                        </div>
                    </div>
                </nav>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary" onClick={()=>{ logOutFn() }} >logout</button> 
                </div>
        </div>
        
</nav>
    )
}
export default Navbar