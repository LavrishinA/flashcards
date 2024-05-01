import { useForm } from 'react-hook-form'

import { FormState, Props } from '@/features/decks/edit-deck/model/types'
import { UpdateDeckZodSchema } from '@/features/decks/edit-deck/model/update-deck-zod-schema'
import { useUploadedImage } from '@/shared/lib/useUploadedImage'
import { Button } from '@/shared/ui/Button'
import { DialogClose } from '@/shared/ui/Dialog'
import { Typography } from '@/shared/ui/Typography'
import { ControlledCheckbox } from '@/shared/ui/controlled/controlled-checkbox/Controlled-checkbox'
import { ControlledInput } from '@/shared/ui/controlled/controlled-input/Controlled-input'
import { Close } from '@/shared/ui/icons/close'
import { DeckIcon } from '@/shared/ui/icons/image-outline'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './UpdateDeck.module.scss'

export const UpdateDeckForm = ({ deck, onSubmit }: Props) => {
  const [coverSrc, handleImageChange, resetImage] = useUploadedImage(deck.cover || null)
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    resetField,
  } = useForm<FormState>({
    defaultValues: {
      cover: null,
      isPrivate: deck.isPrivate || false,
      name: deck.name || '',
    },
    resolver: zodResolver(UpdateDeckZodSchema),
  })
  const resetFormHandler = () => {
    resetImage()
    resetField('cover')
  }

  return (
    <form className={s.formsContainer} onSubmit={handleSubmit(async body => onSubmit(body))}>
      {coverSrc && (
        <div className={s.cover}>
          <Button className={s.clear} onClick={resetFormHandler} variant={'text'}>
            <Close />
          </Button>
          <img alt={'preview'} className={s.coverImg} src={coverSrc} />
        </div>
      )}
      <div style={{ textAlign: 'left' }}>
        <ControlledInput
          autoFocus
          className={s.nameInput}
          control={control}
          errorMessage={errors.name?.message}
          label={'Edit Name'}
          name={'name'}
        />
        <label className={s.label} htmlFor={'cover'}>
          <DeckIcon className={s.coverTrigger} height={16} width={16} />
          <Typography variant={'body1'}>Change Cover</Typography>
          <input
            multiple={false}
            {...register('cover', {
              onChange: handleImageChange,
            })}
            accept={'.jpeg,.jpg,.png,.webp'}
            id={'cover'}
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
          <Button disabled={isSubmitting}>Edit Deck</Button>
        </div>
      </div>
    </form>
  )
}
