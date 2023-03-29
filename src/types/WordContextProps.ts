import { ReactNode } from 'react'

export type WordContextProps = 
    {
        word: string
        setWord(word: string): void
        result: [] | undefined
        setResult: (result: []) => void
         handleChange(e: React.ChangeEvent<HTMLInputElement>): void
        handleSubmit(e: React.FormEvent<HTMLFormElement>): void
        children: Element[]
    }
