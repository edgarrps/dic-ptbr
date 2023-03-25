import { createContext, ReactNode, useState } from 'react'
import { TextareaAutosizeProps } from 'react-textarea-autosize'

type ContextType = {
    word: string
    handleChange(e: React.ChangeEvent<HTMLTextAreaElement>): void
}

interface Props {
    children?: ReactNode
}
export const WordContext = createContext<ContextType>({ word: '', handleChange() {} })
export const WordProvider = ({children}:Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setWord(e.currentTarget.value)
    const [word, setWord] = useState('')

    return (
        <WordContext.Provider value={{ word, handleChange }}>{children}</WordContext.Provider>
    )
}