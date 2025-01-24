
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const RANDOM_DOGS_FACTS = 'https://dogapi.dog/api/v2/facts'
  const RANDOM_DOGS_NAMES = 'https://dogapi.dog/api/v2/breeds'
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()
  const [nameDog, setNameDog] = useState()

  const getRandomInt = () => {
    return Math.floor(Math.random() * 10)
  }

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
    fetch('https://dog.ceo/api/breeds/image/random')
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

  return (  
    <main>
      <button onClick={()=> {handleClick()}}>Update Facts!</button>
      <div className='shadow-2xl shadow-black rounded-2xl flex justify-center items-center'>
        <div className='flex flex-col w-96 gap-4 p-4'>
          {fact && <p className='w-full'><i>&quot;{fact}&quot;</i></p>}
          {nameDog && <p className='w-full text-right font-extrabold'>{nameDog}</p>}
        </div>
        {imageURL && <img className='w-72 rounded-2xl' src={imageURL} alt='catFactImage'/>}
      </div>
    </main>
  )
}

export default App
