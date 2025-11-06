import React from 'react'
import { CourseFrame } from './CourseFrame'
import Image from 'next/image'

interface CourseProps {
   colorHex: string;
   courseTitle: string;
   courseImageUrl: string;
}

export const Course = ({colorHex,courseImageUrl,courseTitle}:CourseProps) => {
   return (
      <div className="relative w-[310px] my-5">
         <CourseFrame colorHex={colorHex} />
         <div className=" w-full h-full text-white py-6"> 
            <Image 
            src={courseImageUrl}
            width={305}
            height={0o0}
            alt=""
            />
         <div className=" w-full h-fit flex flex-col justify-center items-center gap-4">
            <h2 className={`tracking-widest font-bold text-2xl text-center max-w-[275px]`}>{courseTitle.toLocaleUpperCase()}</h2>
            <p style={{ backgroundColor: colorHex }}  className="px-6 py-2 rounded-br-2xl cursor-pointer hover:scale-90 text-black font-bold">Adquirir Libro</p>
         </div>

         </div>

      </div>
   )
}
