import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { useMeQuery, useUpdateProfileMutation } from '@/entities/user'
import { useLogout } from '@/features/logout'
import { Avatar } from '@/shared/ui/Avatar'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Typography } from '@/shared/ui/Typography'
import { ControlledInput } from '@/shared/ui/controlled/controlled-input/Controlled-input'
import { EditIcon, LogoutIcon } from '@/shared/ui/icons'

import s from './EditProfile.module.scss'

export const EditProfile = () => {
  const { data: user } = useMeQuery()
  const { logoutHandler } = useLogout()
  const [updateProfile] = useUpdateProfileMutation()
  const [isEdit, setIsEdit] = useState(false)

  const {
    control,
    formState: { dirtyFields },
    handleSubmit,
    register,
    reset,
  } = useForm({
    defaultValues: {
      avatar: user?.avatar,
      name: user?.name,
    },
  })

  const submitForm = (data: any) => {
    const formData = new FormData()

    formData.append('avatar', data.avatar?.[0])
    formData.append('name', data.name)
    updateProfile(data)
      .unwrap()
      .finally(() => {
        setIsEdit(false)
      })
  }

  useEffect(() => {
    reset({
      avatar: user?.avatar,
      name: user?.name,
    })
  }, [reset, user?.name, user?.avatar])

  return (
    <>
      <Card className={s.card}>
        <Typography className={s.title} variant={'h1'}>
          Personal information
        </Typography>

        <form onSubmit={handleSubmit(submitForm)}>
          <div>
            {user && <Avatar className={s.avatar} src={user.avatar} username={user?.name} />}
            <label htmlFor={'avatar'}>
              <EditIcon height={16} width={16} />
              <input multiple={false} {...register('avatar')} id={'avatar'} type={'file'} />
            </label>
          </div>
          {isEdit ? (
            <ControlledInput
              autoFocus
              control={control}
              label={'Name'}
              name={'name'}
              onBlur={() => {
                setIsEdit(false)
              }}
            />
          ) : (
            <div style={{ display: 'flex' }}>
              <Typography variant={'h2'}>{user?.name}</Typography>
              <Button
                icon={<EditIcon height={16} width={16} />}
                onClick={() => setIsEdit(!isEdit)}
                type={'button'}
                variant={'text'}
              />
            </div>
          )}
          {dirtyFields.avatar || dirtyFields.name ? (
            <Button label={'Save changes'} variant={'primary'} />
          ) : (
            <Button
              icon={<LogoutIcon height={16} width={16} />}
              label={'Logout'}
              onClick={logoutHandler}
              type={'button'}
              variant={'secondary'}
            />
          )}
        </form>
      </Card>
    </>
  )
}
