import React,{useState} from 'react'
import './App.css'
import './styles/button.css'
import Navbar from './components/navbar/navbar'
import Formulary from './components/form/formulary'


const App= ()=> {
  const [diag, setDiag] =useState();

  return (
    <div className="App">
      <Navbar />
      {/* <header className="App-header">
        <h1> Breats Prediction</h1>
        <div className='scroll'>
          <div className='scroll__circle'>
            <BsChevronDown className='chevron'/>
            <BsChevronDown className='chevron'/>
          </div>
        </div>
      </header> */}
      <Formulary setDiag={setDiag}/>
      <p>Result : {diag} </p>
    </div>
  )
}

export default App
