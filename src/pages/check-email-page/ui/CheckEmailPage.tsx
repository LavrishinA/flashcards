import { useLocation } from 'react-router-dom'

import { CheckEmail } from '@/features/check-email'

export const CheckEmailPage = () => {
  const { state } = useLocation()

  return (
    <div>
      <CheckEmail email={state?.email} />
    </div>
  )
}
