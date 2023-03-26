import { createContext, ReactNode, useState, useEffect } from 'react'

type ContextType = {
    word: string
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void
    setWord(value: string): void
}

interface Props {
    children?: ReactNode
}

export const WordContext = createContext<ContextType>({ word: '', handleChange() { }, setWord() { } })
export const WordProvider = ({ children }: Props) => {
    const [word, setWord] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => setWord(e.target.value)

    return (
        <WordContext.Provider value={{ word, handleChange, setWord }}>{children}</WordContext.Provider>
    )
}