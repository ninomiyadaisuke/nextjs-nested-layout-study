import Link from 'next/link';
import { FC, ReactNode, useEffect } from 'react';

import styles from '@/styles/components/layouts/nestedLayout.module.scss';

import { Counter } from '../Counter';

type Props = {
  children: ReactNode;
};

const NestedLayout: FC<Props> = (props) => {
  const { children } = props;
  useEffect(() => {
    console.log('NestedLayout mounted');
    return () => console.log('NestedLayout unmounted');
  }, []);
  return (
    <div className={styles.layout}>
      <div className={styles.layout__sidebar}>
        <h2>Teams</h2>
        <nav>
          <ul>
            <li>
              <Link href="/teams/team1">Team1</Link>
            </li>
            <li>
              <Link href="/teams/team2">Team2</Link>
            </li>
            <li>
              <Link href="/teams/team3">Team3</Link>
            </li>
          </ul>
        </nav>
        <Counter />
      </div>
      {children}
    </div>
  );
};

export default NestedLayout;
