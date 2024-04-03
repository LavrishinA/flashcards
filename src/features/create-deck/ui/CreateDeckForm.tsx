import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useCreateDeckMutation } from '@/entities/decks/api/decks-api'
import { CreateDeckZodSchema } from '@/features/create-deck/model/create-deck-zod-schema'
import { FormValues, Props } from '@/features/create-deck/model/types'
import { Button } from '@/shared/ui/Button'
import { Modal } from '@/shared/ui/Modal/Modal'
import { Typography } from '@/shared/ui/Typography'
import { ControlledCheckbox } from '@/shared/ui/controlled/controlled-checkbox/Controlled-checkbox'
import { ControlledInput } from '@/shared/ui/controlled/controlled-input/Controlled-input'
import { DeckIcon } from '@/shared/ui/icons/image-outline'
import { zodResolver } from '@hookform/resolvers/zod'

import s from '../../../pages/edit-profile-page/ui/EditPage.module.scss'

export const CreateDeckForm = (props: Props) => {
  const [createDeck] = useCreateDeckMutation()

  const [isOpen, setIsOpen] = useState(false)

  const {
    control,
    formState: { dirtyFields, errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      cover: undefined,
      isPrivate: undefined,
      name: createDeck.name,
    },
    resolver: zodResolver(CreateDeckZodSchema),
  })

  return (
    <>
      <Button onClick={() => setIsOpen(true)}></Button>
      <Modal className={s.card} onOpenChange={setIsOpen} open={isOpen} title={'Add New Deck'}>
        {/*<Typography className={s.title} variant={'h1'}>*/}
        {/*  Add New Deck*/}
        {/*</Typography>*/}

        <form onSubmit={handleSubmit(async data => props.onSubmit(data))}>
          {Object.keys(dirtyFields).length > 0 && (
            <div style={{ textAlign: 'right' }}>
              <ControlledInput
                autoFocus
                className={s.nameInput}
                control={control}
                label={'Name Pack'}
                name={'name'}
              />
              <ControlledCheckbox name={'Private Pack'} />
              <Button
                label={'Cancel'}
                onClick={() => {
                  reset()
                }}
                type={'button'}
                variant={'text'}
              />
              <Button
                label={'Add New Pack'}
                onClick={() => {
                  reset()
                }}
                type={'button'}
                variant={'text'}
              />
            </div>
          )}

          <div className={s.formsContainer}>
            {errors.cover && (
              <Typography as={'span'} className={s.errorMessage} variant={'body2'}>
                {errors.cover.message}
              </Typography>
            )}
            <div className={s.avatarInput}>
              <DeckIcon className={s.avatarTrigger} height={16} width={16} />
              <input
                multiple={false}
                {...register('cover')}
                accept={'.jpeg,.jpg,.png,.webp'}
                id={'cover'}
                type={'file'}
              />
            </div>

            {/*{dirtyFields.avatar || dirtyFields.name ? (*/}
            {/*  <Button*/}
            {/*    disabled={isSubmitting}*/}
            {/*    fullWidth*/}
            {/*    label={'Save changes'}*/}
            {/*    variant={'primary'}*/}
            {/*  />*/}
            {/*) : (*/}
            {/*  <Button*/}
            {/*    icon={<LogoutIcon height={16} width={16} />}*/}
            {/*    label={'Logout'}*/}
            {/*    onClick={logoutHandler}*/}
            {/*    type={'button'}*/}
            {/*    variant={'secondary'}*/}
            {/*  />*/}
            {/*)}*/}
          </div>
        </form>
      </Modal>
    </>
  )
}
