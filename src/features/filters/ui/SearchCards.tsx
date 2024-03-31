import { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useDebounce } from '@/shared/lib/useDebounce'
import { Input } from '@/shared/ui/Input'

export const SearchCards = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchName = searchParams.get('name') || ''
  const debouncedValue = useDebounce<string>(searchName, 500)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    searchParams.set('name', `${e.currentTarget.value}`)
    setSearchParams(searchParams)
  }

  return (
    <div>
      <Input onChange={handleChange} value={debouncedValue}></Input>
    </div>
  )
}
