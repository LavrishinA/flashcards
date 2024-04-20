import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useRecoverPasswordMutation } from '@/entities/user/api/userApi'
import { CheckEmail } from '@/features/check-email'
import { ForgotPasswordForm } from '@/features/forgot-password'
import { emailTemplate } from '@/features/forgot-password/const/emailTemplate'
import { FormValues } from '@/features/forgot-password/model/types'

import s from './ForgotPasswordPage.module.scss'

export const ForgotPasswordPage = () => {
  const [sendEmail, { isSuccess }] = useRecoverPasswordMutation()
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const sendPasswordHandler = async ({ email }: FormValues) => {
    await sendEmail({ email, html: emailTemplate }).unwrap()
    navigate('/check-email', { state: { email: email } })
    setEmail(email)
  }

  return isSuccess ? (
    <CheckEmail email={email} />
  ) : (
    <section className={s.page}>
      <ForgotPasswordForm onSubmit={sendPasswordHandler} />
    </section>
  )
}
