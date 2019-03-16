import React from 'react';

import Header from '../Header';
import './FirstScreen.scss';
import Image from '../../UI/Image1';
import WrappCenter from '../WrappCenter/WrappCenter';
import ButtonMy from '../../UI/button/ButtonMy';
import trottle from '../../utils/trottle.service';

class FirstScreen extends React.PureComponent<{}, {}> {
  private circle1 = React.createRef<HTMLDivElement>();
  private circle2 = React.createRef<HTMLDivElement>();

  componentDidMount = (): void => {
    this.handlMoveCircle();
  };

  componentWillUnmount = (): void => {
    window.removeEventListener('scroll', this.handleScroll);
  };
  // SCROLL ANIMATED CIRCLE
  handleScroll = (e: any) => {
    let topScroll = window.scrollY + 200;
    const scrollX = topScroll - 120;
    if (window.innerWidth < 480) {
      topScroll -= 100;
    }
    if (this.circle1.current != null) {
      if (topScroll < 600) {
        this.circle1.current.style.transform = `translate3d(-${topScroll}px, ${scrollX}px, 0)`;
      }
    }
  };

  handlMoveCircle = (): void => {
    window.addEventListener('scroll', trottle(50, this.handleScroll), {
      capture: true,
      passive: true,
    });
  };
  // SCROLL ANIMATED CIRCLE END

  public render() {
    return (
      <section className="first-screen">
        <WrappCenter>
          <div className="content">
            {' '}
            <Header />
            <div className="circle-1" ref={this.circle1} />
            <div className="circle-1 circle-2" ref={this.circle2} />
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
