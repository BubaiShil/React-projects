import React from 'react'
import {motion} from 'framer-motion'

const Offer = () => {
    
    return (
        <div className='h-auto font-["Porlane"] '>
            <div className='text  border-b-2 border-black flex gap-5 items-center whitespace-nowrap '>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',repeat:Infinity,duration:11}} className='text-6xl  md:text-[17vw] leading-none'>Flash Sale: 50% Off on Trending Products!</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',repeat:Infinity,duration:11}} className='text-6xl md:text-[17vw] leading-none'>Flash Sale: 50% Off on Trending Products!</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',repeat:Infinity,duration:11}} className='text-6xl md:text-[17vw] leading-none'>Flash Sale: 50% Off on Trending Products!</motion.h1>
            </div>
        </div>
    )
}

export default Offer
