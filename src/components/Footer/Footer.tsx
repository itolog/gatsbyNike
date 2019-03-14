import React from 'react';

import './Footer.scss';
import WrappCenter from '../../components/WrappCenter/WrappCenter';

const Footer = () => {
  return (
    <footer className="footer">
      <WrappCenter>
        <section className="footer-content">
          <div className="footer-left">
            <div className="logo logo-footer" />
            <ul className="linkin">
              <li className="linkin--items">
                <ul className="navin1">
                  <li className="navin1--items">External Link</li>
                  <li className="navin1--items">Contact Us</li>
                  <li className="navin1--items">Feedback</li>
                  <li className="navin1--items">About Us</li>
                </ul>
              </li>
              <li className="linkin--items">
                <ul className="navin2">
                  <li className="navin2--items">External Link</li>
                  <li className="navin2--items">Contact Us</li>
                  <li className="navin2--items">Feedback</li>
                  <li className="navin2--items">About Us</li>
                </ul>
              </li>
              <li className="linkin--items">
                <ul className="navin3">
                  <li className="navin3--items">External Link</li>
                  <li className="navin3--items">Contact Us</li>
                  <li className="navin3--items">Feedback</li>
                  <li className="navin3--items">About Us</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <ul className="footer-social">
              <li className="footer-social--item">
                <img
                  src={require('../../images/facebook-logo.svg')}
                  alt="facebook"
                />
              </li>
              <li className="footer-social--item">
                {' '}
                <img src={require('../../images/twitter.svg')} alt="facebook" />
              </li>
              <li className="footer-social--item">
                {' '}
                <img src={require('../../images/skype.svg')} alt="facebook" />
              </li>
              <li className="footer-social--item">
                {' '}
                <img src={require('../../images/slack.svg')} alt="facebook" />
              </li>
            </ul>
          </div>
        </section>
      </WrappCenter>
    </footer>
  );
};

export default Footer;
