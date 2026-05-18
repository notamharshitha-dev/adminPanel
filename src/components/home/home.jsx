import React  from "react";
import Navbar from "../navbar/navbar";
function HomePage(){
    return <div>
        <Navbar/>
        <div class="adminOuterDiv" >
            <div class="adminInnerDiv bg-success " >
                <h3>Total Users</h3>
            </div>
            <div class="adminInnerDiv bg-info " >
                <h3>Total Doctors</h3>
            </div>
            <div class="adminInnerDiv bg-warning " >
                <h3>Total Earnings</h3>
            </div>
        </div>
    </div>
}
export default HomePage