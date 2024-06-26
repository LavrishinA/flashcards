import { useNavigate } from 'react-router-dom'

import { useSignUpMutation } from '@/entities/user/api/user-api'
import { SignUpPayload } from '@/entities/user/model/types'
import { SignUpForm } from '@/features/signup'

import s from './SignUpPage.module.scss'

export const SignupPage = () => {
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()

  const signUpHandler = (data: SignUpPayload) => {
    return signUp({ email: data.email, password: data.password })
      .unwrap()
      .then(() => navigate('/sign-in', {}))
      .catch(e => console.log(e)) //todo toast
  }

  return (
    <section className={s.page}>
      <SignUpForm onSubmit={signUpHandler} />
    </section>
  )
}
