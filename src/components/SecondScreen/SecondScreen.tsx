import React from 'react';

import './SecondScreen.scss';
import Image from '../../UI/Image2';
import WrappCenter from '../WrappCenter/WrappCenter';
import ButtonMy from '../../UI/button/ButtonMy';

class SecondScreen extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <section className="second-screen">
        <WrappCenter>
          <div className="content--second">
            <div className="wrappShoe">
              <div className="text">
                <div className="text--item text--item__1">
                  Your Awesome Text
                </div>
                <div className="text--item text--item__2">
                  Your Awesome Text
                </div>
                <div className="text--item text--item__3">
                  Another Awesome Text
                </div>
                <div className="wrappShoe--btn">
                  <ButtonMy styles={{ color: 'black' }} text="buy now" />
                </div>
              </div>

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
