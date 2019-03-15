import React from 'react';
import { connect } from 'react-redux';
import { menuActionShow } from '../../store/action.js';
import './Header.scss';

export interface Props {
  menuShow: Function;
}
class Header extends React.PureComponent<Props, {}> {
  hendleMenuShow = (): void => {
    this.props.menuShow();
  };

  public render() {
    return (
      <header className="header">
        <div className="logo" />
        <div className="menu" onClick={this.hendleMenuShow} />
      </header>
    );
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  menuShow: () => dispatch(menuActionShow()),
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
