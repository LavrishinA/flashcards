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

  const { control, handleSubmit, register, reset } = useForm<FormValues>({
    defaultValues: {
      cover: undefined,
      isPrivate: false,
      name: '',
    },
    resolver: zodResolver(CreateDeckZodSchema),
  })

  return (
    <>
      <Button label={'Add New Deck'} onClick={() => setIsOpen(true)} type={'button'}></Button>
      <Modal className={s.modal} onOpenChange={setIsOpen} open={isOpen} title={'Add New Deck'}>
        <form
          className={s.formsContainer}
          onSubmit={handleSubmit(data => {
            props.onSubmit(data)
            reset()
          })}
        >
          {
            <div style={{ textAlign: 'left' }}>
              <ControlledInput
                autoFocus
                className={s.nameInput}
                control={control}
                label={'Name Pack'}
                name={'name'}
              />
              <div className={s.cover}>
                <label htmlFor={'cover'}>
                  <DeckIcon className={s.coverTrigger} height={16} width={16} />{' '}
                  <Typography variant={'body2'}>Upload Image</Typography>
                  <input
                    multiple={false}
                    {...register('cover')}
                    accept={'.jpeg,.jpg,.png,.webp'}
                    id={'cover'}
                    type={'file'}
                  />
                </label>
              </div>
              <div className={s.checkbox}>
                <ControlledCheckbox control={control} label={'Private pack'} name={'isPrivate'} />
              </div>
              <div className={s.buttons}>
                <Button
                  label={'Cancel'}
                  onClick={() => {
                    setIsOpen(false)
                  }}
                  type={'button'}
                  variant={'secondary'}
                />
                <Button label={'Add New Pack'} type={'submit'} variant={'primary'} />
              </div>
            </div>
          }
        </form>
      </Modal>
    </>
  )
}
