import React, { Component } from 'react';
import logo from './cakeShopLogo.png';
import './App.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CakeTheme from './shared/themes/CakeTheme';
import CakeList from './components/CakeList/CakeList';

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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to CakeLovers</h2>
          <h4>Cakes and other flavours</h4>
        </div>
        <p className="App-intro">
          <CakeList />
        </p>
      </div>
    );
  }
}

export default App;
