import React from "react";
import Navbar from "../navbar/navbar";
import { useGetAllAppointmentsByNameQuery } from "../../servies/appiontmentsApi";
function Apponitments(){
    var {isLoading,data}=useGetAllAppointmentsByNameQuery();
    function updateDoctorStatus(){

    }
    return <div>
        <Navbar/>
        <h1>All Appointments</h1>
         {isLoading && <h1 className="text-center text-success" >Loading...</h1> }
       {!isLoading && <table className="table" >
            <thead>
                <tr>
                    <th>SNO</th>
                    <th>PATIENT</th>
                    <th>DOCTORNAME</th>
                    <th>CONSULTATIONFEE</th>
                    <th>APPIONTMENTDATE</th>
                    <th>STATUS</th>
                    <th>UPDATE STATUS</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((doctorDeatils)=>{
                        return <tr>
                            <td>{data.indexOf(doctorDeatils)+1}</td>
                            <td>{patient}</td>
                            <td>{doctorname}</td>
                            <td>{consultationFee}</td>
                            <td>{appiontmentDate}</td>
                            <td><button className="btn btn-primary" onClick={()=>{ updateDoctorStatus() }} >UPDATE STATUS</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>}
    </div>
}
export default Apponitments