import '@/styles/base.scss';

import type { AppPropsWithLayout } from 'next/app';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
