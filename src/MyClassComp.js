import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SetName } from './components/actions'



// 



 class MyClassComp extends Component {

  
   constructor(props){
    super(props)
    this.state={
      Name : "Aadesh",
      Details : [{
        ID : "1",
        Name : "Aadesh"
      }]
    }
   }
  render() {
    return (
      <div>{this.props.Name}
       <input type="text"/>
     
       <input type="text" value={this.state.Name} onChange={(e)=>this.setState({Name:e.target.value})}/>
      </div>
    )
  }
}


export default MyClassComp