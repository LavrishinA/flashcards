import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'

import {
  InputCloseIcon,
  InputEyeClosedIcon,
  InputEyeIcon,
  InputSearchIcon,
} from '@/shared/ui/icons'
import { clsx } from 'clsx'

import s from './input.module.scss'

import { Typography } from '../Typography'

export type InputProps = {
  errorMessage?: string
  label?: string
  onInputClear?: (value: string) => void
  search?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<ElementRef<'input'>, InputProps>(
  (
    {
      className,
      disabled,
      errorMessage,
      label,
      onChange,
      onInputClear,
      search,
      type,
      value,
      ...rest
    },
    ref
  ) => {
    const [hidePassword, setHidePassword] = useState(true)
    const isPassword = type === 'password'
    const setType = getType(isPassword, hidePassword)
    const showClearIcon = search && value

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
    }

    const onClearClickHandler = () => {
      onInputClear?.('')
    }

    return (
      <div className={s.box}>
        {label && (
          <Typography as={'label'} className={s.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div className={s.inputContainer}>
          {search && <InputSearchIcon className={s.searchIcon} />}
          <input
            className={clsx(s.input, errorMessage && s.error, search && s.search, className)}
            disabled={disabled}
            onChange={onChangeHandler}
            ref={ref}
            type={setType}
            value={value}
            {...rest}
          />
          {showClearIcon && (
            <button className={s.closeButton} onClick={onClearClickHandler} type={'button'}>
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
)

const getType = (isPassword: boolean, hidePassword: boolean) => {
  if (isPassword && hidePassword) {
    return 'password'
  }

  return 'text'
}
