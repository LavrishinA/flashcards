import { useNavigate } from 'react-router-dom'

import { useRecoverPasswordMutation } from '@/entities/user/api/user-api'
import { ForgotPasswordForm } from '@/features/forgot-password'
// import { emailTemplate } from '@/features/forgot-password/const/emailTemplate'
import { FormValues } from '@/features/forgot-password/model/types'
import { CheckEmailPage } from '@/pages/check-email-page/ui/CheckEmailPage'

import s from './ForgotPasswordPage.module.scss'

export const ForgotPasswordPage = () => {
  const [sendEmail, { isSuccess }] = useRecoverPasswordMutation()
  const navigate = useNavigate()

  const sendPasswordHandler = async ({ email }: FormValues) => {
    await sendEmail({ email, html: '' }).unwrap()
    navigate('/check-email', { state: { email: email } })
  }

  return isSuccess ? (
    <CheckEmailPage />
  ) : (
    <section className={s.page}>
      <ForgotPasswordForm onSubmit={sendPasswordHandler} />
    </section>
  )
}
