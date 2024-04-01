import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { useMeQuery } from '@/entities/user'
import { editProfileZodSchema } from '@/features/edit-profile/model/edit-profile-zod-schema'
import { FormValues, Props } from '@/features/edit-profile/model/types'
import { useLogout } from '@/features/logout'
import { Avatar } from '@/shared/ui/Avatar'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Typography } from '@/shared/ui/Typography'
import { ControlledInput } from '@/shared/ui/controlled/controlled-input/Controlled-input'
import { EditIcon, LogoutIcon } from '@/shared/ui/icons'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './EditProfile.module.scss'

export const EditProfileForm = (props: Props) => {
  const { data: user } = useMeQuery()
  const { logoutHandler } = useLogout()

  const [isEdit, setIsEdit] = useState(false)

  const {
    control,
    formState: { dirtyFields, errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      avatar: undefined,
      name: user?.name,
    },
    resolver: zodResolver(editProfileZodSchema),
  })

  useEffect(() => {
    reset({
      avatar: undefined,
      name: user?.name,
    })
  }, [reset, user?.name, user?.avatar])

  return (
    <>
      <Card className={s.card}>
        <Typography className={s.title} variant={'h1'}>
          Personal information
        </Typography>

        <form onSubmit={handleSubmit(async data => props.onSubmit(data))}>
          {Object.keys(dirtyFields).length > 0 && (
            <div style={{ textAlign: 'right' }}>
              <Button
                label={'Clear all'}
                onClick={() => {
                  reset()
                }}
                type={'button'}
                variant={'text'}
              />
            </div>
          )}

          <div className={s.formsContainer}>
            {errors.avatar && (
              <Typography as={'span'} className={s.errorMessage} variant={'body2'}>
                {errors.avatar.message}
              </Typography>
            )}
            <div className={s.avatarInput}>
              {user && <Avatar className={s.avatar} src={user.avatar} username={user?.name} />}
              <label htmlFor={'avatar'}>
                <EditIcon className={s.avatarTrigger} height={16} width={16} />
                <input
                  multiple={false}
                  {...register('avatar')}
                  accept={'.jpeg,.jpg,.png,.webp'}
                  id={'avatar'}
                  type={'file'}
                />
              </label>
            </div>

            {isEdit ? (
              <ControlledInput
                autoFocus
                className={s.nameInput}
                control={control}
                label={'Name'}
                name={'name'}
                onBlur={() => {
                  setIsEdit(false)
                }}
              />
            ) : (
              <div className={s.nameField}>
                <Typography as={'h2'} variant={'h2'}>
                  {user?.name}
                </Typography>
                <Button
                  icon={<EditIcon height={16} width={16} />}
                  onClick={() => setIsEdit(!isEdit)}
                  type={'button'}
                  variant={'text'}
                />
              </div>
            )}
            <Typography variant={'body2'}>{user?.email}</Typography>
            {dirtyFields.avatar || dirtyFields.name ? (
              <Button
                disabled={isSubmitting}
                fullWidth
                label={'Save changes'}
                variant={'primary'}
              />
            ) : (
              <Button
                icon={<LogoutIcon height={16} width={16} />}
                label={'Logout'}
                onClick={logoutHandler}
                type={'button'}
                variant={'secondary'}
              />
            )}
          </div>
        </form>
      </Card>
    </>
  )
}
