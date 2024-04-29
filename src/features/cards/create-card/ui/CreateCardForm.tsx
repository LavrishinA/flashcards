import { useForm } from 'react-hook-form'

import { createCardZodSchema } from '@/features/cards/create-card/model/create-card-zod-schema'
import { FormValues, Props } from '@/features/cards/create-card/model/types'
import { Button } from '@/shared/ui/Button'
import { DialogClose } from '@/shared/ui/Dialog'
import { Input } from '@/shared/ui/Input'
import { Typography } from '@/shared/ui/Typography'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './CreateCardForm.module.scss'

export const CreateCardForm = ({ onSubmit }: Props) => {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(createCardZodSchema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.content}>
        <Typography variant={'subtitle2'}>Question:</Typography>
        <Input
          {...register('question')}
          className={s.input}
          errorMessage={errors?.question?.message}
          label={'Question?'}
        ></Input>
        <Typography className={s.input} variant={'subtitle2'}>
          Answer:
        </Typography>
        <Input
          {...register('answer')}
          errorMessage={errors?.answer?.message}
          label={'Answer?'}
        ></Input>
      </div>
      <div className={s.footer}>
        <DialogClose asChild>
          <Button type={'button'} variant={'secondary'}>
            Cancel
          </Button>
        </DialogClose>

        <Button disabled={isSubmitting}>Add New Card</Button>
      </div>
    </form>
  )
}
