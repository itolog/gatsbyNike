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
          <div className="content--second" id="first">
            <div className="text">
              <div className="text--item text--item__1">
                <span>Your Awesome Text</span>
              </div>
              <div className="text--item text--item__2">
                <span> Your Awesome Text</span>
              </div>
              <div className="text--item text--item__3">
                <span> Another Awesome Text</span>
              </div>
              <div className="wrappShoe--btn">
                <ButtonMy rever="rever" text="buy now" />
              </div>
            </div>
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
