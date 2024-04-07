import { useForm } from 'react-hook-form'
/**
 * to show the data in the storybook console(Actions), add
 * import '@storybook/addon-console'
 */

import { createPassZodSchema } from '@/features/create-password/model/createPass-zod-schema'
import { FormValues, Props } from '@/features/create-password/model/types'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Typography } from '@/shared/ui/Typography'
import { ControlledInput } from '@/shared/ui/controlled/controlled-input/Controlled-input'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './createNewPassword.module.scss'

export const CreateNewPassword = (props: Props) => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(createPassZodSchema),
  })

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>
        Create new password
      </Typography>
      <form onSubmit={handleSubmit(async data => props.onSubmit(data))}>
        <div className={s.formsContainer}>
          <ControlledInput
            className={s.input}
            control={control}
            errorMessage={errors.password?.message}
            label={'Password'}
            name={'password'}
            type={'password'}
          />
        </div>
        <Typography as={'span'} className={s.description} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <div className={s.buttonContainer}>
          <Button disabled={isSubmitting} fullWidth>
            Create New Password
          </Button>
        </div>
      </form>
    </Card>
  )
}
