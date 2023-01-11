import { NextPageWithLayout } from 'next';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { DeepNestedLayout } from '@/components/Layouts';
import { nestLayout } from '@/components/utils/nestLayout';
import { TeamsPageLayout } from '@/pages/teams/index';

const TeamPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { team } = router.query;
  return (
    <section>
      <h3>{team}</h3>
    </section>
  );
};

const getLayout = (page: ReactElement) => <DeepNestedLayout>{page}</DeepNestedLayout>;

export const TeamPageLayout = nestLayout(TeamsPageLayout, getLayout);

TeamPage.getLayout = TeamPageLayout;

export default TeamPage;
