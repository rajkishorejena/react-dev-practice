/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useState } from "react";
import "./App.css"
const Dropdown = ({labelText, options, onChangeValue} ) => {
  const [selectedOption,setSelectedOption] = useState(labelText)
  return (
    <>
      <select value={selectedOption} onChange={(e)=>{
        setSelectedOption(e.target.value)
        onChangeValue(e.target.value)
      }} className="select">
            <option value={labelText} disabled>{labelText}</option>
        {
          options.map((option, index) => (
            <option value={option} key={index}>{option}</option>
          ))
        }
      
      </select>
    </>
  );
};

export default Dropdown;
