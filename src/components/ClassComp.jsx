import React, { Component } from 'react'

export default class ClassComp extends Component {
  constructor(){
    super();  // it will call the constructor of the super class React Component class
   this.state={
     counter:0,
     inputs:{
        field1:"",
        data:[]
     }
   }

    console.log("Constructor Called");
  }

  // Mounting phase

  // It gets called only once during the whole process after the constructor has been called
  componentDidMount(){
    console.log( " class Component Mounting happened");
  }


  // Updation phase  // it will get triggered as soon as there is state change in the component
  componentDidUpdate(){
    console.log(" Class Component Gets updated");
  }

  // Unmounting phase
  // unmounting happens when component is removed from the dom

  componentWillUnmount(){
    console.log("class Component unmounted");
  }
  /*

  handleClick(){

  }
  */

  handleClick=()=>{

    
   // console.log("hello there");
   this.setState({counter:this.state.counter+1})


  }


  render() {
 // Lifecycle methods


    return (
      <div style={{border:"1px solid green" ,width:"400px",height:"200px"}}>
        <div>

        <h1>{this.state.counter} Class Component</h1>

<button onClick={this.handleClick}>Increment</button>

        </div>



      </div>
    )
  }
}
