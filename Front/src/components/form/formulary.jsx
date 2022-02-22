import React, {useState} from "react";
import PatientDetails from "./patientDetails";
import TumerMean from './tumerMean'
import TumerSe from './tumerSe'
import TumerWorst from './tumerWorst'
import Card from "../card/card";
import axios from "axios";

const Formulary = ({ setDiag })=>{

    const [data,setData] = useState({
        step:1,
        id: 0,
        radius_mean: 0,
        texture_mean: 0,
        perimeter_mean: 0,
        area_mean: 0,
        smoothness_mean: 0,
        compactness_mean: 0,
        concavity_mean: 0,
        concave_points_mean: 0,
        symmetry_mean: 0,
        fractal_dimension_mean: 0,
        radius_se: 0,
        texture_se: 0,
        perimeter_se: 0,
        area_se: 0,
        smoothness_se: 0,
        compactness_se: 0,
        concavity_se: 0,
        concave_points_se: 0,
        symmetry_se: 0,
        fractal_dimension_se: 0,
        radius_worst: 0,
        texture_worst: 0,
        perimeter_worst: 0,
        area_worst: 0,
        smoothness_worst: 0,
        compactness_worst: 0,
        concavity_worst: 0,
        concave_points_worst: 0,
        symmetry_worst: 0,
        fractal_dimension_worst: 0
      })


    const config = {
    method: 'post',
    url: 'http://0.0.0.0:5000/prediction',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const req = await axios(config);
            const resp = await req.data;
            console.log(data);
            console.log(resp);
            setDiag(resp.data === 'B'?"Benine":"Maline");
        }
        catch(err){
            console.error(err);
        }
    }


    const nextStep =() =>{
        setData({...data,step:data.step+1})
    }
    const previousStep =() =>{
        setData({...data,step:data.step-1})
    }
        
        switch(data.step){
            case 1 :
                return(
                    <PatientDetails 
                        nextStep={nextStep}
                        data={data}
                        setter={setData}
                    />
                )
            case 2 :
                return(
                    <Card>
                        <TumerMean
                            nextStep={nextStep}
                            previousStep={previousStep}
                            data={data}
                            setter={setData}
                        /> 
                    </Card>

                )
            case 3 :
                return(
                    <Card>
                        <TumerSe
                            nextStep={nextStep}
                            previousStep={previousStep}
                            data={data}
                            setter={setData}
                        />
                    </Card>
                )
            case 4 :
                return(
                    <Card>
                        <TumerWorst 
                            submit={handleSubmit}
                            previousStep={previousStep}
                            data={data}
                            setter={setData}
                        />
                    </Card>
                )
        }
       
}


export default Formulary