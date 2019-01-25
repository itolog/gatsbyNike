import React from 'react';

import Header from '../Header';
import './FirstScreen.scss';
import Image from '../../UI/Image1';
import WrappCenter from '../WrappCenter/WrappCenter';
import ButtonMy from '../../UI/button/ButtonMy';

class FirstScreen extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <section className="first-screen">
        <WrappCenter>
          <div className="content">
            {' '}
            <Header />
            <div className="circle-1" />
            <div className="circle-1 circle-2" />
            <div className="info">
              <h1 className="first-screen--title">
                Your Title Goes Here Make It Long & Maybe 3 Lines
              </h1>
              <div className="info--btns">
                <ButtonMy text="explore" />
                <ButtonMy text="Add to cart" />
              </div>
            </div>
            <div className="main-image">
              <Image />
            </div>
          </div>
        </WrappCenter>
        <img
          className="bg--img"
          src={require('../../images/top_pn.svg')}
          alt="bg2"
        />
      </section>
    );
  }
}

export default FirstScreen;
