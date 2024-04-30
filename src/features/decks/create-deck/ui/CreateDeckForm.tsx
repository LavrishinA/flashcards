import { useForm } from 'react-hook-form'

import { CreateDeckZodSchema } from '@/features/decks/create-deck/model/create-deck-zod-schema'
import { FormValues, Props } from '@/features/decks/create-deck/model/types'
import { useUplodedImage } from '@/shared/lib/useUplodedImage'
import { Button } from '@/shared/ui/Button'
import { DialogClose } from '@/shared/ui/Dialog'
import { Typography } from '@/shared/ui/Typography'
import { ControlledCheckbox } from '@/shared/ui/controlled/controlled-checkbox/Controlled-checkbox'
import { ControlledInput } from '@/shared/ui/controlled/controlled-input/Controlled-input'
import { Close } from '@/shared/ui/icons/close'
import { DeckIcon } from '@/shared/ui/icons/image-outline'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './CreateDeck.module.scss'

export const CreateDeckForm = (props: Props) => {
  const [coverSrc, handleImageChange, resetImage] = useUplodedImage(null)

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    resetField,
  } = useForm<FormValues>({
    defaultValues: {
      cover: null,
      isPrivate: false,
      name: '',
    },
    resolver: zodResolver(CreateDeckZodSchema),
  })

  const resetFormHandler = () => {
    resetImage()
    resetField('cover')
  }

  return (
    <form className={s.formsContainer} onSubmit={handleSubmit(async data => props.onSubmit(data))}>
      {coverSrc && (
        <div className={s.cover}>
          <Button onClick={resetFormHandler} variant={'text'}>
            <Close />
          </Button>
          <img alt={'preview'} className={s.cover} src={coverSrc} />
        </div>
      )}
      <div style={{ textAlign: 'left' }}>
        <ControlledInput
          autoFocus
          className={s.nameInput}
          control={control}
          errorMessage={errors.name?.message}
          label={'Name Pack'}
          name={'name'}
        />
        <label className={s.label} htmlFor={'cover'}>
          <DeckIcon className={s.coverTrigger} height={16} width={16} />
          <Typography variant={'body1'}>Upload Image</Typography>
          <input
            multiple={false}
            {...register('cover', {
              onChange: handleImageChange,
            })}
            accept={'.jpeg,.jpg,.png,.webp'}
            id={'cover'}
            name={'cover'}
            type={'file'}
          />
        </label>
        <div className={s.checkbox}>
          <ControlledCheckbox control={control} label={'Private pack'} name={'isPrivate'} />
        </div>
        <div className={s.buttons}>
          <DialogClose asChild>
            <Button type={'button'} variant={'secondary'}>
              Cancel
            </Button>
          </DialogClose>

          <Button disabled={isSubmitting}>Add New Pack</Button>
        </div>
      </div>
    </form>
  )
}
