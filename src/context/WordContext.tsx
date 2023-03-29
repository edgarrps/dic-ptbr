import { createContext, useState } from 'react'
import { WordContextProps } from '../types/WordContextProps'


export const WordContext = createContext<WordContextProps>({ word: '', handleChange() { }, setWord() { }, result: [], setResult() { }, handleSubmit() { }})
export const WordProvider = ({ children }: WordContextProps) => {
    const [result, setResult] = useState<[] | []>()
    const [word, setWord] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => e.preventDefault()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => setWord(e.target.value)

    return (<WordContext.Provider value={{ word, handleChange, setWord, result, setResult, handleSubmit }}>{children}</WordContext.Provider>)
}