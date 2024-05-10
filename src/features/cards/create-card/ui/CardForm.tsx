import { useForm } from 'react-hook-form'

import {
  CardFormValues,
  cardFormZodSchema,
} from '@/features/cards/create-card/model/card-form-zod-schema'
// import { FormValues, Props } from '@/features/cards/create-card/model/types'
import { Props } from '@/features/cards/create-card/model/types'
import { useUploadedImage } from '@/shared/lib/useUploadedImage'
import { Button } from '@/shared/ui/Button'
import { DialogClose } from '@/shared/ui/Dialog'
import { Input } from '@/shared/ui/Input'
import { Typography } from '@/shared/ui/Typography'
import { Close } from '@/shared/ui/icons/close'
import { DeckIcon } from '@/shared/ui/icons/image-outline'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './CreateCardForm.module.scss'

export const CardForm = ({ card, onSubmit }: Props) => {
  const [questionUrl, handleQuestionImageChange, resetQuestionImage] = useUploadedImage(
    card?.questionImg || null
  )
  const [answerUrl, handleAnswerImageChange, resetAnswerImage] = useUploadedImage(
    card?.answerImg || null
  )
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    resetField,
  } = useForm<CardFormValues>({
    defaultValues: {
      answerImg: null,
      questionImg: null,
    },
    resolver: zodResolver(cardFormZodSchema),
  })

  console.log(errors)
  const resetQuestionFormHandler = () => {
    resetQuestionImage()
    resetField('questionImg')
  }

  const resetAnswerFormHandler = () => {
    resetAnswerImage()
    resetField('answerImg')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.content}>
        <Typography variant={'subtitle2'}>Question:</Typography>
        <Input
          {...register('question')}
          className={s.input}
          defaultValue={card?.question || ''}
          errorMessage={errors?.question?.message}
          label={'Question?'}
        ></Input>
        {questionUrl && (
          <div className={s.cover}>
            <Button className={s.clear} onClick={resetQuestionFormHandler} variant={'text'}>
              <Close />
            </Button>
            <img alt={'preview'} className={s.coverImg} src={questionUrl} />
          </div>
        )}
        <label className={s.label} htmlFor={'questionImg'}>
          <DeckIcon className={s.coverTrigger} height={16} width={16} />
          <Typography variant={'body1'}>Change Image</Typography>
          <input
            multiple={false}
            {...register('questionImg', {
              onChange: handleQuestionImageChange,
            })}
            accept={'.jpeg,.jpg,.png,.webp'}
            id={'questionImg'}
            type={'file'}
          />
        </label>
        <Typography className={s.input} variant={'subtitle2'}>
          Answer:
        </Typography>
        <Input
          {...register('answer')}
          defaultValue={card?.answer || ''}
          errorMessage={errors?.answer?.message}
          label={'Answer?'}
        ></Input>
        {answerUrl && (
          <div className={s.cover}>
            <Button className={s.clear} onClick={resetAnswerFormHandler} variant={'text'}>
              <Close />
            </Button>
            <img alt={'preview'} className={s.coverImg} src={answerUrl} />
          </div>
        )}
        <label className={s.label} htmlFor={'answerImg'}>
          <DeckIcon className={s.coverTrigger} height={16} width={16} />
          <Typography variant={'body1'}>Change Image</Typography>
          <input
            multiple={false}
            {...register('answerImg', {
              onChange: handleAnswerImageChange,
            })}
            accept={'.jpeg,.jpg,.png,.webp'}
            id={'answerImg'}
            type={'file'}
          />
        </label>
      </div>
      <div className={s.footer}>
        <DialogClose asChild>
          <Button type={'button'} variant={'secondary'}>
            Cancel
          </Button>
        </DialogClose>

        <Button disabled={isSubmitting}>{card ? 'Edit Card' : 'Add New Card'}</Button>
      </div>
    </form>
  )
}
