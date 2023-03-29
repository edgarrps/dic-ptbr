export default function TitleBar() {
    return (
        <div className='flex items-center bg-white space-x-2 rounded-t-xl h-[30px]
        desktop:w-[700px] desktop:pl-2.5
        laptop:w-[600px] latptop: pl-2.5
        tablet:w-[500px] tablet: pl-2.5
        mobile:w-[300px] mobile: pl-2.5
        '>
            <div className='rounded-full bg-red-600 w-[10px] h-[10px]' />
            <div className='rounded-full bg-yellow-600 w-[10px] h-[10px]' />
            <div className='rounded-full bg-green-600 w-[10px] h-[10px]' />
            <h2 className='desktop:px-[223px] laptop:px-[170px] tablet:px-[130px] mobile:px-[25px] font-mono font-bold text-sm text-stone-400'>Dicionário pt-BR</h2>
        </div>
    )
}