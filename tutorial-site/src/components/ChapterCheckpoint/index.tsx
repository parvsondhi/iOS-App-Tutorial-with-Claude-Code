import type {ReactNode} from 'react';
import styles from './styles.module.css';

interface ChapterCheckpointProps {
  chapter: number;
  children: ReactNode;
  checkpointBranch?: string;
  repoUrl?: string;
}

export default function ChapterCheckpoint({
  chapter,
  children,
  checkpointBranch,
  repoUrl = 'https://github.com/parvsondhi/iOS-App-Tutorial-with-Claude-Code',
}: ChapterCheckpointProps): ReactNode {
  const branch = checkpointBranch || `checkpoint-ch${String(chapter).padStart(2, '0')}`;

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
        <div className={styles.compare}>
          <span className={styles.compareIcon}>&#128230;</span>
          <span>
            Stuck? Compare your code:{' '}
            <a
              href={`${repoUrl}/tree/${branch}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}>
              {branch}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
