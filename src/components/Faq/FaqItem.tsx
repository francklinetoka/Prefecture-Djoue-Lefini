import { ChevronRight } from 'lucide-react';
import styles from './Faq.module.css';

export default function FaqItem({ question, reponse }) {
  return (
    <details className={styles.faqItem}>
      <summary className={styles.faqQuestion}>
        <span className={styles.questionText}>{question}</span>
        <ChevronRight className={styles.chevronIcon} size={26} />
      </summary>
      <div className={styles.faqAnswer}>
        <p>{reponse}</p>
      </div>
    </details>
  );
}