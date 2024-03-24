import { useSearchParams } from 'react-router-dom'

import { TabSwitcher } from '@/shared/ui/TabSwitcher'

type Props = {
  authorId: string
}

export const MyAllCards = ({ authorId }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const tabSwitcherValueHandler = (newValue: string) => {
    if (newValue === authorId) {
      searchParams.set('MyCards', newValue)
    } else {
      searchParams.delete('MyCards')
    }
    setSearchParams(searchParams)
  }

  return (
    <div>
      <TabSwitcher onValueChange={tabSwitcherValueHandler} values={} />
    </div>
  )
}
