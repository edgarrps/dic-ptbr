import ReactTextareaAutosize from "react-textarea-autosize"

const SearchInput = () => {
    return (
        <div>
            <div className='flex mt-10 mx-auto'>
                <input className='bg-stone-100 rounded-l-full w-[360px] h-[30px]' type='text' />
                <button className='bg-purple-100 rounded-r-full pl-2 pr-2 w-auto h-[30px] font-bold text-stone-500'>Busca</button>
            </div>

            <div className='flex mx-auto items-center content-center'>
                <ReactTextareaAutosize />
            </div>
        </div>
    )
}

export default SearchInput