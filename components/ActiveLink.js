import Link from 'next/link';
import {useRouter} from 'next/router';

export default function ActiveLink({link, pageName}) {
  const router = useRouter();
  const active = router ? router.asPath : '/';

  return (
    <Link href={link || '/'}>
      <a className={`link ${active === link && ' active '}`}>
        {pageName || ''}
      </a>
    </Link>
  );
}
