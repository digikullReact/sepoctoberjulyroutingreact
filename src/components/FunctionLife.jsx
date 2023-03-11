import React, { useEffect, useState } from 'react'

const FunctionLife = () => {

    const [state,setState]=useState(0);
    const [data,setData]=useState(9);
   /// console.log("Constructor Called For function component");

    // Very Imp-- every useEffect that you use gets called in the beginning or when the component is loaded for the first time


    // this version of useEffect shows us the mounting phase
    // and it gets called only once --during the first load
    useEffect(()=>{
    // console.log("Function Component mounted");
     // this function will show us the unmounting phase
     return ()=>{
       //console.log("unmounting happens")
     }

    },[])

    // this version shows you the updation phase
    // it gets called first time as well during the first load
    // and it gets called after every subsequent state updates as well


    useEffect(()=>{
    // console.log("Function compoenent Updation phase");
          // this function will show us the unmounting phase
          // as it gets triggered during the uunmounting of component

     return ()=>{
       // console.log("unmounting happens 2")
      }
    })


    // selective updation
    // the below version of useEffect will get called when the component is loaded
    // for the first time 
    // and it will get called every time the state variable is changed 

    useEffect(()=>{
        console.log("Selection Function Component mounte and update");

        // this is not necessary but you can use it if you want
       return ()=>{

       }
   
       },[state,data])  // this array will always have the state or props variable


    const handleClick=()=>{
        setState(state+1)
    }


    const handleClick2=()=>{
        setData(data+1)
    }



  return (
    <div>FunctionLife



        <button onClick={handleClick}>
            Change State
        </button>


        <button onClick={handleClick2}>
            Change Data
        </button>
    </div>
  )
}

export default FunctionLife