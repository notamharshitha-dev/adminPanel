import React from "react";
import { useGetAllPatientsByNameQuery } from "../../servies/patientsApi";
import Navbar from "../navbar/navbar";
function AllPatients(){
    var {isLoading,data}=useGetAllPatientsByNameQuery();
    console.log(data)
    return <div>
        <Navbar/>
         {isLoading && <h1 className="text-center text-success" >Loading...</h1> }
       {!isLoading && <table className="table" >
            <thead>
                <tr>
                    <th>SNO</th>
                    <th>USERNAME</th>
                    <th>DOB</th>
                    <th>ADDRESS</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((patientDeatils)=>{
                        return <tr>
                            <td>{data.indexOf(patientDeatils)+1}</td>
                            <td>{patientDeatils.username}</td>
                            <td>{patientDeatils.dob}</td>
                            <td>{patientDeatils.address}</td>
                            <td>{patientDeatils.email}</td>
                            <td>{patientDeatils.phone}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>}
    </div>
}
export default AllPatients