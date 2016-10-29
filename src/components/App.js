/*import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    boards: state.boards
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);*/

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="masthead">
          <h1>Controller</h1>
        </div>
        <div className="dashboard">
          <div className="instrument light">
            <h5>Light</h5>
          </div>
          <div className="instrument pH">
            <h5>pH</h5>
          </div>
        </div>
      </div>

    )
  }
};

export default App;
