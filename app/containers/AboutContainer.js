'use strict'
import React from 'react'
import {connect} from 'react-redux'
import About from '../pages/About'

class AboutContainer extends React.Component {
  render () {
    return (
      <About {...this.props} />
    );
  }
}

function mapStateToProps (state) {
  const {About} = state
  return {
    About
  }
}

export default connect(mapStateToProps)(AboutContainer)
