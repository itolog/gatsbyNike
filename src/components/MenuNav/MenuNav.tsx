import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './menu.scss';

import { menuActionHide } from '../../store/action.js';

const MenuNav = (props: any) => {
  const { loadMenu, loadedMenu } = props;
  const [visebled, setVisible] = useState(true);
  const [classUsers, setClass] = useState('hidden');
  useEffect(() => {
    setVisible(loadMenu);

    if (visebled) {
      setClass('navigation');
    } else {
      setClass('hidden');
    }
  });

  const handleHide = (): void => {
    // setVisible(false);
    loadedMenu();
  };

  return (
    <section className={classUsers}>
      <div className="navi-content">
        <div className="opacity-block" onClick={handleHide} />
        <nav className="menu-navi">
          <img
            className="close"
            src={require('../../images/cancel.svg')}
            alt="close"
            onClick={handleHide}
          />
          <ul className="nav">
            <li className="nav-item">
              <a href="#first" className="nav-hre">
                item 1
              </a>
            </li>
            <li className="nav-item">
              <a href="#second" className="nav-hre">
                item 2
              </a>
            </li>
            <li className="nav-item">
              <a href="#yoyoy" className="nav-hre">
                item 3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loadMenu: state.menuReduser.visibleMenu,
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  loadedMenu: () => dispatch(menuActionHide()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuNav);
