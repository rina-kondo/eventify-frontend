import styles from './TextForm.module.scss';

type TextFormProps = {
  placeholder: string;
};

export default function TextForm({ placeholder }: TextFormProps) {
  return (
    <label className={styles.label}>
      <input type="text" className={styles.input} placeholder={placeholder} />
    </label>
  );
}
