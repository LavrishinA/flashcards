import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/Typography'
import * as Tabs from '@radix-ui/react-tabs'

import s from './TabSwitcher.module.scss'

type TabSwitcherProps = ComponentPropsWithoutRef<typeof Tabs.Root> & {
  title?: string
  values: { disabled?: boolean; key: string; value: string }[]
}

export const TabSwitcher = (props: TabSwitcherProps) => {
  const { title, values, ...rest } = props

  const tabs = values.map(tab => (
    <>
      <Tabs.Trigger className={s.tabItem} disabled={tab.disabled} value={tab.value}>
        <Typography as={'span'} variant={'body1'}>
          {tab.key}
        </Typography>
      </Tabs.Trigger>
    </>
  ))

  return (
    <Tabs.Root className={s.container} {...rest}>
      <Typography as={'span'} variant={'body2'}>
        {props.title}
      </Typography>
      <Tabs.List className={s.tabList}>{tabs}</Tabs.List>
    </Tabs.Root>
  )
}
