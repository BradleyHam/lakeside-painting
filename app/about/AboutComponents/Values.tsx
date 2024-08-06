import Image from 'next/image'
import Value from './Value'
import { IconBase } from 'react-icons'
import { SiTrustpilot } from 'react-icons/si'
import { PiCubeTransparentBold } from 'react-icons/pi'
import { FaBookOpen, FaHandshakeSimple } from 'react-icons/fa6'

const iconSize = 30;


const values = [
    {   
        value: 'Integrity',
        description: 'We uphold the highest ethical standards in all our actions. Our word is our bond, ensuring transparency and honesty in every interaction.',
        icon: <SiTrustpilot color='#C18C5D' size={iconSize}/>
    },
    {
        value: 'Quality',
        description: 'We pursue excellence relentlessly. From concept to delivery, we invest our expertise to exceed expectations and set new industry benchmarks.',
        icon: <FaBookOpen color='#C18C5D' size={28}/>
    },
    {
        value: 'Reliability',
        description: 'You can count on us, always. We deliver on our promises consistently, meeting deadlines even in the face of challenges.',
        icon: <FaHandshakeSimple color='#C18C5D' size={iconSize}/>
    },
    {
        value: 'Trust',
        description: 'We build lasting relationships on mutual respect and dependability. Our clients can rely on our discretion and commitment to their success.',
        icon: <SiTrustpilot color='#C18C5D' size={30}/>
    }
]
export default function Values(){
    return(
        <div className="bg-gray-100">
            <div className="flex flex-col items-center px-5 container mx-auto py-[80px] ">
                <h2 className="text-2xl font-bold text-brand-primary tracking-tighter">Our values</h2>
                <div className="values flex flex-col items-stretch  pt-12 w-full lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
                   { values.map((value, index) => <Value key={index} value={value.value} description={value.description} icon={value.icon}/>) }
              
                </div>
            </div>
        </div>
    )
}