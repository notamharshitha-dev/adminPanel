import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import { useDeleteDoctorDetailsByNameMutation, useGetAllDoctorsByNameQuery,  useLazyGetAllDoctorsByNameQuery, useUpdateDoctorStatusByNameMutation } from "../../servies/addDoctorApi";
function DoctorsPage(){
    var [status,setStatus]=useState("");
    var {isLoading,data}=useGetAllDoctorsByNameQuery();
    var [deleteDoctorFn]=useDeleteDoctorDetailsByNameMutation()
    var [getLatestDoctorsFn]=useLazyGetAllDoctorsByNameQuery();
    var [updateDoctorStatusFn]=useUpdateDoctorStatusByNameMutation();
    console.log(data)
    function deleteDoctor(doctorId){
        console.log(doctorId);
       deleteDoctorFn(doctorId).then((res)=>{
        console.log(res)
        getLatestDoctorsFn()
       })
    }
    function updateDoctorStatus(updatedDoctorDetails){
        console.log(updatedDoctorDetails);
        updateDoctorStatusFn(updatedDoctorDetails).then((res)=>{
            //console.log(res);
            getLatestDoctorsFn()
        })
    }
    return <div>
        <Navbar/>
        <Link  className="btn btn-primary " to="/addDoctorPage" >Add Doctor</Link >
        {isLoading && <h1 className="text-center text-success" >Loading...</h1> }
       {!isLoading && <table className="table" >
            <thead>
                <tr>
                    <th>SNO</th>
                    <th>NAME</th>
                    <th>GENDER</th>
                    <th>SPECIALITY</th>
                    <th>FEES</th>
                    <th>STATUS</th>
                    <th>REMOVE</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((doctorDeatils)=>{
                        return <tr>
                            <td>{data.indexOf(doctorDeatils)+1}</td>
                            <td>{doctorDeatils.name}</td>
                            <td>{doctorDeatils.gender}</td>
                            <td>{doctorDeatils.speciality}</td>
                            <td>{doctorDeatils.fees}</td>
                            { doctorDeatils.status==='available' && <td><button className="btn btn-primary" onClick={()=>{ updateDoctorStatus({...doctorDeatils,status:"notAvailable"}) }} >update Status</button></td>  }
                            { doctorDeatils.status==='notAvailable' && <td><button className="btn btn-primary" onClick={()=>{ updateDoctorStatus({...doctorDeatils,status:"available"}) }} >update Status</button></td>  }
                            <td><button className="btn btn-primary" onClick={()=>{ deleteDoctor(doctorDeatils._id) }} >remove Doctor</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>}
    </div>
}
export default DoctorsPage