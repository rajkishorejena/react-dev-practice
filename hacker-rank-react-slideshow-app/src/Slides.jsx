/* eslint-disable react/prop-types */

import { useState } from "react";

const Slides = ({slides}) =>{
    const[index,setIndex] = useState(0);

    const nestButtonHandler = () =>{
        setIndex(i => i+1)
    }

    const prevButtonHandler = () =>{
        setIndex(i => i-1)
    }

    return(
        <>
        <div className="button-container">
            <button disabled={index===0} onClick={()=>setIndex(0)}>Restart</button>
            <button disabled={index===0} onClick={prevButtonHandler}>Prev</button>
            <button disabled={index === slides.length-1} onClick={nestButtonHandler}>Next</button>
        </div>
           <div className="slide">
              <h5>{slides[index].title}</h5>
              <h6>{slides[index].text}</h6>
           </div>
        </>
    )
};

export default Slides;