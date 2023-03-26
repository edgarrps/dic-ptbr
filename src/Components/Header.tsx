export default function Header() {
    return (
        <div className='flex items-center bg-white pl-2.5 space-x-2 rounded-t-xl w-[700px] h-[30px]'>
            <div className='rounded-full bg-red-600 w-[10px] h-[10px]' />
            <div className='rounded-full bg-yellow-600 w-[10px] h-[10px]' />
            <div className='rounded-full bg-green-600 w-[10px] h-[10px]' />
            <h2 className='px-[223px] font-mono font-bold text-sm text-stone-400'>Dicionário pt-BR</h2>
        </div>
    )
}