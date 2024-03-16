import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import s from './Layout.module.scss'
type LayoutProps = {
  headerSlot: ReactNode
}
export const Layout = (props: LayoutProps) => {
  return (
    <>
      {props.headerSlot}
      <main className={s.root}>
        <Outlet />
      </main>
    </>
  )
}
