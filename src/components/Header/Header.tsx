import Link from 'next/link';
import { FC } from 'react';

import styles from '@/styles/components/header/header.module.scss';

import { Counter } from '../Counter';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>Sporty McSportface</h1>
        <Counter />
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/teams">Teams</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
