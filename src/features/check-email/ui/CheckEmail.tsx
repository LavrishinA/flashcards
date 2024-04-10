/**
 * to show the data in the storybook console(Actions), add
 * import '@storybook/addon-console'
 */
import { Link } from 'react-router-dom'

import { FormValues } from '@/features/forgot-password/model/types'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Typography } from '@/shared/ui/Typography'
import { Email } from '@/shared/ui/icons/Email'

import s from './checkEmail.module.scss'

export const CheckEmail = ({ email }: FormValues) => {
  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>
        Check Email
      </Typography>
      <form>
        <div className={s.iconContainer}>
          <Email />
        </div>
        <div className={s.description}>
          <Typography as={'span'} variant={'body2'}>
            {/*We’ve sent an Email with instructions to example@mail.com*/}
            We’ve sent an Email with instructions to {email}
          </Typography>
        </div>

        <div className={s.buttonContainer}>
          <Button
            as={Link}
            fullWidth
            label={'Back to Sign In'}
            to={'/sign-in'}
            variant={'primary'}
          />
        </div>
      </form>
    </Card>
  )
}
