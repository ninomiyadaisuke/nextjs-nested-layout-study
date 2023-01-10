import type { NextPageWithLayout } from 'next';
import { useEffect } from 'react';

import { Layout } from '@/components/Layouts';

const Home: NextPageWithLayout = () => {
  useEffect(() => {
    console.log('App layout mounted');
    return () => console.log('App layout unmounted');
  }, []);
  return <div>Top page です。</div>;
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home;
