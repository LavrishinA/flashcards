import { useForm } from 'react-hook-form'
/**
 * to show the data in the storybook console(Actions), add
 * import '@storybook/addon-console'
 */
import { Link } from 'react-router-dom'

import { loginSchema } from '@/features/forgot-password/model/forgotpass-zod-schema'
import { FormValues, Props } from '@/features/forgot-password/model/types'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Typography } from '@/shared/ui/Typography'
import { ControlledInput } from '@/shared/ui/controlled/controlled-input/Controlled-input'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './forgotPassword.module.scss'

export const ForgotPasswordForm = (props: Props) => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>
        Forgot your password?
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
        </div>
        <Typography as={'span'} className={s.description} variant={'body2'}>
          Enter your email address and we will send you further instructions
        </Typography>
        <div className={s.buttonContainer}>
          <Button disabled={isSubmitting} fullWidth>
            Send Instructions
          </Button>
        </div>
      </form>
      <div className={s.footerContainer}>
        <Typography as={'span'} className={s.forgotPassword} variant={'body2'}>
          Did you remember your password?
        </Typography>
        <Button as={Link} className={s.loggingIn} to={'/sign-in'} variant={'text'}>
          Try logging in
        </Button>
      </div>
    </Card>
  )
}
