import { FC, ReactNode, useEffect } from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import styles from '@/styles/components/layouts/layout.module.scss';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = (props) => {
  useEffect(() => {
    console.log('layout mounted');
    return () => console.log('layout unmounted');
  }, []);
  const { children } = props;
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
