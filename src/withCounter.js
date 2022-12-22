import React, { Component } from 'react'


// Component which takes old component as input , attaches new functionality to it and returns new component


export const withCounter = (OldComponent) => {

 
    
     class NewComponent extends Component {

        constructor(props){
            super(props)
            this.state={
                Count : 0
            }
        }
    
         handleChange=(e)=>{
                     this.setState({
                        Count: this.state.Count + 1
                     })
         }
      render() {
        return  <OldComponent Name="Aadesh" Counter= {this.state.Count} handleChange={this.handleChange}/>
      }
    }
    
  return  NewComponent
}

