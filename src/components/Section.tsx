import React from 'react'
import { SectionFrame } from './SectionFrame'

export const Section = ({title, description, hexColor}:{ title: string, description: string, hexColor: string }) => {
   return (
      <div className='w-fit relative'>
         <SectionFrame colorHex={hexColor} />
         <div className='absolute top-0 px-10 py-12 text-white w-full h-full'>
            <div className=' w-full h-full flex flex-col justify-center items-center gap-2'>
               <h2 style={{ color: hexColor }} className={`tracking-widest font-bold text-xl`}>{title.toLocaleUpperCase()}</h2>
               <p className='text-gray-400'>{description}</p>
            </div>
         </div>
      </div>
   )
}
