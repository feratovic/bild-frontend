import Link from 'next/link';
import styles from '../styles/404.module.css';

export default function Custom404() {
  return (
    <div id={styles.container}>
      <div id={styles.content}>
        <h1>404</h1>
        <h3>Ooops!!!</h3>
        <Link href="/">
          <a id={styles.btn}>Go back to Home</a>
        </Link>
      </div>
    </div>
  );
}
