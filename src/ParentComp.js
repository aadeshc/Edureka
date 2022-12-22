import React, { Component } from 'react'
import MyFirstComp from './MyFirstComp'
import { SecondComp } from './SecondComp'

export default class ParentComp extends Component {
  render() {
    return (
      <div>
              <SecondComp/>

      </div>
    )
  }
}
