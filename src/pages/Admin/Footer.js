import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div         style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "black",
        color: 'white',
        padding: 10
      }}>© 2022 Copyright: EZtests</div>
    )
  }
}
