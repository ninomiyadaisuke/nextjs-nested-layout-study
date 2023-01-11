import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect } from 'react';

import styles from '@/styles/components/layouts/deepNestLayout.module.scss';

type Props = {
  children: ReactNode;
};

const DeepNestedLayout: FC<Props> = (props) => {
  const { children } = props;
  const router = useRouter();
  const { team } = router.query;

  useEffect(() => {
    console.log('DeepNestedLayout mounted');
    return () => console.log('DeepNestedLayout unmounted');
  }, []);
  return (
    <div className={styles.layout}>
      <header>
        <nav>
          <ul>
            <li>
              <Link href={`/teams/${team}`}>About</Link>
            </li>
            <li>
              <Link href={`/teams/${team}/players`}>Players</Link>
            </li>
            <li>
              <Link href={`/teams/${team}/fixtures`}>Fixtures</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section>{children}</section>
    </div>
  );
};

export default DeepNestedLayout;
