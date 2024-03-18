import { useNavigate } from 'react-router-dom'

import { useLoginMutation, userLoginPayload } from '@/entities/user'
import { SignInForm } from '@/features/signin'

import s from './SigninPage.module.scss'

export const SigninPage = () => {
  const [login] = useLoginMutation()
  const navigate = useNavigate()

  const loginHandler = (data: userLoginPayload) => {
    return login(data)
      .unwrap()
      .then(() => navigate('/'))
    // .catch(e => console.log(e))
  }

  return (
    <section className={s.page}>
      <SignInForm onSubmit={loginHandler} />
    </section>
  )
}
