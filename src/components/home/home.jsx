import React  from "react";
import Navbar from "../navbar/navbar";
import { useGetAllDoctorsByNameQuery } from "../../servies/addDoctorApi";
import { useGetAllPatientsByNameQuery } from "../../servies/patientsApi";
import { useGetAllAppointmentsByNameQuery } from "../../servies/appiontmentsApi";

function HomePage(){
     var {isLoading,data}=useGetAllDoctorsByNameQuery();
     var {isLoading:isPatientDataLoading,data:patientData}=useGetAllPatientsByNameQuery();
     var {isLoading:isAlliontmentsDataLoading,data:earningData}=useGetAllAppointmentsByNameQuery();
     console.log(earningData)
     console.log(patientData);
    var totalEarnings=0
    earningData?.forEach((a)=>
    {
        //console.log(a.consultationFee)
     if(a.status==="completed"){
            totalEarnings+=a.consultationFee
        }
     })
     //console.log(totalEarnings)
    return <div>
        <Navbar/>
        <div class="adminOuterDiv" >
            <div class="adminInnerDiv bg-success " >
                <h3>Total Users</h3>
                <h3>{patientData?.length}</h3>
                
            </div>
            <div class="adminInnerDiv bg-info " >
                <h3>Total Doctors</h3>
                <h3>{data?.length}</h3>
            </div>
            <div class="adminInnerDiv bg-warning " >
                <h3>Total Earnings</h3>
                <h3>{totalEarnings}</h3>
            </div>
        </div>
    </div>
}
export default HomePage