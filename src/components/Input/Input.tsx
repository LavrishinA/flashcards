import React, { ComponentPropsWithoutRef, useState } from 'react'

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
} & ComponentPropsWithoutRef<'input'>

export const Input = ({
  className,
  disabled,
  errorMessage,
  label,
  search,
  type,
  ...rest
}: InputProps) => {
  const [hidePassword, setHidePassword] = useState(true)
  const [value, setValue] = useState('')
  const isPassword = type === 'password'
  const setType = getType(isPassword, hidePassword)
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const showDeleteIcon = value.length > 0 && search

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
          disabled={disabled}
          onChange={onChangeHandler}
          type={setType}
          value={value}
          {...rest}
        />
        {showDeleteIcon && (
          <button
            className={s.closeButton}
            onClick={() => {
              setValue('')
            }}
            type={'button'}
          >
            <InputCloseIcon />
          </button>
        )}
        {isPassword && (
          <button
            className={s.eyeButton}
            disabled={disabled}
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
