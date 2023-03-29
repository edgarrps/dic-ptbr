import { createContext, ReactNode, useState } from 'react'

type ContextType =
    {
        word: string
        setWord(value: string): void
        result: any
        setResult: any
        handleChange(e: React.ChangeEvent<HTMLInputElement>): void
        handleSubmit(e: React.FormEvent<HTMLFormElement>): void
    }

interface Props { children?: ReactNode }

    export const WordContext = createContext<ContextType>({ word: '', handleChange() { }, setWord() { }, result: '', setResult: [], handleSubmit() { } })
    export const WordProvider = ({ children }: Props) => {
    const [result, setResult] = useState<[] | []>()
    const [word, setWord] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => e.preventDefault()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => setWord(e.target.value)
    return (<WordContext.Provider value={{ word, handleChange, setWord, result, setResult, handleSubmit }}>{children}</WordContext.Provider>)
}