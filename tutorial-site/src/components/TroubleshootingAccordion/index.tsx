import {type ReactNode, useState} from 'react';
import styles from './styles.module.css';

interface TroubleshootingItem {
  error: string;
  solution: ReactNode;
}

interface TroubleshootingAccordionProps {
  items: TroubleshootingItem[];
}

function AccordionItem({error, solution}: TroubleshootingItem): ReactNode {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.item}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        type="button">
        <span className={styles.arrow}>{isOpen ? '▾' : '▸'}</span>
        <code className={styles.errorText}>{error}</code>
      </button>
      {isOpen && <div className={styles.content}>{solution}</div>}
    </div>
  );
}

export default function TroubleshootingAccordion({
  items,
}: TroubleshootingAccordionProps): ReactNode {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.icon}>&#9888;&#65039;</span>
        <span className={styles.title}>Common Issues</span>
      </div>
      <div className={styles.body}>
        {items.map((item, idx) => (
          <AccordionItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}
