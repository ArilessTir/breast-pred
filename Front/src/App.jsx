import React, {useEffect} from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import {BsChevronDown} from "react-icons/bs"

import axios from 'axios'



const App= ()=> {

const handleSubmit = async (e)=>{
  e.preventDefault()
  console.log('click')
  try{
    let resp = await axios.get('http://localhost:8000')
    let data = await resp.data
    console.log(data);
  } catch(err){
    console.error(err);
  } 
}


  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1> Breats Prediction</h1>
        <div className='scroll'>
          <div className='scroll__circle'>
            <BsChevronDown className='chevron'/>
            <BsChevronDown className='chevron'/>
          </div>
        </div>


      </header>
      <form action="submit">
        <input type="text" placeholder='id'/>
        <input type="text" defaultValue={0} placeholder='radius_mean'/>
        <input type="text" defaultValue={0} placeholder='texture_mean'/>
        <input type="text" defaultValue={0} placeholder='perimeter_mean'/>
        <input type="text" defaultValue={0} placeholder='area_mean'/>
        <input type="text" defaultValue={0} placeholder='smoothness_mean'/>
        <input type="text" defaultValue={0} placeholder='compactness_mean'/>
        <input type="text" defaultValue={0} placeholder='concavity_mean'/>
        <input type="text" defaultValue={0} placeholder='symmetry_mean'/>
        <input type="text" defaultValue={0} placeholder='fractal_dimension_mean'/>
        <input type="text" defaultValue={0} placeholder='radius_se'/>
        <input type="text" defaultValue={0} placeholder='texture_se'/>
        <input type="text" defaultValue={0} placeholder='perimeter_se'/>
        <input type="text" defaultValue={0} placeholder='area_se'/>
        <input type="text" defaultValue={0} placeholder='smoothness_se'/>
        <input type="text" defaultValue={0} placeholder='compactness_se'/>
        <input type="text" defaultValue={0} placeholder='concavity_se'/>
        <input type="text" defaultValue={0} placeholder='concave_points_se'/>
        <input type="text" defaultValue={0} placeholder='symmetry_se'/>
        <input type="text" defaultValue={0} placeholder='fractal_dimension_se'/>
        <input type="text" defaultValue={0} placeholder='radius_worst'/>
        <input type="text" defaultValue={0} placeholder='texture_worst'/>
        <input type="text" defaultValue={0} placeholder='perimeter_worst'/>
        <input type="text" defaultValue={0} placeholder='area_worst'/>
        <input type="text" defaultValue={0} placeholder='smoothness_worst'/>
        <input type="text" defaultValue={0} placeholder='smoothness_worst'/>
        <input type="text" defaultValue={0} placeholder='concavity_worst'/>
        <input type="text" defaultValue={0} placeholder='concave_points_worst'/>
        <input type="text" defaultValue={0} placeholder='symmetry_worst'/>
        <input type="text" defaultValue={0} placeholder='fractal_dimension_worst'/>
        <button onClick={handleSubmit}>
          Send
        </button>
      </form>
      <p>Result : </p>
    </div>
  )
}

export default App
