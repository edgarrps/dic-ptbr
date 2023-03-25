import ReactTextareaAutosize from "react-textarea-autosize"

export default function SearchInput() {

    const handleSubmit = (e: any) => e.preventDefault()

    return (

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
                 m-2 w-[360px] h-[30px] focus:outline-0 pl-3 pr-2' type='text' />

                    <button className='bg-purple-100 pl-2 pr-2 
                h-[30px] font-bold text-stone-500'>Busca</button>
                </p>

                <ReactTextareaAutosize className='w-[400px] bg-cyan-400
                 pl-2 pr-2 pt-1 pb-1 focus:outline-none resize-none' />
            </div>
        </form>
    )
} 