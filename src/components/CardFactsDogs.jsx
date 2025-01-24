import { useEffect, useState } from 'react'
import { getRandomBreeds} from '../logic/logic'
import { useRandomImage} from '../customHooks/useRandomImage'
import { useDogFact } from '../customHooks/getRandomFact'

function CardFactsDogs () {
  const {fact, getFact} = useDogFact()
  const {imageURL} = useRandomImage({fact})
  const [breedDog, setBreedDog] = useState()


  useEffect(()=> {
    if (!fact) return
    getRandomBreeds().then(setBreedDog)
  }, [fact])

  const handleClick = async() => {
    getFact()
  }

    return(
        <>
            <button onClick={()=> {handleClick()}}>Update Facts!</button>
            <div className='shadow-2xl shadow-black rounded-2xl flex justify-center items-center'>
                <div className='flex flex-col w-96 gap-4 p-4'>
                {fact && <p className='w-full'><i>&quot;{fact}&quot;</i></p>}
                {breedDog && <p className='w-full text-right font-extrabold'>{breedDog}</p>}
                </div>
                {imageURL && <img className='w-72 rounded-2xl max-h-90' src={imageURL} alt='dogFactImage'/>}
            </div>
        </>
    )
}

export default CardFactsDogs