import { FC, useState } from 'react';

import styles from '@/styles/components/counter/counter.module.scss';

const Counter: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.counter}>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
};

export default Counter;
