import type { NextPageWithLayout } from 'next';
import { ReactElement } from 'react';

import NestedLayout from '@/components/Layouts/NestedLayout';
import { nestLayout } from '@/components/utils/nestLayout';
import { HomePageLayout } from '@/pages/index';

const TeamsPage: NextPageWithLayout = () => {
  return <div>This is the Teams landing page</div>;
};

const getLayout = (page: ReactElement) => <NestedLayout>{page}</NestedLayout>;

export const TeamsPageLayout = nestLayout(HomePageLayout, getLayout);

TeamsPage.getLayout = TeamsPageLayout;

export default TeamsPage;
