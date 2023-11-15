import React from 'react'
import './Licons.css'
import {motion, useScroll} from 'framer-motion'

const Licons = ({reference}) => {

    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset: ['center end', 'center center']
        }
    )

  return (
    <figure className='icons'>
        <svg width='75' height='75' viewBox='0 0 100 100'>
            <circle cx='75' cy='50' r='20' className='circle1'/>
            <motion.circle cx='75' cy='50' r='20' className='circle2'
                style={{
                    pathLength : scrollYProgress
                }}
            />
            <circle cx='75' cy='50' r='10' className='circle3'/>
        </svg>
    </figure>
  )
}

export default Licons