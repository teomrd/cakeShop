import React from 'react';
import AppBar from 'material-ui/AppBar';
import logo from '../../../public/images/cakeShopLogo.png';

const CakeBar = () => (
  <AppBar
    title="CakeLovers"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    style={{
      position: 'fixed',
      top: '0',
    }}
    titleStyle={{
      textAlign: 'left',
    }}
    iconStyleLeft={{
      height: '50px',
    }}
    iconElementLeft={
      <img
        alt="CakeLovers"
        src={logo}
        style={{
          height: '100%',
        }}
      />
    }
  />
);

export default CakeBar;
