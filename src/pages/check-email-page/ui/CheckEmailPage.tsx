import { useLocation } from 'react-router-dom'

import { CheckEmail } from '@/features/check-email'

import s from './CheckEmailPage.module.scss'
export const CheckEmailPage = () => {
  const { state } = useLocation()

  return (
    <section className={s.page}>
      <CheckEmail email={state?.email} />
    </section>
  )
}
