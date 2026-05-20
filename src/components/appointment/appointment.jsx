import React from "react";
import Navbar from "../navbar/navbar";
import { useGetAllAppointmentsByNameQuery } from "../../servies/appiontmentsApi";
function Apponitments(){
    var {isLoading,data}=useGetAllAppointmentsByNameQuery();
    console.log(data)
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
                    
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((allAppiontments)=>{
                        return <tr>
                            <td>{data.indexOf(allAppiontments)+1}</td>
                            <td>{allAppiontments.patient}</td>
                            <td>{allAppiontments.doctorName}</td>
                            <td>{allAppiontments.consultationFee}</td>
                            <td>{allAppiontments.appointmentDate}</td>
                            <td>{allAppiontments.status}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>}
    </div>
}
export default Apponitments