import { useNavigate, useParams } from 'react-router-dom'

import { useResetPasswordMutation } from '@/entities/user/api/user-api'
import { CreateNewPassword } from '@/features/create-password'
import { FormValues } from '@/features/create-password/model/types'

import s from './ResetPasswordPage.module.scss'

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

  return (
    <section className={s.page}>
      <CreateNewPassword onSubmit={createPassword} />
    </section>
  )
}
