import type { NextPageWithLayout } from 'next';
import { ReactElement, useEffect } from 'react';

import { Layout } from '@/components/Layouts';

const Home: NextPageWithLayout = () => {
  useEffect(() => {
    console.log('App layout mounted');
    return () => console.log('App layout unmounted');
  }, []);
  return <div>Top page です。</div>;
};

export const HomePageLayout = (page: ReactElement) => <Layout>{page}</Layout>;

Home.getLayout = HomePageLayout;

export default Home;
