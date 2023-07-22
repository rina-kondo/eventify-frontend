import styles from '@styles/objects/components/logo.module.scss';

type LogoProps = {
  size?: 'large' | 'middle';
};

export default function Logo({ size = 'middle' }: LogoProps) {
  return <div className={styles[size]}>Eventify</div>;
}