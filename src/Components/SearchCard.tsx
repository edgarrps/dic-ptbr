import { useContext } from "react"
import ReactTextareaAutosize from "react-textarea-autosize"
import { WordContext } from "../context/WordContext"

type Props = {
    word: string
    setWord(value: string): void
}

export default function SearchCard() {

    const { word, setWord }: Props = useContext(WordContext)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => e.preventDefault()
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setWord(e.currentTarget.value)
    const api = `https://api.dicionario-aberto.net/word/${word}`

    console.log(api)
    return (
        <div className='grid place-items-center p-6'>

            <form onSubmit={handleSubmit}>

                <div className='flex items-center bg-white pl-2.5 space-x-2 rounded-t-xl w-[700px] h-[30px]'>
                    <div className='rounded-full bg-red-600 w-[10px] h-[10px]' />
                    <div className='rounded-full bg-yellow-600 w-[10px] h-[10px]' />
                    <div className='rounded-full bg-green-600 w-[10px] h-[10px]' />
                    <h2 className='px-[223px] font-mono font-bold text-sm text-stone-400'>Dicionário pt-BR</h2>
                </div>

                <div className='grid rounded-b-xl bg-cyan-400 
            w-[700px] h-[300px] place-items-center shadow-xl'>

                    <p>
                        <input className='bg-stone-100 
                     m-2 w-[360px] h-[30px] focus:outline-0 pl-3 pr-2' autoComplete='off' type='text' required />

                        <button className='bg-purple-100 pl-2 pr-2 
                    h-[30px] font-bold text-stone-500'>Busca</button>
                    </p>

                    <ReactTextareaAutosize onChange={handleChange} className='w-[400px] bg-cyan-400
                     pl-2 pr-2 pt-1 pb-1 focus:outline-none resize-none' disabled />
                </div>
            </form>
        </div>
    )
} 
