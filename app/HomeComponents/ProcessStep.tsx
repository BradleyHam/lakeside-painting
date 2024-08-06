export default function ProcessStep({number, heading, description}: {number: number, heading: string, description: string}) {
    return (
        <div className="flex flex-col items-start lg:items-center text-center">
        <div className="relative flex justify-center items-center w-12 h-12 mb-4">
            <span className="gradient-text text-6xl font-bold translate-y-[28px] -translate-x-[10px] lg:-translate-x-[0]">{number}</span>
        </div>
        <h3 className="text-2xl font-bold mb-2 tracking-tighter text-brand-primary">{heading}</h3>
        <p className="text-gray-600 text-left lg:text-center">{description}</p>
    </div>
    )
}