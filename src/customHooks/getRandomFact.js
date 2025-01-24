import { useEffect, useState } from 'react'
import { getRandomFacts } from '../logic/logic'

export function useDogFact () {
  const [fact, setFact] = useState()
  const getFact = () => {
    getRandomFacts().then(setFact)
  }
  
  useEffect(getFact,[])
  return { fact, getFact }
}