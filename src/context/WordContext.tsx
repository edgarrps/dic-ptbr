import { createContext, ReactNode, useState } from 'react'

type ContextType = {
    word: string
    setWord(value: string): void
}

interface Props {
    children?: ReactNode
}

export const WordContext = createContext<ContextType>({ word: '', setWord() { } })
export const WordProvider = ({children}:Props) => {
    const [word, setWord] = useState('')

    return (
        <WordContext.Provider value={{ word, setWord }}>{children}</WordContext.Provider>
    )
}