import React, { lazy, Suspense } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import './indexPage.scss';
import FirstScreen from '../components/FirstScreen/FirstScreen';
const SecondScreen = lazy(() =>
  import('../components/SecondScreen/SecondScreen')
);
import Loader from '../UI/Loader';

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
            <FirstScreen />
            <Suspense fallback={<Loader />}>
              <SecondScreen />
            </Suspense>
          </React.Fragment>
        )}
      />
    );
  }
}

export default IndexPage;
