import { toast } from 'react-toastify'

import { useUpdateProfileMutation } from '@/entities/user'
import { FormValues } from '@/features/edit-profile/model/types'
import { EditProfileForm } from '@/features/edit-profile/ui/EditProfileForm'
import { isErrorWithMessage } from '@/shared/lib/isErrorWithMessage'
import { isFetchBaseQueryError } from '@/shared/lib/isFetchBaseQueryError'

import s from './EditPage.module.scss'

export const EditProfilePage = () => {
  const [updateProfile] = useUpdateProfileMutation()

  const submitForm = async (data: FormValues) => {
    const formData = new FormData()

    if (data.avatar) {
      formData.append('avatar', data.avatar?.[0])
    }
    formData.append('name', data.name)
    try {
      await updateProfile(formData).unwrap()
      toast.success('Profile updated successfully.')
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        const errMsg = 'error' in err ? err.error : JSON.stringify(err.data)

        toast.error(errMsg)
      } else if (isErrorWithMessage(err)) {
        toast.error(err.message)
      }
    }
  }

  return (
    <section className={s.page}>
      <EditProfileForm onSubmit={submitForm} />
    </section>
  )
}
