import { createContext, ReactNode, useState, useEffect } from 'react'

type ContextType = {
    word: string
    handleChange(e: React.ChangeEvent<HTMLInputElement>): any
}

interface Props {
    children?: ReactNode
}

export const WordContext = createContext<ContextType>({ word: '', handleChange() { } })
export const WordProvider = ({ children }: Props) => {
    const [word, setWord] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): any => setWord(e.target.value)

    return (
        <WordContext.Provider value={{ word, handleChange }}>{children}</WordContext.Provider>
    )
}