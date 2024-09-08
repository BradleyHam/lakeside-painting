export default function TopBanner({headingSmall, headingLarge}: {headingSmall: string, headingLarge: string}) {
    return (
        <div className="top-banner mt-[var(--navbar-height-mobile)] lg:mt-[var(--navbar-height-desktop)] relative flex flex-col justify-center items-center lg:items-center px-5 py-12 pt-14 px-side-spacing">
                <h1 className='text-xs uppercase tracking-widest  text-primary font-medium mb-2'>{headingSmall}</h1>
                <h2 className='text-lg font-semibold text-center '>{headingLarge} </h2>
        </div>
    )
}