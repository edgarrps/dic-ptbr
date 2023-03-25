import { createContext, ReactNode, useState } from 'react'

type ContextType = {
    word: string
    setWord(value: string): void
}

interface Props {
    children?: ReactNode
}
const [word, setWord] = useState('')
export const WordContext = createContext<ContextType>({ word: '', setWord() { } })
export const WordProvider = ({children}:Props) => {

    return (
        <WordContext.Provider value={{ word, setWord }}>{children}</WordContext.Provider>
    )
}