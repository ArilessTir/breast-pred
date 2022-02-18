import React from "react";
import { Form, Formik } from "formik";
import { TextField } from '@mui/material'
import './form.css'
import '../../styles/button.css'

const TumerSe=({previousStep, nextStep, data, setter})=>{
    const handleChange = (e) =>{
        e.preventDefault();
        setter({...data,[e.target.name]:e.target.value})
      }  
       return(
        <>
            <h1>Tumer Se</h1>
             <Formik initialValues={{
                 radius_se:0,
                 texture_se:0,
                 perimeter_se:0,
                 area_se:0,
                 smoothness_se:0,
                 compactness_se:0,
                 concave_points_se:0,
                 symmetry_se:0,
                 fractal_dimension_se:0
             }}>
                 <Form className="form">
                    <TextField value={data.radius_se} name='radius_se' label='radius_se' onChange={handleChange} />
                    <TextField value={data.texture_se} name='texture_se' label='texture_se' onChange={handleChange}/>
                    <TextField value={data.perimeter_se} name='perimeter_se' label='perimeter_se' onChange={handleChange}/>
                    <TextField value={data.area_se} name='area_se' label='area_se' onChange={handleChange}/>
                    <TextField value={data.smoothness_se} name='smoothness_se' label='smoothness_se' onChange={handleChange}/>
                    <TextField value={data.compactness_se} name='compactness_se' label='compactness_se' onChange={handleChange}/>
                    <TextField value={data.concavity_se} name='concavity_se' label='concavity_se' onChange={handleChange}/>
                    <TextField value={data.concave_points_se} name='concave_points_se' label='concave_points_se' onChange={handleChange}/>
                    <TextField value={data.symmetry_se} name='symmetry_se' label='symmetry_se' onChange={handleChange}/>
                    <TextField value={data.fractal_dimension_se} name='fractal_dimension_se' label='fractal_dimension_se' onChange={handleChange}/>

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

export default TumerSe;