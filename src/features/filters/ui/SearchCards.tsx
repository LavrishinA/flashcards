import { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Input } from '@/shared/ui/Input'

type SearchCardsProps = {
  name: string
}
export const SearchCards = ({ name }: SearchCardsProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchValue = searchParams.get(name) || ''

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    searchParams.set(name, `${e.currentTarget.value}`)
    setSearchParams(searchParams)
  }

  const clearInputHandler = (value: string) => {
    searchParams.set(name, value)
    setSearchParams(searchParams)
  }

  return (
    <div>
      <Input
        onChange={handleChange}
        onInputClear={clearInputHandler}
        placeholder={'javascript'}
        search
        value={searchValue}
      ></Input>
    </div>
  )
}
