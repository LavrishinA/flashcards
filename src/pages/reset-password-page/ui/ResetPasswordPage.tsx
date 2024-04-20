import { useNavigate, useParams } from 'react-router-dom'

import { useResetPasswordMutation } from '@/entities/user/api/userApi'
import { CreateNewPassword } from '@/features/create-password'
import { FormValues } from '@/features/create-password/model/types'

export const ResetPasswordPage = () => {
  const [createNewPassword] = useResetPasswordMutation()
  const navigate = useNavigate()
  const { token } = useParams<{ token: string }>()

  const createPassword = async ({ password }: FormValues) => {
    if (token) {
      await createNewPassword({ password, token }).unwrap()
      navigate('/sign-in')
    }
  }

  return <CreateNewPassword onSubmit={createPassword} />
}
