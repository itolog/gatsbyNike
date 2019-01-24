import React from 'react';

import './SecondScreen.scss';
import Image from '../../UI/Image2';
import WrappCenter from '../WrappCenter/WrappCenter';

class SecondScreen extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <section className="second-screen">
        <WrappCenter>
          <div className="content--second">
            <div className="wrappShoe">
              <div className="text">
                <div className="text--item1">red</div>
                <div className="text--item2">dsd</div>
                <div className="text--item3">dfdf</div>
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
