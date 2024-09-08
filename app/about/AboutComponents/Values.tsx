import Value from './Value'
import { SiTrustpilot } from 'react-icons/si'
import { FaBookOpen, FaHandshakeSimple } from 'react-icons/fa6'
import { FaLeaf } from 'react-icons/fa'

const iconSize = 30;


const values = [
    {   
        value: 'Quality',
        description: 'We use premium paints and materials, coupled with expert techniques, to deliver flawless finishes that stand the test of time.',
        icon: <FaBookOpen size={28}/>
    },
    {
        value: 'Integrity',
        description: 'Honesty and transparency are at the core of our business. We provide accurate quotes, stick to timelines, and communicate clearly throughout the project.',
        icon: <SiTrustpilot size={iconSize}/>
    },
    {
        value: 'Sustainability',
        description: 'We\'re committed to eco-friendly practices, using low-VOC paints and sustainable materials to minimize our environmental impact.',
        icon: <FaLeaf size={iconSize}/>
    },
    {
        value: 'Customer Focus',
        description: 'Your satisfaction is our priority. We listen to your needs, offer expert advice, and tailor our services to exceed your expectations.',
        icon: <FaHandshakeSimple size={iconSize}/>
    }
]
export default function Values(){
    return(
        <div className="">
            <div className="flex flex-col items-center px-5 container mx-auto py-[80px] ">
            <h4 className='text-xs uppercase tracking-widest text-primary font-medium mb-2'>Our Values</h4>
              <h2 className='text-base font-semibold mb-4'>What Drives Us</h2>
              
                <div className="values flex flex-col items-stretch  pt-12 w-full lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
                   { values.map((value, index) => <Value key={index} value={value.value} description={value.description} icon={value.icon}/>) }
           
                </div>
            </div>
        </div>
    )
}