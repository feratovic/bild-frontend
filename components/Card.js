import Image from 'next/image';

import {placeholderImage} from '../common/config';
import {LinkIcon} from '../common/icons';

import styles from '../styles/Card.module.css';

export default function Card({src, alt, title, description, link, grid}) {
  return (
    <div className={` ${grid ? styles.custom_card : styles.custom_card_list}`}>
      <div className={`  ${styles.image_container}`}>
        <Image
          src={src || placeholderImage()}
          alt={alt || ''}
          layout="fill"
          placeholder="blur"
          blurDataURL={src || placeholderImage()}
          className="card-img"
        />
        <div className={styles.card_overlay}>
          <div>
            <a href={link || ''}>
              <LinkIcon />
            </a>
          </div>
        </div>
      </div>
      {!grid && (
        <div className={`  ${styles.body} `}>
          <h4>{title || ''}</h4>
          <p className="text-muted">{description || ''}</p>
        </div>
      )}
    </div>
  );
}
