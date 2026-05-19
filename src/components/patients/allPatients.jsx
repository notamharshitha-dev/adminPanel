import React from "react";
import { useGetAllPatientsByNameQuery } from "../../servies/patientsApi";
import Navbar from "../navbar/navbar";
function AllPatients(){
    var {isLoading,data}=useGetAllPatientsByNameQuery();
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
                    data?.map((doctorDeatils)=>{
                        return <tr>
                            <td>{data.indexOf(doctorDeatils)+1}</td>
                            <td>{username}</td>
                            <td>{dob}</td>
                            <td>{address}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>}
    </div>
}
export default AllPatients