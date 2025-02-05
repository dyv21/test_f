import axios from "axios"

export const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
})

export const API = {
  getCharactersByName: () => instance.get(`character/`)
}