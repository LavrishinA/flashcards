import { useForm } from 'react-hook-form'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Typography } from '@/components/Typography'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/Controlled-checkbox'
import { ControlledInput } from '@/components/ui/controlled/controlled-input/Controlled-input'

import s from './signIn.module.scss'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const SignInForm = () => {
  const { control, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.formsContainer}>
          <ControlledInput control={control} label={'Email'} name={'email'} type={'email'} />
          <ControlledInput
            control={control}
            label={'Password'}
            name={'password'}
            type={'password'}
          />
        </div>
        <div className={s.checkboxContainer}>
          <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
        </div>
        <div className={s.typographyContainer}>
          <Typography variant={'caption'}>Forgot Password?</Typography>
        </div>
        <div className={s.buttonContainer}>
          <Button fullWidth label={'Sign In'} />
        </div>
      </form>
      <div className={s.footerContainer}>
        <Typography className={s.createAccount} variant={'caption'}>
          Don`t have an account?
        </Typography>
        <Typography className={s.signUp} variant={'subtitle2'}>
          Sign Up
        </Typography>
      </div>
    </Card>
  )
}
