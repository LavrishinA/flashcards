import { useForm } from 'react-hook-form'

import { cardFormZodSchema } from '@/features/cards/card-form/model/card-form-zod-schema'
import { FormValues, Props } from '@/features/cards/card-form/model/types'
import { useUploadedImage } from '@/shared/lib/useUploadedImage'
import { Button } from '@/shared/ui/Button'
import { DialogClose } from '@/shared/ui/Dialog'
import { Input } from '@/shared/ui/Input'
import { Typography } from '@/shared/ui/Typography'
import { Close } from '@/shared/ui/icons/close'
import { DeckIcon } from '@/shared/ui/icons/image-outline'
import { zodResolver } from '@hookform/resolvers/zod'

import s from '../../create-card/ui/CreateCardForm.module.scss'

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
  } = useForm<FormValues>({
    defaultValues: {
      answerImg: null,
      questionImg: null,
    },
    resolver: zodResolver(cardFormZodSchema),
  })

  const onSubmitHandler = (data: FormValues) => {
    const form = new FormData()

    form.append('question', data.question)
    form.append('answer', data.answer)
    if (questionUrl === null) {
      form.append('questionImg', '')
    } else if (data.questionImg) {
      form.append('questionImg', data.questionImg?.[0])
    }

    if (answerUrl === null) {
      form.append('answerImg', '')
    } else if (data.answerImg) {
      form.append('answerImg', data.answerImg?.[0])
    }
    onSubmit(form)
  }

  const resetQuestionFormHandler = () => {
    resetQuestionImage()
    resetField('questionImg')
  }

  const resetAnswerFormHandler = () => {
    resetAnswerImage()
    resetField('answerImg')
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={s.content}>
        <Typography variant={'subtitle2'}>Question:</Typography>
        <Input
          {...register('question')}
          className={s.input}
          defaultValue={card?.question || ''}
          errorMessage={errors?.question?.message}
          label={'Question?'}
          placeholder={card ? '' : 'What was the original name of JavaScript?'}
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
          <Typography variant={'body1'}>{card ? 'Change Image' : 'Upload Image'}</Typography>
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
          placeholder={card ? '' : 'LiveScript'}
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
          <Typography variant={'body1'}>{card ? 'Change Image' : 'Upload Image'}</Typography>
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
