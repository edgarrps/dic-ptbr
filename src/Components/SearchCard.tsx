import { useContext, useEffect } from "react"
import ReactTextareaAutosize from "react-textarea-autosize"
import { WordContext } from "../context/WordContext"
import Header from "./Header"

type Props = {
    word: string
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void
}

export default function SearchCard() {

    const { word, handleChange }: Props = useContext(WordContext)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => e.preventDefault()


    return (
        <div className='grid place-items-center p-6'>

            <form onSubmit={handleSubmit}>

                <Header />

                <div className='grid rounded-b-xl bg-cyan-400 w-[700px] h-[300px] place-items-center shadow-xl'>

                    <p>
                        <input onChange={handleChange} className='bg-stone-100 
                     m-2 w-[360px] h-[30px] focus:outline-0 pl-3 pr-2' autoComplete='off' type='text' required />

                        <button className='bg-purple-100 pl-2 pr-2 
                    h-[30px] font-bold text-stone-500'>Busca</button>
                    </p>

                    <ReactTextareaAutosize value={word} className='w-[400px] bg-cyan-400
                     pl-2 pr-2 pt-1 pb-1 focus:outline-none resize-none' disabled />
                </div>
            </form>
        </div>
    )
} 
