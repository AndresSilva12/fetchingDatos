import { RANDOM_DOGS_FACTS, RANDOM_DOGS_IMAGES, RANDOM_DOGS_BREEDS } from "../constants"

export const getRandomInt = () => {
    return Math.floor(Math.random() * 10)
  }

export const getRandomFacts = async () => {
  const res = await fetch(RANDOM_DOGS_FACTS)
  const response = await res.json()
  const { data } = response
  return (data[0].attributes.body)
}

export const getRandomImages = async () => {
  const res = await fetch(RANDOM_DOGS_IMAGES)
  const response = await res.json()
  const {message} = response
  return message
}

export const getRandomBreeds = async () => {
  const res = await fetch(RANDOM_DOGS_BREEDS)
  const response = await res.json()
  const position = getRandomInt()
  const breed = response.data[position].attributes.name
  return breed
}