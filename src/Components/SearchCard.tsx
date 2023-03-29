import { useContext } from "react"
import { WordContext } from "../context/WordContext"
import { api } from "../services/api"
import { WordContextProps } from '../types/WordContextProps'
import TitleBar from "./TitleBar"



export default function SearchCard() {
    let display
    const { word, handleChange, setWord, result, setResult, handleSubmit }: WordContextProps = useContext(WordContext)

    async function handleSearch() {
        if (word === '') alert('Preencha uma palavra para buscar no dicionário')
        else {
            try {
                const res = await api.get(`${word}`)
                setResult(res.data)
                setWord('')
            } catch {
                alert('Palavra não encontrada')
                setResult('')
                setWord('')
            }
        }
    }
    result ? display = result.map((data) => {
        const { partOfSpeech, meanings, etymology } = data

        return (
            < div className='pt-10 w-[530px] pl-5 text-justify'>
                <div className='text-stone-700 font-mono pb-2'><span className='font-sans font-bold italic text-yellow-700'>Classificação: </span>{partOfSpeech}</div>
                <div className='text-stone-700 font-mono pb-2'><span className='font-sans font-bold italic text-red-700'>Significado: </span>{meanings}</div>
                {etymology ? <div className='text-stone-700 font-mono pb-2'><span className='font-sans font-bold italic text-purple-700'>Etimologia: </span>{etymology}</div> : ''}
            </div>
        )
    })
        :
        'nada encontrado'

    return (
        <div className='grid place-items-center p-6'>

            <form onSubmit={handleSubmit}>

                <TitleBar />

                <div className='flex flex-col pt-10 rounded-b-xl bg-cyan-400 place-items-center shadow-xl pb-12'>

                    <p>
                        <input onChange={handleChange} value={word} className='bg-stone-100 
                     m-2 w-[360px] h-[30px] focus:outline-0 pl-3 pr-2' autoComplete='off' type='text' />

                        <button onClick={handleSearch} className='bg-purple-100 pl-2 pr-2 
                    h-[30px] font-bold text-stone-500'>Busca</button>
                    </p>
                    {display}
                </div>
            </form>
        </div>
    )
}
