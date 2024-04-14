import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useResetPasswordMutation } from '@/entities/user/api/userApi'
import { CheckEmail } from '@/features/check-email'
import { ForgotPasswordForm } from '@/features/forgot-password'
import { FormValues } from '@/features/forgot-password/model/types'

export const ForgotPasswordPage = () => {
  const [sendEmail, { isSuccess }] = useResetPasswordMutation()
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const sendPasswordHandler = async ({ email }: FormValues) => {
    await sendEmail(email).unwrap()
    navigate('/check-email', { state: { email: email } })
    setEmail(email)
  }

  return isSuccess ? (
    //delete div?
    <div>
      <CheckEmail email={email} />
    </div>
  ) : (
    <div>
      <ForgotPasswordForm onSubmit={sendPasswordHandler} />
    </div>
  )
}
