import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import './indexPage.scss';
import FirstScreen from '../components/FirstScreen/FirstScreen';
import SecondScreen from '../components/SecondScreen/SecondScreen';
import ThirdScreen from '../components/ThirdScreen/ThirdScreen';
import LastScreen from '../components/LastScreen/LastScreen';
import Footer from '../components/Footer/Footer';
import MenuNav from '../components/MenuNav/MenuNav';
interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}
class IndexPage extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data: StaticQueryProps) => (
          <React.Fragment>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content: 'Nike Gatsby TypeScript',
                },
                { name: 'keywords', content: 'Gatsby, TypeScript, Nike' },
              ]}
            >
              <html lang="ru" />
            </Helmet>
            <MenuNav />
            <FirstScreen />
            <SecondScreen />
            <ThirdScreen />
            <LastScreen />
            <Footer />
          </React.Fragment>
        )}
      />
    );
  }
}

export default IndexPage;
