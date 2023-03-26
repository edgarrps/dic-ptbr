import { createContext, ReactNode, useState, useEffect } from 'react'

type ContextType = {
    word: string
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void
}

interface Props {
    children?: ReactNode
}

export const WordContext = createContext<ContextType>({ word: '', handleChange() { } })
export const WordProvider = ({ children }: Props) => {
    const [word, setWord] = useState('')
    const api = `https://api.dicionario-aberto.net/word/${word}`
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => setWord(e.target.value)



    return (
        <WordContext.Provider value={{ word, handleChange }}>{children}</WordContext.Provider>
    )
}