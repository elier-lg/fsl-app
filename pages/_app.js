import { CssBaseline } from '@material-ui/core';
import { Layout } from '../components/layout';
import Head from 'next/head'
import '@fontsource/roboto';

const App = ({ Component, pageProps }) => {
  return (
    <>
    <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <>
        <CssBaseline />
        {/* <Layout> */}
          <Component {...pageProps} />
        {/* </Layout> */}
      </>
    </>
  )
}

export default App
