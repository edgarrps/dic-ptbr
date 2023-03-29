export type WordContextProps = 
    {
        word: string
        setWord(value: string): void
        result: [] | undefined
        setResult: (result: []) => void
         handleChange(e: React.ChangeEvent<HTMLInputElement>): void
        handleSubmit(e: React.FormEvent<HTMLFormElement>): void
    }