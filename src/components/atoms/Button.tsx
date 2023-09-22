import styles from './Button.module.scss';

type ButtonProps = {
  text: string;
  color?: 'black';
  onclick: () => void;
};

export default function Button({ text, color, onclick }: ButtonProps) {
  const colorClass = color ? styles[color] : '';
  return (
    <button className={`${styles.button} ${colorClass}`} onClick={onclick}>
      {text}
    </button>
  );
}
