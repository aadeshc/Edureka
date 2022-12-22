import React, { Component } from 'react'
import { withCounter } from './withCounter'

 class HoverCounter extends Component {

  render() {

  

    
    return (
      <div onMouseOver={this.props.handleChange}>

{this.props.Counter}
 <br/>
 <br/>
      </div>
    )
  }
}


export default withCounter(HoverCounter)