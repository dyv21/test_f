import axios from "axios"

export const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
})

export const API = {
  getCharactersByName: (name: string) => instance.get(`character?name=${name}`)
}