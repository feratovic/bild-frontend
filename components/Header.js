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
          <a
            href="https://twitter.com/?lang=sr"
            className="media-icon"
            aria-label="twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.facebook.com/"
            className="media-icon"
            aria-label="facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://rss.com/"
            className="media-icon"
            aria-label="rss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RSSIcon />
          </a>
          <a
            href="https://www.pinterest.com/"
            className="media-icon"
            aria-label="pinterest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PinterestIcon />
          </a>
          <a
            href="https://www.google.com/"
            className="media-icon"
            aria-label="google"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoogleIcon />
          </a>
          <a
            href="https://dribbble.com/"
            className="media-icon"
            aria-label="dribble"
            target="_blank"
            rel="noopener noreferrer"
          >
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
