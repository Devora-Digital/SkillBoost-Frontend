'use client'
import styles from './Input.module.scss'
import { useState } from 'react'

interface InputFieldProps {
  label: string
  placeholder: string
  type?: string
  className?: string
  required?: boolean
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = 'text',
  className = '',
  required = false
}) => {
  const [touched, setTouched] = useState(false)

  return (
    <div className={`${styles.mainBlock} ${className}`}>
      <h5 className={`${styles.inputTitle} ${styles.blockTitle}`}>{label}</h5>
      <input
        className={`${styles.blockInput} ${className} ${touched && required ? styles.errorInput : ''}`}
        type={type}
        placeholder={
          touched && required ? 'This field is required' : placeholder
        }
        required={required}
        aria-label={label}
        onBlur={() => setTouched(true)}
      />
    </div>
  )
}

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
