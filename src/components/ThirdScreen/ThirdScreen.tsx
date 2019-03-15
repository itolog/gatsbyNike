import React from 'react';

import './ThirdScreen.scss';
import Image from '../../UI/Image3/Image3';
import WrappCenter from '../WrappCenter/WrappCenter';
import ButtonMy from '../../UI/button/ButtonMy';

class ThirdScreen extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <section className="third-screen">
        <WrappCenter>
          <div className="wrapp-content" id="second">
            <div className="wrapp-content--image">
              <Image />
            </div>
            <div className="wrapp-content--info">
              <h3>The Way You Like It</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
              <div className="wrapp-content--btn">
                <ButtonMy rever="rever" text="buy now" />
              </div>
            </div>
          </div>
        </WrappCenter>
        <div className="top-svg">
          <img
            className="third-screen--img-bott"
            src={require('../../images/bottom_pn.svg')}
            alt="bg2"
          />
        </div>
        <div className="last-screen--bott-svg">
          <img src={require('../../images/top_for.svg')} alt="bg2" />
        </div>
      </section>
    );
  }
}
export default ThirdScreen;
