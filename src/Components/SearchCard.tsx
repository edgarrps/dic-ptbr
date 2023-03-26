import { useContext } from "react"
import ReactTextareaAutosize from "react-textarea-autosize"
import { WordContext } from "../context/WordContext"
import TitleBar from "./TitleBar"
import { api } from "../services/api"

type Props = {
    word: string
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void
    setWord(value: string): void
}

export default function SearchCard() {

    const { word, handleChange, setWord }: Props = useContext(WordContext)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => e.preventDefault()

    async function handleSearch() {
        if (word === '') alert('Preencha uma palavra para buscar no dicionário')
        else {
            try {
                const res = await api.get(`${word}`)
                console.log(res)
            } catch {
                alert('Palavra não encontrada')
                setWord('')
            }
        }
    }

    return (
        <div className='grid place-items-center p-6'>

            <form onSubmit={handleSubmit}>

                <TitleBar />

                <div className='flex flex-col pt-10 rounded-b-xl bg-cyan-400 place-items-center shadow-xl'>

                    <p>
                        <input onChange={handleChange} value={word} className='bg-stone-100 
                     m-2 w-[360px] h-[30px] focus:outline-0 pl-3 pr-2' autoComplete='off' type='text'/>

                        <button onClick={handleSearch} className='bg-purple-100 pl-2 pr-2 
                    h-[30px] font-bold text-stone-500'>Busca</button>
                    </p>

                    <ReactTextareaAutosize className='w-[400px] bg-cyan-400
                     pl-2 pr-2 pt-10 pb-1 focus:outline-none resize-none' disabled />
                </div>
            </form>
        </div>
    )
} 
