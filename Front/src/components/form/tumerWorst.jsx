import React from "react";
import { Form, Formik } from "formik";
import { TextField } from '@mui/material'
import './form.css'
import '../../styles/button.css'

const TumerWorst=({previousStep, data, setter,submit})=>{
    const handleChange = (e) =>{
        e.preventDefault();
        setter({...data,[e.target.name]:e.target.value})
      }  
       return(
        <>
            <h1>Tumer Worst</h1>
            <Formik initialValues={{
                 radius_worst:0,
                 texture_worst:0,
                 perimeter_worst:0,
                 area_worst:0,
                 smoothness_worst:0,
                 compactness_worst:0,
                 concave_points_worst:0,
                 symmetry_worst:0,
                 fractal_dimension_worst:0
             }}>
                 <Form className="form">
                    <TextField value={data.radius_worst} name='radius_worst' label='radius_worst' onChange={handleChange} />
                    <TextField value={data.texture_worst} name='texture_worst' label='texture_worst' onChange={handleChange}/>
                    <TextField value={data.perimeter_worst} name='perimeter_worst' label='perimeter_worst' onChange={handleChange}/>
                    <TextField value={data.area_worst} name='area_worst' label='area_worst' onChange={handleChange}/>
                    <TextField value={data.smoothness_worst} name='smoothness_worst' label='smoothness_worst' onChange={handleChange}/>
                    <TextField value={data.compactness_worst} name='compactness_worst' label='compactness_worst' onChange={handleChange}/>
                    <TextField value={data.concavity_worst} name='concavity_worst' label='concavity_worst' onChange={handleChange}/>
                    <TextField value={data.concave_points_worst} name='concave_points_worst' label='concave_points_worst' onChange={handleChange}/>
                    <TextField value={data.symmetry_worst} name='symmetry_worst' label='symmetry_worst' onChange={handleChange}/>
                    <TextField value={data.fractal_dimension_worst} name='fractal_dimension_worst' label='fractal_dimension_worst' onChange={handleChange}/>

                    <div className="action">
                        <button className="button button__previous" onClick={previousStep}>
                                Previous
                        </button>

                        <button className="button button__validate" onClick={submit}>
                                Validate
                        </button>
                    </div>
 
                 </Form>    
             </Formik>
        </>
         
     )
}

export default TumerWorst;