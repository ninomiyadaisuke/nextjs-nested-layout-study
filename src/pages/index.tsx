import type { NextPageWithLayout } from 'next';

import { Layout } from '@/components/Layouts';

const Home: NextPageWithLayout = () => {
  return <div>Top page です。</div>;
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home;
