import type { NextPageWithLayout } from 'next';
import { ReactElement } from 'react';

import { Layout } from '@/components/Layouts';

const Home: NextPageWithLayout = () => {
  return <div>Top page です。</div>;
};

export const HomePageLayout = (page: ReactElement) => <Layout>{page}</Layout>;

Home.getLayout = HomePageLayout;

export default Home;
