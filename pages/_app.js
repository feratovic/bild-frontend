// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css';

import '../styles/configs.css';
import '../styles/globals.css';

import PublicContext from '../context';

function MyApp({Component, pageProps}) {
  return (
    <PublicContext>
      <Component {...pageProps} />
    </PublicContext>
  );
}

export default MyApp;
