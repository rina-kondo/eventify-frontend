import styles from './TextForm.module.scss';

type TextFormProps = {
  name: string;
  type: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TextForm({ name, type, placeholder, onChange }: TextFormProps) {
  return (
    <label className={styles.label}>
      <input name={name} type={type} className={styles.input} placeholder={placeholder} onChange={onChange} />
    </label>
  );
}
