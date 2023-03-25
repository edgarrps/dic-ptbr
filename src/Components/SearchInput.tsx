import ReactTextareaAutosize from "react-textarea-autosize"

export default function SearchInput () {

    const handleSubmit = (e:Event) => e.preventDefault()

    return (
        <form className='grid rounded-xl bg-cyan-400 w-[700px] h-[300px] place-items-center shadow-md hover:shadow-2xl ease-in-out duration-300'>
            <p className='hover:shadow-md rounded-full'>
                <input className='bg-stone-100 rounded-l-full w-[360px] h-[30px] focus:outline-0 pl-3 pr-2' type='text' />
                <button className='bg-purple-100 rounded-r-full pl-2 pr-2 w-auto h-[30px] font-bold text-stone-500'>Busca</button>
            </p>
            <ReactTextareaAutosize className='w-[400px] bg-cyan-400 pl-2 pr-2 pt-1 pb-1 focus:outline-none resize-none' />
        </form>
    )
}