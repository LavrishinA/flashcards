import { useForm } from 'react-hook-form'

import { CreateDeckZodSchema } from '@/features/decks/create-deck/model/create-deck-zod-schema'
import { FormValues, Props } from '@/features/decks/create-deck/model/types'
import { Button } from '@/shared/ui/Button'
import { DialogClose } from '@/shared/ui/Dialog'
import { Typography } from '@/shared/ui/Typography'
import { ControlledCheckbox } from '@/shared/ui/controlled/controlled-checkbox/Controlled-checkbox'
import { ControlledInput } from '@/shared/ui/controlled/controlled-input/Controlled-input'
import { DeckIcon } from '@/shared/ui/icons/image-outline'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './CreateDeck.module.scss'

export const CreateDeckForm = (props: Props) => {
  const {
    control,
    formState: { errors, isSubmitting },
    getValues,
    handleSubmit,
    register,

    watch,
  } = useForm<FormValues>({
    defaultValues: {
      cover: null,
      isPrivate: false,
      name: '',
    },
    resolver: zodResolver(CreateDeckZodSchema),
  })

  // const [coverSrc, setCoverSrc] = useState<null | string>()

  return (
    <form className={s.formsContainer} onSubmit={handleSubmit(async data => props.onSubmit(data))}>
      {watch('cover') && (
        <img className={s.cover} src={URL.createObjectURL(getValues('cover')?.[0]!)} />
      )}
      {/*{coverSrc ? <img alt={'preview'} src={coverSrc} /> : null}*/}
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
            {...register(
              'cover'
              //   {
              //   onChange: (e: ChangeEvent<HTMLInputElement>) => {
              //     const file = e.currentTarget?.files?.[0]
              //
              //     if (!file) {
              //       return
              //     }
              //     const src = URL.createObjectURL(file)
              //
              //     setCoverSrc(src)
              //   },
              // }
            )}
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
