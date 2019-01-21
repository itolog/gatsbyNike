import React from 'react';

import './SecondScreen.scss';
import Image from '../../UI/Image2';
import WrappCenter from '../WrappCenter/WrappCenter';

class SecondScreen extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <section className="second-screen">
        <div className="bg">
          <img
            className="bg--img"
            src={require('../../images/bgpng.svg')}
            alt="bg2"
          />
        </div>
        <WrappCenter>
          <div className="content--second">
            <div className="wrappShoe">
              <div className="imgShoe">
                <Image />
              </div>
            </div>
          </div>
        </WrappCenter>
      </section>
    );
  }
}

export default SecondScreen;
