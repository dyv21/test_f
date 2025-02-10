import axios from "axios"
import {CharacterType} from "../hooks/useSendQuery.ts"

type ResponseType ={
  results: CharacterType[];
}

export const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
})

export const API = {
  getCharactersByName: (name: string) => instance.get<ResponseType>(`character?name=${name}`)
}