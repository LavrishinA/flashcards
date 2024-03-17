import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { signupZodSchema } from '@/features/signup/model/signup-zod-schema'
import { FormValues, Props } from '@/features/signup/model/types'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Typography } from '@/shared/ui/Typography'
import { ControlledInput } from '@/shared/ui/controlled/controlled-input/Controlled-input'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './signUp.module.scss'

export const SignUpForm = (props: Props) => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      confirm: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(signupZodSchema),
  })

  return (
    <Card className={s.card}>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <div className={s.formsContainer}>
          <Typography className={s.title} variant={'h1'}>
            Sign Up
          </Typography>
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
          <ControlledInput
            className={s.input}
            control={control}
            errorMessage={errors.confirm?.message}
            label={'Confirm Password'}
            name={'confirm'}
            type={'password'}
          />

          <Button className={s.formSubmit} disabled={isSubmitting} fullWidth label={'Sign Up'} />
        </div>
      </form>

      <div className={s.footerContainer}>
        <Typography as={'span'} variant={'caption'}>
          Already have an account?
        </Typography>
        <Button as={Link} className={s.signIn} to={'/signin'} type={'text'}>
          Sign In
        </Button>
      </div>
    </Card>
  )
}
