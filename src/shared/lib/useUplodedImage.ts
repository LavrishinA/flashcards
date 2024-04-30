import { ChangeEvent, useState } from 'react'

type ChangeHandler = (event: ChangeEvent<HTMLInputElement>) => void

export const useUplodedImage = (
  initialUrl: null | string = null
): [null | string, (event: ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [imageUrl, setImageUrl] = useState<null | string>(initialUrl)
  const handleImageChange: ChangeHandler = event => {
    const newFile = event.currentTarget?.files?.[0]

    if (!newFile) {
      return
    }
    if (newFile) {
      const newImageUrl = URL.createObjectURL(newFile)

      setImageUrl(newImageUrl)
    }
  }

  const resetImage = () => {
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl)
      setImageUrl(null)
    }
  }

  return [imageUrl, handleImageChange, resetImage]
}
