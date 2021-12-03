import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container p-0 ">
        <div
          className={`row justify-content-between  align-items-center ${styles.banner}`}
        >
          <div className="col-md-6">Are You Ready To Be Blown Away?</div>
          <div className="col-md-4" id={styles.button_container}>
            <button>CLICK HERE TO FIND OUT</button>
          </div>
        </div>
      </div>

      <div className={styles.copyrights}>
        <div className="container p-0">
          <div className="row justify-content-between">
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
      </div>
    </div>
  );
}
