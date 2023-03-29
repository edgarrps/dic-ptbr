import { ResultProps } from "../types/ResultProps"

export const Result = ({partOfSpeech, meanings, etymology}: ResultProps) => {
    return (
        < div className='pt-5 space-y-2
        mobile:w-[240px] mobile:pl-2 text-left 
        tablet:w-[340px] tablet:pl-3 tablet:text-justify
        laptop:w-[430px] laptop:pl-4 laptop:text-justify 
        desktop:w-[530px] desktop:pl-5 desktop:text-justify 
        '>
            <div className='text-stone-700 font-mono italic pb-2'><span className='font-sans text-lg font-bold not-italic text-yellow-700'>Classificação: </span>{partOfSpeech}</div>
            <div className='text-stone-700 font-mono italic pb-2'><span className='font-sans text-lg font-bold not-italic text-red-700'>Significado: </span>{meanings}</div>
            {etymology ? <div className='text-stone-700 font-mono italic pb-2'><span className='font-sans text-lg font-bold not-italic text-purple-700'>Etimologia: </span>{etymology}</div> : ''}
        <hr/>
        </div>
    )
}