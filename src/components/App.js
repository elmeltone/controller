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
            <div className="grip"><p>||||</p></div>
            <div className="sensor-name"><p className="title">Light</p></div>
            <div className="indicator"></div>
          </div>
          <div className="instrument CO2">
            <div className="grip"><p>||||</p></div>
            <div className="sensor-name"><p className="title">CO2</p></div>
            <div className="indicator"></div>
          </div>
          <div className="instrument humidity">
            <div className="grip"><p>||||</p></div>
            <div className="sensor-name"><p className="title">Humidity</p></div>
            <div className="indicator"></div>
          </div>
          <div className="instrument pH">
            <div className="grip"><p>||||</p></div>
            <div className="sensor-name"><p className="title">pH</p></div>
            <div className="indicator"></div>
          </div>
          <div className="instrument power">
            <div className="grip"><p>||||</p></div>
            <div className="sensor-name"><p className="title">Power</p></div>
            <div className="indicator"></div>
          </div>
        </div>
      </div>

    )
  }
};

export default App;
