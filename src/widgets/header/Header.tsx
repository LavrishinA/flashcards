import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { Typography } from '@/shared/ui/Typography'
import { Logo } from '@/shared/ui/icons'
import { clsx } from 'clsx'

import s from './Header.module.scss'

type Props = {
  children: ReactNode
}

export const Header = ({ children }: Props) => {
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
        {children}
      </div>
    </header>
  )
}
