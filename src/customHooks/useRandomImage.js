import { useEffect, useState } from 'react'
import { getRandomImages } from '../logic/logic'

export function useRandomImage({ fact }) {
  const [imageURL, setImageURL] = useState()

  useEffect(()=> {
    if (!fact) return
    getRandomImages().then(setImageURL)
  }, [fact])

  return { imageURL }
}