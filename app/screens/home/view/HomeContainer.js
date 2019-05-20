import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeView from './HomeView';

class HomeContainer extends Component {
  render() {
    return <HomeView {...this.props} />
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = state => {
  return {}
}

// export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
export default HomeContainer;


