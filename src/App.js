import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        {/* class component */}
        <h1>Hello world</h1> 
      </div>
    )
  }
}
