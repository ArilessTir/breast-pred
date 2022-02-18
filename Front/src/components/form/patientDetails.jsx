import React from "react";

const PatientDetails=({nextStep, data, setter})=>{
    const handleChange = (e) =>{
        e.preventDefault();
        setData({...data,[e.target.name]:e.target.value})
      }   
    return(
        <>
                <h1>Patient Detail</h1>
                <button onClick={nextStep}>
                            Next
                </button>
        </>
    )
}

export default PatientDetails;