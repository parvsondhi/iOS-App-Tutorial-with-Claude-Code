import type {ReactNode} from 'react';
import styles from './styles.module.css';

interface ChapterCheckpointProps {
  chapter: number;
  children: ReactNode;
}

export default function ChapterCheckpoint({
  chapter,
  children,
}: ChapterCheckpointProps): ReactNode {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.checkmark}>&#10003;</span>
        <span className={styles.title}>Checkpoint — End of Chapter {chapter}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.checklist}>
          <p className={styles.label}>Your app should now:</p>
          {children}
        </div>
      </div>
    </div>
  );
}
