import { useState } from "react";
import Dropdown from "./Dropdown";
import "./App.css"

function App() {
  const country = ["India","USA","England"];
  const language = ["English","French","German"];
  const [currentCountry,setCurrentCountry] = useState();
  const [currentLanguage,setCurrentLanguage] = useState()

  const updateCountry = (value) =>{
    setCurrentCountry(value)
  }
  return (
    <>
       <div className="dropdown-container">
         <h3>Employee Information</h3>
         <Dropdown labelText={'Select Country'} options ={country} onChangeValue ={updateCountry}/>
         <Dropdown labelText={'Select Language'} options ={language} onChangeValue ={(value)=>setCurrentLanguage(value)}/>
       </div>
       <div className="info-container">
        <h5>Final Selection</h5>
        <label>Current Selected Country: {currentCountry}</label>
        <label>Current Selected Language:  {currentLanguage}</label>
       </div>

    </>
  )
}

export default App
