import Image from 'next/image';
import {
  DribbleIcon,
  FacebookIcon,
  GoogleIcon,
  PinterestIcon,
  RSSIcon,
  TwitterIcon,
} from '../common/icons';
import styles from '../styles/Header.module.css';
import ActiveLink from './ActiveLink';

export default function Header() {
  return (
    <div className={`container ${styles.header}`}>
      <div
        className={`row justify-content-between align-items-center ${styles.info}`}
      >
        <div className="col-sm-4">
          <Image
            src="/images/logo.png"
            alt="Display logo"
            width={120}
            height={45}
            placeholder="blur"
            blurDataURL="/images/logo.png"
          />
        </div>
        <div className={`col-sm-6  ${styles.media}`}>
          <a href="https://twitter.com/?lang=sr" className="media-icon">
            <TwitterIcon />
          </a>
          <a href="https://www.facebook.com/" className="media-icon">
            <FacebookIcon />
          </a>
          <a href="https://rss.com/" className="media-icon">
            <RSSIcon />
          </a>
          <a href="https://www.pinterest.com/" className="media-icon">
            <PinterestIcon />
          </a>
          <a href="https://www.google.com/" className="media-icon">
            <GoogleIcon />
          </a>
          <a href="https://dribbble.com/" className="media-icon">
            <DribbleIcon />
          </a>
        </div>
      </div>
      <div id={styles.navigation}>
        <ActiveLink link="/" pageName="Home" />
        <ActiveLink link="/about" pageName="About" />
        <ActiveLink link="/work" pageName="Work" />
        <ActiveLink link="/contact" pageName="Contact" />
      </div>
    </div>
  );
}
