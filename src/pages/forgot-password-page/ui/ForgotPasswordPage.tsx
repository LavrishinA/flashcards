import { useNavigate } from 'react-router-dom'

import { useForgotPasswordMutation } from '@/entities/user/api/userApi'
import { ForgotPasswordForm } from '@/features/forgot-password'
import { FormValues } from '@/features/forgot-password/model/types'

export const ForgotPasswordPage = () => {
  const [sendPassword] = useForgotPasswordMutation()
  const navigate = useNavigate()

  const sendPasswordHandler = (password: FormValues) => {
    return sendPassword(password)
      .unwrap()
      .then(() => navigate('/check-email'))
  }

  return (
    <div>
      <ForgotPasswordForm onSubmit={sendPasswordHandler} />
    </div>
  )
}
