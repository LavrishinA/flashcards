import { useForm } from 'react-hook-form'
/**
 * to show the data in the storybook console(Actions), add
 * import '@storybook/addon-console'
 */
import { Link } from 'react-router-dom'

import { signinZodSchema } from '@/features/signin/model/signin-zod-schema'
import { FormValues, Props } from '@/features/signin/model/types'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Typography } from '@/shared/ui/Typography'
import { ControlledCheckbox } from '@/shared/ui/controlled/controlled-checkbox/Controlled-checkbox'
import { ControlledInput } from '@/shared/ui/controlled/controlled-input/Controlled-input'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './signIn.module.scss'

export const SignInForm = (props: Props) => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(signinZodSchema),
  })

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(async data => props.onSubmit(data))}>
        <div className={s.formsContainer}>
          <ControlledInput
            className={s.input}
            control={control}
            errorMessage={errors.email?.message}
            label={'Email'}
            name={'email'}
            type={'email'}
          />
          <ControlledInput
            className={s.input}
            control={control}
            errorMessage={errors.password?.message}
            label={'Password'}
            name={'password'}
            type={'password'}
          />
        </div>
        <div className={s.checkboxContainer}>
          <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
        </div>
        {/*todo: add Link*/}
        <div className={s.recoverPasswordContainer}>
          <Typography
            as={Link}
            className={s.forgotPassLink}
            to={'/forgot-password'}
            variant={'caption'}
          >
            Forgot Password?
          </Typography>
        </div>
        <div className={s.buttonContainer}>
          <Button disabled={isSubmitting} fullWidth label={'Sign In'} />
        </div>
      </form>
      <div className={s.footerContainer}>
        <Typography as={'span'} className={s.createAccount} variant={'caption'}>
          Don`t have an account?
        </Typography>
        <Button as={Link} className={s.signUp} to={'/signup'} type={'text'}>
          Sign Up
        </Button>
      </div>
    </Card>
  )
}
