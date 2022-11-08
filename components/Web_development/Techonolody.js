import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {HiArrowRight} from'react-icons/hi'
import ReactPlayer from 'react-player'
export const Techonolody = () => {
   const[p1, setP1]=useState(false)
   const[p2, setP2]=useState(false)
   const[p3, setP3]=useState(false)
   const handlediv1=()=>{
    setP1(!p1);
    if(p2) setP2(!p2);
    if(p3) setP3(!p3);
}
const handlediv2=()=>{
    if(p1) setP1(!p1);
    if(p3) setP3(!p3);
    setP2(!p2);
}
const handlediv3=()=>{
    if(p1) setP1(!p1);
    if(p2) setP2(!p2);
    setP3(!p3);
}

    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
      if (typeof window !== "undefined") {
        setHasWindow(true);
      }
    }, []);
  return ( 
    <div className='w-full '>
        <div className='grid sm:grid-cols-2 '>
            <div className='flex flex-col bg-[#211e3b] p-8'>
                
                <h1 className='text-[#ffff] text-lg font-bold text-[40px] py-2 my-4 leading-10'>We Organize Our Production Process</h1>
                <div className='grid sm:grid-cols-3 gap-4 uppercase'>     
                  
                        <div onClick={handlediv1}   className='p-4 rounded-xl text-black text-center cursor-pointer bg-[#ffff] mx-2 my-8 shadow hover:scale-105 hover:text-[#ffff] hover:bg-[#43baff] ease-in duration-300 active:bg-[#43baff]'>
                            <p className='uppercase font-bold'>ANALYSIS</p>
                        </div>
          
             
                        <div  onClick={handlediv2} className='p-4 rounded-xl text-black text-center cursor-pointer bg-[#ffff] mx-2 my-8 shadow hover:scale-105 hover:text-[#ffff] hover:bg-[#43baff] ease-in duration-300 '>
                            <p className='uppercase font-bold'>DESIGN</p>
                        </div>
                   
                   
                        <div  onClick={handlediv3}  className='p-4 rounded-xl text-black text-center cursor-pointer bg-[#ffff] mx-2 my-8 shadow hover:scale-105 hover:text-[#ffff] hover:bg-[#43baff] ease-in duration-300 '>
                            <p className='upercase font-bold'>TESTING</p>
                        </div>
                     
                </div>
                <p  className= {p1 ? 'text-[#ffff] text-xl': 'hidden'}>Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate 
                their value through custom software development, product design,
                 QA and consultancy services. Our product design service lets you prototype, test and validate your ideas.</p>
                <p className={p2 ?'text-[#ffff] text-xl' : 'hidden'}>While integrating the security with the DevOps approach has always been of high demand, this requires a completely different range of processes and tools.
                 DevOps is already known to boast of an agile development methodology. Now when the inputs of the security experts I’ll be brought in a collaborative environment, the project will have an array
                  of effective security safeguards..</p>
                <p className={p3 ?'text-[#ffff] text-xl': 'hidden'}>In spite of disturbing the agile development process of the DevOps approach, the additional security inputs only enhance the safeguards and reliability
                 of the project. So, in a way, DevSecOps will only extend the benefits of a DevOps approach further with security inputs. DevOps is already known to boast of an agile development methodology.</p>
                <div className='flex flex-row my-10'>
                    <div >
                        <HiArrowRight color='#43bafc' size={30}></HiArrowRight>
                    </div>
                    <div className=' cursor-pointer'>
                        <Link href='#'>
                            <p className='uppercase text-[#43bafc] text-xl'>Learn more</p>
                        </Link>
                    </div>
                </div> 
            </div>
                { hasWindow&& <ReactPlayer url='https://www.youtube.com/watch?v=wWgIAphfn2U' width='full' height='550px' playing={true} controls={true}/> }
        </div>
    </div>
  )
}
export default Techonolody
