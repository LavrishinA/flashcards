import { useSearchParams } from 'react-router-dom'

import { TabSwitcher } from '@/shared/ui/TabSwitcher'

type Props = {
  authorId: string
  key: string
}

const values = [
  {
    disable: false,
    key: 'My cards',
    value: 'my',
  },
  {
    disable: false,
    key: 'All cards',
    value: 'all',
  },
]

export const MyAllCards = ({ authorId, key }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const tabSwitcherValueHandler = (value: string) => {
    searchParams.set('currentPage', `1`)
    if (value === 'my') {
      searchParams.set('authorId', authorId)
    } else {
      searchParams.delete('authorId')
    }
    setSearchParams(searchParams)
  }

  return (
    <div>
      <TabSwitcher
        defaultValue={searchParams.get('authorId') ? 'my' : 'all'}
        key={key}
        onValueChange={tabSwitcherValueHandler}
        values={values}
      />
    </div>
  )
}
