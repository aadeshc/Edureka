import React, { Component } from 'react'
import { withCounter } from './withCounter'

 class Counter extends Component {

    
  render() {

   console.log("COunter function")

    
    return (
      <div>

      </div>
    )
  }
}

export default React.memo(Counter)