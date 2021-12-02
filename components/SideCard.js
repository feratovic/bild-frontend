import Image from 'next/image';
import {LinkIcon} from '../common/icons';

export default function SideCard({src, alt, title, description, link}) {
  return (
    <div className={`row card-layout`}>
      <div className="col-3 image-container">
        <Image
          src={src || '/images/logo.png'}
          alt={alt || ''}
          layout="fill"
          placeholder="blur"
          blurDataURL={src || '/images/logo.png'}
        />
        <div className="card-overlay-side">
          <a href={link || '/'}>
            <LinkIcon />
          </a>
        </div>
      </div>
      <div className="body col">
        <h4>{title || ''}</h4>
        <p className="text-muted">{description || ''}</p>
      </div>
    </div>
  );
}
