import { Tabs } from './components/tabs';
import styles from './Submittals.module.scss';

function SubmittalsPage() {
  return (
    <div className={styles.submittals__wrapper}>
      <h1 className="text-2xl font-bold mb-4">Submittals</h1>
      <Tabs />
    </div>
  );
}
export default SubmittalsPage;
