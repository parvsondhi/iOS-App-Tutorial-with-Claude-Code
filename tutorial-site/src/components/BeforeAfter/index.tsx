import type {ReactNode} from 'react';
import styles from './styles.module.css';

interface BeforeAfterProps {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfter({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
  beforeAlt = 'Before screenshot',
  afterAlt = 'After screenshot',
}: BeforeAfterProps): ReactNode {
  return (
    <div className={styles.wrapper}>
      <div className={styles.panel}>
        <div className={styles.label}>{beforeLabel}</div>
        <img src={before} alt={beforeAlt} className={styles.image} loading="lazy" />
      </div>
      <div className={styles.divider}>
        <span className={styles.arrow}>&#8594;</span>
      </div>
      <div className={styles.panel}>
        <div className={`${styles.label} ${styles.labelAfter}`}>{afterLabel}</div>
        <img src={after} alt={afterAlt} className={styles.image} loading="lazy" />
      </div>
    </div>
  );
}
