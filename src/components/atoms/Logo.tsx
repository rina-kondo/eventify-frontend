import styles from './Logo.module.scss';

type LogoProps = {
  size?: 'large' | 'middle';
};

export const Logo = ({ size = 'middle' }: LogoProps) => {
  return <div className={styles[size]}>Eventify</div>;
};
