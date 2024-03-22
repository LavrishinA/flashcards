import { Link } from 'react-router-dom'

import { Profile } from '@/features/profile'
import { Typography } from '@/shared/ui/Typography'
import { Logo } from '@/shared/ui/icons'
import { clsx } from 'clsx'

import s from './Header.module.scss'

export const Header = () => {
  return (
    <header>
      <div className={s.container}>
        <Link className={s.logoLink} to={'/'}>
          <div className={s.logo}>
            <Logo className={s.logoImage} height={48} width={48} />
            <Typography className={clsx(s.logoText)} variant={'h1'}>
              Quiz cards
            </Typography>
          </div>
        </Link>

        <Profile />
      </div>
    </header>
  )
}
