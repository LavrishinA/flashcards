import { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Input } from '@/shared/ui/Input'

export const SearchCards = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchName = searchParams.get('name') || ''

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    searchParams.set('name', `${e.currentTarget.value}`)
    setSearchParams(searchParams)
  }

  const clearInputHandler = (value: string) => {
    searchParams.set('name', value)
    setSearchParams(searchParams)
  }

  return (
    <div>
      <Input
        onChange={handleChange}
        onInputClear={clearInputHandler}
        search
        value={searchName}
      ></Input>
    </div>
  )
}
