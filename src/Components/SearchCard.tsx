import { useContext } from 'react'
import { WordContext } from '../context/WordContext'
import { WordContextProps } from '../types/WordContextProps'
import TitleBar from "./TitleBar"
import { Search } from './Search'

export default function SearchCard() {
    
    let display
    
    const {handleSubmit}: WordContextProps = useContext(WordContext)
    
    return (
        <>
            <form className='desktop:w-[700px] laptop:w-[600px] tablet:w-[500px] mobile:w-[300px]' onSubmit={handleSubmit}>

                <TitleBar />

                <Search display={display} />

            </form >
        </>
    )
}
