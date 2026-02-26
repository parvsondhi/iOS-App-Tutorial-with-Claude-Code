import type {ReactNode} from 'react';
import styles from './styles.module.css';

interface ClaudeCodePromptProps {
  prompt: string;
  context?: string;
  tip?: string;
}

export default function ClaudeCodePrompt({
  prompt,
  context,
  tip,
}: ClaudeCodePromptProps): ReactNode {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.icon}>{'>'}_</span>
        <span className={styles.title}>Claude Code</span>
      </div>
      <div className={styles.body}>
        <div className={styles.prompt}>
          <span className={styles.promptPrefix}>{'>'} </span>
          <span>"{prompt}"</span>
        </div>
        {context && (
          <div className={styles.context}>
            <span className={styles.contextLabel}>Context: </span>
            {context}
          </div>
        )}
        {tip && (
          <div className={styles.tip}>
            <span className={styles.tipIcon}>Tip: </span>
            {tip}
          </div>
        )}
        <div className={styles.command}>
          <code>$ claude "{prompt.length > 60 ? prompt.slice(0, 60) + '...' : prompt}"</code>
        </div>
      </div>
    </div>
  );
}
