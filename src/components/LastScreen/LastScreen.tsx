import React from 'react';

import './LastScreen.scss';
import Image from '../../UI/Image4';
import WrappCenter from '../WrappCenter/WrappCenter';
import StarRatingComponent from 'react-star-rating-component';

class LastScreen extends React.PureComponent<{}, {}> {
  state = {
    rating: 1,
  };

  onStarClick = (nextValue: number): void => {
    this.setState({ rating: nextValue });
  };

  public render() {
    const { rating } = this.state;
    return (
      <section className="last-screen">
        <WrappCenter>
          <div className="wrapp-last" id="yoyoy">
            <div className="wrapp-last--image">
              <Image />
            </div>
            <div className="last-content">
              <div className="last-left">
                <h3 className="last-left--title">
                  NIKE HYPERVENOM PHELON 3 FG
                </h3>
                <p className="last-left--subtitle">
                  MEN'S FIRM-GROUND SOCCER CLEAT
                </p>

                <div className="last-buy">
                  <span className="last-bay--price">$300</span>
                  <button className="btns--item last-buy--btn btns--item__rever">
                    buy now
                  </button>
                </div>
              </div>
              <div className="last-right">
                <div className="star_border">
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    starColor={'#00ecf4'}
                    onStarClick={this.onStarClick}
                  />
                </div>
                <span className="last-right--text">3550 Review</span>
              </div>
            </div>
          </div>
        </WrappCenter>
      </section>
    );
  }
}
export default LastScreen;
