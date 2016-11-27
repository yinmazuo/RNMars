'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../pages/Main';
import * as ZhihuNewsActions from '../actions/ZhihuNewsActions';

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

const mapStateToProps = state => ({ store: state.ZhihuNews});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(ZhihuNewsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
