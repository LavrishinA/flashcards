import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { CreateDeckZodSchema } from '@/features/create-deck/model/create-deck-zod-schema'
import { FormValues, Props } from '@/features/create-deck/model/types'
import { Button } from '@/shared/ui/Button'
import { Modal } from '@/shared/ui/Modal/Modal'
import { Typography } from '@/shared/ui/Typography'
import { ControlledCheckbox } from '@/shared/ui/controlled/controlled-checkbox/Controlled-checkbox'
import { ControlledInput } from '@/shared/ui/controlled/controlled-input/Controlled-input'
import { DeckIcon } from '@/shared/ui/icons/image-outline'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './CreateDeck.module.scss'

export const CreateDeckForm = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      cover: undefined,
      isPrivate: false,
      name: '',
    },
    resolver: zodResolver(CreateDeckZodSchema),
  })

  const submit = handleSubmit(data => {
    props.onSubmit(data)
    reset()
    setIsOpen(false)
  })

  return (
    <>
      <Button onClick={() => setIsOpen(true)} type={'button'}>
        Add New Deck
      </Button>
      <Modal onOpenChange={setIsOpen} open={isOpen} title={'Add New Deck'}>
        <form className={s.formsContainer} onSubmit={submit}>
          {
            <div style={{ textAlign: 'left' }}>
              <ControlledInput
                autoFocus
                className={s.nameInput}
                control={control}
                errorMessage={errors.name?.message}
                label={'Name Pack'}
                name={'name'}
              />
              <label className={s.cover} htmlFor={'cover'}>
                <DeckIcon className={s.coverTrigger} height={16} width={16} />
                <Typography variant={'body1'}>Upload Image</Typography>
                <input
                  multiple={false}
                  {...register('cover')}
                  accept={'.jpeg,.jpg,.png,.webp'}
                  id={'cover'}
                  type={'file'}
                />
              </label>
              <div className={s.checkbox}>
                <ControlledCheckbox control={control} label={'Private pack'} name={'isPrivate'} />
              </div>
              <div className={s.buttons}>
                <Button
                  onClick={() => {
                    setIsOpen(false)
                  }}
                  type={'button'}
                  variant={'secondary'}
                >
                  Cancel
                </Button>
                <Button type={'submit'} variant={'primary'}>
                  Add New Pack
                </Button>
              </div>
            </div>
          }
        </form>
      </Modal>
    </>
  )
}
