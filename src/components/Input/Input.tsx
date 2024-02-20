import { ComponentPropsWithoutRef, useState } from 'react'

import { Typography } from '@/components/Typography'
import { InputCloseIcon } from '@/components/icons/InputCloseIcon'
import { InputEyeClosedIcon } from '@/components/icons/InputEyeClosedIcon'
import { InputEyeIcon } from '@/components/icons/InputEyeIcon'
import { InputSearchIcon } from '@/components/icons/InputSearchIcon'

import s from './input.module.scss'

export type InputProps = {
  errorMessage?: string
  label?: string
  search?: boolean
  value?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = ({ className, errorMessage, label, search, type, ...rest }: InputProps) => {
  const isPassword = type === 'password'
  const [hidePassword, setHidePassword] = useState(true)
  const setType = getType(isPassword, hidePassword)
  const valueLength = rest?.value?.length! > 0

  return (
    <div>
      {label && (
        <Typography as={'label'} className={s.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <div className={s.inputContainer}>
        {search && <InputSearchIcon className={s.searchIcon} />}
        <input
          className={`  ${s.input} 
                        ${errorMessage ? s.error : ''} 
                        ${search ? s.search : ''}
                        ${className}         
                        `}
          type={setType}
          {...rest}
        />
        {valueLength && (
          <button className={s.closeButton} onClick={() => {}} type={'button'}>
            <InputCloseIcon />
          </button>
        )}
        {isPassword && (
          <button
            className={s.eyeButton}
            onClick={() => setHidePassword(prevState => !prevState)}
            type={'button'}
          >
            {hidePassword ? <InputEyeIcon /> : <InputEyeClosedIcon />}
          </button>
        )}
      </div>
      {errorMessage && (
        <Typography as={'span'} className={s.errorMessage} variant={'body2'}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}

const getType = (isPassword: boolean, hidePassword: boolean) => {
  if (isPassword && hidePassword) {
    return 'password'
  }

  return 'text'
}
