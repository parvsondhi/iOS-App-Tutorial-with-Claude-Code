import type {ReactNode} from 'react';
import styles from './styles.module.css';

interface ClaudeCodePromptProps {
  prompt: string;
  context?: string;
  tip?: string;
  /** When 'build', styles as a primary action prompt (green accent). Default is 'learn'. */
  variant?: 'build' | 'learn';
  /** What the user should expect after running this prompt */
  expectedOutput?: string;
  /** Label shown in header (e.g. "Step 2") */
  step?: string;
}

export default function ClaudeCodePrompt({
  prompt,
  context,
  tip,
  variant = 'learn',
  expectedOutput,
  step,
}: ClaudeCodePromptProps): ReactNode {
  const isBuild = variant === 'build';
  const wrapperClass = isBuild ? `${styles.wrapper} ${styles.buildVariant}` : styles.wrapper;
  const headerClass = isBuild ? `${styles.header} ${styles.buildHeader}` : styles.header;

  return (
    <div className={wrapperClass}>
      <div className={headerClass}>
        <span className={styles.icon}>{'>'}_</span>
        <span className={styles.title}>
          {isBuild ? (step ? `Claude Code — ${step}` : 'Claude Code — Send This Prompt') : 'Claude Code'}
        </span>
      </div>
      <div className={styles.body}>
        <div className={styles.promptLabel}>
          {isBuild ? 'Send this to Claude Code:' : 'Try asking:'}
        </div>
        <div className={isBuild ? `${styles.prompt} ${styles.buildPrompt}` : styles.prompt}>
          <span className={styles.promptPrefix}>{'>'} </span>
          <span>{prompt}</span>
        </div>
        {context && (
          <div className={styles.context}>
            <span className={styles.contextLabel}>
              {isBuild ? 'Why: ' : 'Context: '}
            </span>
            {context}
          </div>
        )}
        {expectedOutput && (
          <div className={styles.expectedOutput}>
            <span className={styles.expectedOutputLabel}>What to expect: </span>
            {expectedOutput}
          </div>
        )}
        {tip && (
          <div className={styles.tip}>
            <span className={styles.tipIcon}>Tip: </span>
            {tip}
          </div>
        )}
        <div className={styles.command}>
          <code>$ claude "{prompt.length > 80 ? prompt.slice(0, 80) + '...' : prompt}"</code>
        </div>
      </div>
    </div>
  );
}
