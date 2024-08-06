import Image from 'next/image'
export default function About() {
    return(
        <div className="bg-white px-5  py-[80px] relative lg:flex lg:items-center lg:space-x-8">     
{/* 
        <div className="p-2 bg-gray-200 w-full"> 
            <div className='team-photo relative h-[400px] w-full'>
              <Image src='/images/placeholder.jpg' layout='fill' alt=''/>
            </div>
        </div> */}

        <div className='container mx-auto lg:max-w-[70%]'>
            <p className="  opacity-80 text-base lg:text-left">
                Welcome to Little Dog Decorating, your trusted local painters in the heart of Queenstown. We&apos;re not just about slapping paint on walls – we&apos;re about bringing your spaces to life with colors that speak to you. Our team has been brightening up homes and businesses around here for years, and we&apos;ve got the skills to tackle any job, big or small.
                <br />
                <br />
                We started this business because we love what we do, and it shows in our work. Whether you&apos;re looking to freshen up your living room, give your office a new look, or completely transform your space, we&apos;re here to help. We listen to what you want, offer our honest advice, and then roll up our sleeves to make it happen.
                <br />
                <br />
                At Little Dog, we&apos;re all about quality work, fair prices, and leaving your place cleaner than we found it. So if you&apos;re ready to see what a fresh coat of paint can do for your home or business, give us a shout. Let&apos;s work together to make your space look its absolute best.
            </p>
       </div>

    </div>
    )

}