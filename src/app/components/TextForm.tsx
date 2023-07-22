import styles from '@styles/objects/components/TextForm.module.scss';

type TextFormProps = {
  Icon: React.ComponentType;
  placeholder: string;
};

export default function TextForm({ Icon, placeholder }: TextFormProps) {
  return (
    <label className={styles.label}>
      <h2 className={styles.icon}>
        <Icon />
      </h2>
      <input type="text" className={styles.input} placeholder={placeholder} />
    </label>
  );
}
