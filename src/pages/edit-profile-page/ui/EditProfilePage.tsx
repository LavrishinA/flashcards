import { useUpdateProfileMutation } from '@/entities/user'
import { FormValues } from '@/features/edit-profile/model/types'
import { EditProfileForm } from '@/features/edit-profile/ui/EditProfileForm'

export const EditProfilePage = () => {
  const [updateProfile] = useUpdateProfileMutation()

  const submitForm = (data: FormValues) => {
    const formData = new FormData()

    formData.append('avatar', data.avatar?.[0])
    formData.append('name', data.name)

    return updateProfile(formData).unwrap()
  }

  return (
    <>
      <EditProfileForm onSubmit={submitForm} />
    </>
  )
}
