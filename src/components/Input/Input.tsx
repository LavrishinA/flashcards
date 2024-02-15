import { ComponentPropsWithoutRef, ReactNode } from 'react'

import s from './input.module.scss'

export type InputProps = {
  errorMessage?: string
  fullWidth?: boolean
  icon?: 'closeIcon' | 'disabledIcon' | 'eyeIcon' | 'none' | 'searchActiveIcon' | 'searchIcon'
  label?: ReactNode
  variant?: 'primary' | 'search' | 'withIcon'
} & ComponentPropsWithoutRef<'input'>

export const Input = ({
  className,
  errorMessage,
  fullWidth,
  icon,
  label,
  variant = 'primary',
  ...rest
}: InputProps) => {
  return (
    <div>
      <label className={s.label}>{label}</label>
      <div className={`${s.inputWithIconContainer} ${fullWidth ? s.fullWidth : ''}`}>
        {icon === 'searchIcon' ? <span className={s.searchIcon} /> : ''}
        {icon === 'searchActiveIcon' ? (
          <>
            <span className={s.searchActiveIcon} />
            <span className={s.closeIcon} />
          </>
        ) : (
          ''
        )}
        <input
          className={` 
                        ${s.input} 
                        ${s[variant]} 
                        ${fullWidth ? s.fullWidth : ''} 
                        ${errorMessage ? s.error : ''} 
                        ${className}
                        `}
          {...rest}
        />
        {icon === 'eyeIcon' ? <span className={s.eyeIcon} /> : ''}
        {icon === 'disabledIcon' ? <span className={s.disabledIcon} /> : ''}
        {icon === 'closeIcon' ? <span className={s.closeIcon} /> : ''}
      </div>
      {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
    </div>
  )
}
