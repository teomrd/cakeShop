import React, { Component } from 'react';
import './App.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CakeTheme from '../../shared/themes/CakeTheme';
import CakesContainer from '../../containers/CakesContainer/CakesContainer';
import CakeBar from '../../components/CakeBar/CakeBar';

class App extends Component {
  /*
   Material-UI components use React's context feature to implement theming.
   The key passed through context must be called "muiTheme"
   */
  static childContextTypes = {
    muiTheme: React.PropTypes.object,
  }

  /*
   Pass down theme to children
   */
  getChildContext() {
    return {
      muiTheme: getMuiTheme(CakeTheme),
    };
  }

  render() {
    return (
      <div className="App">
        <CakeBar />
        <div
          style={{
            marginTop: '64px',
          }}
        >
          <CakesContainer />
        </div>
      </div>
    );
  }
}

export default App;
