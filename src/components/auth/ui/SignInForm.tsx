import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Checkbox } from '@/components/Checkbox'
import { Input } from '@/components/Input'
import { Typography } from '@/components/Typography'

import s from './signIn.module.scss'

export const SignInForm = () => {
  return (
    <form>
      <Card className={s.card}>
        <div className={s.formsContainer}>
          <Typography variant={'h1'}>Sign In</Typography>
          <Input className={s.input} label={'Email'} />
          <Input label={'Password'} type={'password'} />
        </div>
        <div className={s.checkboxContainer}>
          <Checkbox label={'Remember me'} />
        </div>
        <div className={s.typographyContainer}>
          <Typography variant={'caption'}>Forgot Password?</Typography>
        </div>
        <div className={s.buttonContainer}>
          <Button fullWidth label={'Sign In'} />
        </div>
        <div className={s.footerContainer}>
          <Typography className={s.createAccount} variant={'caption'}>
            Don`t have an account?
          </Typography>
          <Typography className={s.signUp} variant={'subtitle2'}>
            Sign Up
          </Typography>
        </div>
      </Card>
    </form>
  )
}
