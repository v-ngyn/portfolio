import Cube from './components/Cube';
import styles from './components/Cube/style.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        Hello, I am Vuanh
      </header>
      <Cube/>
    </main>
  );
}
