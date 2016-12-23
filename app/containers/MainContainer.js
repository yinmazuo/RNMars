'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../pages/Main';
import * as V2EXActions from '../actions/V2EXActions';

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <Main {...this.props} />
    );
  }
}

const mapStateToProps = state => ({ store: state.V2EX});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(V2EXActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
