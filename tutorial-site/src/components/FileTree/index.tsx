import type {ReactNode} from 'react';
import styles from './styles.module.css';

interface FileTreeProps {
  children: ReactNode;
  title?: string;
}

export default function FileTree({
  children,
  title = 'Project Structure',
}: FileTreeProps): ReactNode {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.icon}>&#128193;</span>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.tree}>{children}</div>
    </div>
  );
}
