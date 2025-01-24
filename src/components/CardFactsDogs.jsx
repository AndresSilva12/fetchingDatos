import { useEffect, useState } from 'react'
import { RANDOM_DOGS_FACTS, RANDOM_DOGS_IMAGES, RANDOM_DOGS_NAMES } from '../constants'
import { getRandomInt } from '../logic/logic'

function CardFactsDogs () {
      const [fact, setFact] = useState()
      const [imageURL, setImageURL] = useState()
      const [nameDog, setNameDog] = useState()
    
      const getRandomFacts = () => {
        fetch(RANDOM_DOGS_FACTS)
          .then(res => res.json())
          .then(response => {
            const {data} = response
            setFact(data[0].attributes.body)
          })
      }
    
      useEffect(()=> {
        getRandomFacts()
      },[])
    
      useEffect(()=> {
        fetch(RANDOM_DOGS_IMAGES)
            .then(res => res.json())
            .then(response => {
              const {message} = response
              setImageURL(message)
            })
      }, [fact])
    
      useEffect(()=> {
        fetch(RANDOM_DOGS_NAMES)
        .then(res => res.json())
        .then(response => {
          const {data} = response
          const position = getRandomInt()
          setNameDog(data[position].attributes.name)
        })
      }, [fact])
    
      const handleClick = () => {
        getRandomFacts()
      }

    return(
        <>
            <button onClick={()=> {handleClick()}}>Update Facts!</button>
            <div className='shadow-2xl shadow-black rounded-2xl flex justify-center items-center'>
                <div className='flex flex-col w-96 gap-4 p-4'>
                {fact && <p className='w-full'><i>&quot;{fact}&quot;</i></p>}
                {nameDog && <p className='w-full text-right font-extrabold'>{nameDog}</p>}
                </div>
                {imageURL && <img className='w-72 rounded-2xl' src={imageURL} alt='catFactImage'/>}
            </div>
        </>
    )
}

export default CardFactsDogs