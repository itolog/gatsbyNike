import React from 'react';
import './Header.scss';

class Header extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <header className="header">
        <div className="logo" />

        <div className="menu" />
      </header>
    );
  }
}

export default Header;
