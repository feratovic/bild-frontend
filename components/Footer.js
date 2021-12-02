import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={`container-fluid ${styles.footer}`}>
      <div
        className={`row justify-content-around align-items-center ${styles.banner}`}
      >
        <div className="col-md-4">Are You Ready To Be Blown Away?</div>
        <div className="col-md-4" id={styles.button_container}>
          <button>CLICK HERE TO FIND OUT</button>
        </div>
      </div>
      <div className={`row justify-content-around ${styles.copyrights}`}>
        <div className="col-sm-4">
          COPYRIGHT 2013 DISPLAY. ALL RIGHTS RESERVED.
        </div>
        <div className="col-sm-4" id={styles.footer_links}>
          <Link href="/">
            <a className={styles.footer_link}>Home</a>
          </Link>
          /
          <Link href="/about">
            <a className={styles.footer_link}>About</a>
          </Link>
          /
          <Link href="/work">
            <a className={styles.footer_link}>Work</a>
          </Link>
          /
          <Link href="/contact">
            <a className={styles.footer_link}>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
