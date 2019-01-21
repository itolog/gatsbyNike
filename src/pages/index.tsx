import React from 'react';

import './indexPage.scss';
import FirstScreen from '../components/FirstScreen/FirstScreen';
import SecondScreen from '../components/SecondScreen/SecondScreen';

class IndexPage extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <React.Fragment>
        <FirstScreen />
        <SecondScreen />
      </React.Fragment>
    );
  }
}

export default IndexPage;
