import Image from 'next/image';
import {LinkIcon} from '../common/icons';

export default function Card({src, alt, title, description, link}) {
  return (
    <div className={`card col-6 border-0 rounded-0  `}>
      <Image
        src={src || '/images/logo.png'}
        alt={alt || ''}
        layout="fill"
        placeholder="blur"
        blurDataURL={src || '/images/logo.png'}
        className="card-img"
      />
      <div className="card-overlay">
        <a href={link || '/'}>
          <LinkIcon />
        </a>
      </div>
    </div>
  );
}
