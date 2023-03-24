import ReactTextareaAutosize from "react-textarea-autosize"

const SearchInput = () => {
    return (
        <div className='grid rounded-xl bg-cyan-400 w-[700px] h-[300px] place-items-center'>
            <div>
                <input className='bg-stone-100 rounded-l-full w-[360px] h-[30px]' type='text' />
                <button className='bg-purple-100 rounded-r-full pl-2 pr-2 w-auto h-[30px] font-bold text-stone-500'>Busca</button>
            </div>
            <ReactTextareaAutosize className='w-[400px] pl-2 pr-2 pt-1 pb-1 focus:outline-none resize-none' />
        </div>
    )
}

export default SearchInput