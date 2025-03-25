import styles from './Input.module.scss'
interface InputFieldProps {
  label: string
  placeholder: string
  type?: string
  className?: string
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = 'text',
  className = ''
}) => (
  <div className={`${styles.mainBlock} ${className}`}>
    {' '}
    <h5 className={styles.inputTitle}>{label}</h5>
    <input
      className={`${styles.blockInput} ${className}`}
      type={type}
      placeholder={placeholder}
      aria-label={label}
    />
  </div>
)

export default InputField

interface TextareaFieldProps {
  label: string
  placeholder: string
}

export const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  placeholder
}) => (
  <div className={styles.mainBlock}>
    <h5 className={styles.inputTitle}>{label}</h5>
    <textarea
      className={`${styles.blockInput} ${styles.descriptionTextarea}`}
      placeholder={placeholder}
      aria-label={label}
    />
  </div>
)
