import { useForm } from 'react-hook-form'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Typography } from '@/components/Typography'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/Controlled-checkbox'
import { ControlledInput } from '@/components/ui/controlled/controlled-input/Controlled-input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

/**
 * to show the data in the storybook console(Actions), add
 * import '@storybook/addon-console'
 */

import s from './signIn.module.scss'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

type Props = {
  onSubmit: (data: FormValues) => void
}

export const SignInForm = (props: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(props.onSubmit)}>
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
        {/*todo: add Link*/}
        <Typography className={s.signUp} variant={'link1'}>
          Sign Up
        </Typography>
      </div>
    </Card>
  )
}
