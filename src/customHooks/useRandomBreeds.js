import { useEffect, useState } from 'react'
import { getRandomBreeds } from '../logic/logic'

export function useRandomBreeds({ fact }) {
  const [breedDog, setBreedDog] = useState()


  useEffect(()=> {
    if (!fact) return
    getRandomBreeds().then(setBreedDog)
  }, [fact])

  return { breedDog }
}