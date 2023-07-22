import styles from '@styles/objects/components/button.module.scss';

type ButtonProps = {
  text: string;
  color?: 'black';
};

export default function Button({ text, color }: ButtonProps) {
  const colorClass = color ? styles[color] : '';
  return <button className={`${styles.button} ${colorClass}`}>{text}</button>;
}
