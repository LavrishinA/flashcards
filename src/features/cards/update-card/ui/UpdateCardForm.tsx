import { useForm } from 'react-hook-form'

import { FormValues, Props } from '@/features/cards/update-card/model/types'
import { updateCardZodSchema } from '@/features/cards/update-card/model/update-card-zod-schema'
import { Button } from '@/shared/ui/Button'
import { DialogClose } from '@/shared/ui/Dialog'
import { Input } from '@/shared/ui/Input'
import { Typography } from '@/shared/ui/Typography'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './UpdateCardForm.module.scss'

export const UpdateCardForm = ({ card, onSubmit }: Props) => {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(updateCardZodSchema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.content}>
        <Typography variant={'subtitle2'}>Question:</Typography>
        <Input
          {...register('question')}
          autoFocus
          className={s.input}
          defaultValue={card.question}
          errorMessage={errors?.question?.message}
          label={'Question?'}
        ></Input>
        <Typography className={s.input} variant={'subtitle2'}>
          Answer:
        </Typography>
        <Input
          {...register('answer')}
          defaultValue={card.answer}
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

        <Button disabled={isSubmitting}>Edit Card</Button>
      </div>
    </form>
  )
}
