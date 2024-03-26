import { useNavigate } from 'react-router-dom'

import { useSignUpMutation } from '@/entities/user/api/userApi'
import { SignUpPayload } from '@/entities/user/model/types'
import { SignUpForm } from '@/features/signup'

import s from './SignUpPage.module.scss'

export const SignupPage = () => {
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()

  const signUpHandler = (data: SignUpPayload) => {
    signUp({ email: data.email, password: data.password })
      .unwrap()
      .then(() => navigate('/', {}))
      .catch(e => console.log(e)) //todo toast
  }

  return (
    <section className={s.page}>
      <SignUpForm onSubmit={signUpHandler} />
    </section>
  )
}
