import styles from './CustomLink.module.scss';
import Link from 'next/link';

type LinkProps = {
  text: string;
  href: string;
  as?: string;
};

export default function CustomLink({ text, href, as }: LinkProps) {
  return (
    <Link className={styles.link} href={href} as={as}>
      {text}
    </Link>
  );
}
