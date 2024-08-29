export default function ecTopBanner({heading}: {heading: string}) {
    return (
        <div className="top-banner  h-[220px] lg:h-[300px] relative flex  items-center">
               <h2 className="text-3xl font-bold text-left tracking-tight font-poppins  text-primary mx-auto ">{heading}</h2>
        </div>
    )
}