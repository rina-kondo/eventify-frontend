import styles from './CustomLink.module.scss';
import Link from 'next/link';
import { ComponentProps } from 'react';

type LinkProps = ComponentProps<typeof Link>;

export default function CustomLink(props: LinkProps) {
  return <Link className={styles.link} {...props}></Link>;
}
