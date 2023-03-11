import React, { useState } from 'react'
import ClassComp from './ClassComp'
import FunctionLife from './FunctionLife';

const Funccomp = () => {
  const [show,setShow]=useState(true);
  const hideClassComp=()=>{
    setShow(!show);
  }
  return (
    <div>
      {
        /*
        show?<ClassComp/>:""
        */
       show?<FunctionLife/>:""

      }



      <button style={{marginTop:"50px"}} onClick={hideClassComp}>
        Hide Class Component
      </button>
    </div>
  )
}

export default Funccomp