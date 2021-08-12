import { CssBaseline } from '@material-ui/core';
import { Layout } from '../components/layout';
import Head from 'next/head'
import '@fontsource/roboto';
import { useEffect } from 'react'
import { ThemeProvider } from '../providers/theme-provider';

const App = ({ Component, pageProps }) => {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

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
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    </>
  )
}

export default App
