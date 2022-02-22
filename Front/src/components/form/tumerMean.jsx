import React from "react";
import { Form, Formik } from "formik";
import { TextField } from '@mui/material'
import './form.css'
import '../../styles/button.css'

const TumerMean=({previousStep, nextStep, data, setter})=>{
    const handleChange = (e) =>{
        e.preventDefault();
        setter({...data,[e.target.name]:e.target.value})
      }  
    return(
       
       <>
           <h1>Tumer Mean</h1>
            <Formik initialValues={{
                id:0,
                radius_mean:0,
                texture_mean:0,
                perimeter_mean:0,
                area_mean:0,
                smoothness_mean:0,
                compactness_mean:0,
                symmetry_mean:0,
                fractal_dimension_mean:0
            }}>
                <Form className="form">
                    <TextField value={data.id} name='id' label='id' onChange={handleChange} />
                    <TextField value={data.radius_mean} name='radius_mean' label='radius_mean' onChange={handleChange}/>
                    <TextField value={data.texture_mean} name='texture_mean' label='texture_mean' onChange={handleChange}/>
                    <TextField value={data.perimeter_mean} name='perimeter_mean' label='perimeter_mean' onChange={handleChange}/>
                    <TextField value={data.area_mean} name='area_mean' label='area_mean' onChange={handleChange}/>
                    <TextField value={data.smoothness_mean} name='smoothness_mean' label='smoothness_mean' onChange={handleChange}/>
                    <TextField value={data.compactness_mean} name='compactness_mean' label='compactness_mean' onChange={handleChange}/>
                    <TextField value={data.concavity_mean} name='concavity_mean' label='concavity_mean' onChange={handleChange}/>
                    <TextField value={data.symmetry_mean} name='symmetry_mean' label='symmetry_mean' onChange={handleChange}/>
                    <TextField value={data.fractal_dimension_mean} name='fractal_dimension_mean' label='fractal_dimension_mean' onChange={handleChange}/>

                    <div className="action">
                        <button className="button button__previous" onClick={previousStep}>
                                Previous
                        </button>

                        <button className="button button__next" onClick={nextStep}>
                                Next
                        </button>
                    </div>

                </Form>    
            </Formik>
       </>
        
    )
}

export default TumerMean;