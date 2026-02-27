import type {ReactNode} from 'react';
import styles from './styles.module.css';

export default function TwitterCallout(): ReactNode {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.icon}>&#120143;</span>
        <div>
          <p className={styles.text}>
            Follow <a href="https://x.com/parvsondhi" target="_blank" rel="noopener noreferrer" className={styles.handle}>@parvsondhi</a> for build threads, tips, and updates on this tutorial.
          </p>
        </div>
      </div>
    </div>
  );
}
