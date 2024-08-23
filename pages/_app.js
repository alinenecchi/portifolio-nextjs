import "../utils/styles/App.scss";
import "../utils/styles/reset.scss";

import Layout from "../utils/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
