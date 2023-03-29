import { useContext, useEffect, useState } from 'react'
import { WordContext } from '../context/WordContext'
import { WordContextProps } from '../types/WordContextProps'
import { Result } from './Result'
import { api } from '../services/api'

export type Display = { display: JSX.Element[] | undefined }

export const Search = ({ display }: Display) => {
    const { word, handleChange, setWord, result, setResult }: WordContextProps = useContext(WordContext)

    async function handleSearch() {

        if (word === '') alert('Preencha uma palavra para buscar no dicionário')
        else {
            try {
                const res = await api.get(`${word}`)
                setResult(res.data)
            }
            catch {
                alert('Palavra não encontrada')
                setResult([])
                setWord('')

            }
        }
    }

    result ? display = result.map((data, i) => {
        const { partOfSpeech, meanings, etymology } = data
        return (<Result key={i} partOfSpeech={partOfSpeech} meanings={meanings} etymology={etymology} />)
    })
        :
        'nada encontrado'

    return (
        <div className='flex flex-col pt-10 rounded-b-xl bg-cyan-400 place-items-center shadow-xl pb-12'>
            <p>
                <input onChange={handleChange} value={word} className='bg-stone-100 
         m-2 desktop:w-[430px] laptop:w-[340px] tablet:w-[260px] mobile:w-[170px] h-[30px] focus:outline-0 pl-3 pr-2' autoComplete='off' type='text' />

                <button onClick={handleSearch} className={`bg-purple-100 pl-2 pr-2 
        h-[30px] font-bold text-stone-500`}>Busca</button>
            </p>

            {display}

        </div>
    )
}