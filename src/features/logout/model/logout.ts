import { useNavigate } from 'react-router-dom'

import { useLogoutMutation } from '@/entities/user'

export const useLogout = () => {
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()
  const logoutHandler = () => {
    logout()
      .unwrap()
      .then(() => {
        navigate('/sign-in')
      })
  }

  return { logoutHandler }
}
