import {CustomButton} from '../common/button';
import styles from '../styles/404.module.css';

export default function Custom404() {
  return (
    <div id={styles.container}>
      <div id={styles.content}>
        <h1>404</h1>
        <h3>Ooops!!!</h3>
        <CustomButton text="Go back to Home" link="/" />
      </div>
    </div>
  );
}
