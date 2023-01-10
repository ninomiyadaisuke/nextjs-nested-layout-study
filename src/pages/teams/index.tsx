import type { NextPageWithLayout } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';

import { Layout } from '@/components/Layouts';
import NestedLayout from '@/components/Layouts/NestedLayout';

const TeamsPage: NextPageWithLayout = () => {
  return <div>This is the Teams landing page</div>;
};

TeamsPage.getLayout = (page) => {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default TeamsPage;
