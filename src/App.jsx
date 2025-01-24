
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const RANDOM_CATS_FACTS = 'https://catfact.ninja/fact'
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

  useEffect(()=> {
    fetch(RANDOM_CATS_FACTS)
      .then(res => res.json())
      .then(data => {
        const {fact} = data
        setFact(fact)

        const threeFirstWord = fact.split(' ')[0]
        console.log(threeFirstWord)

        fetch(`https://cataas.com/cats/says/${threeFirstWord}?size=50&color=red`)
        .then(response => {
          const {url} = response
          setImageURL(url)
        })

      })
      
  },[])

  return (  
    <main>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt='catFactImage'/>}
    </main>
  )
}

export default App
