import Image from 'next/image'

export const Header = () => {
  return (
      <div>
         <div className="relative w-fit mx-auto">
            <div className="absolute py-12 px-16 w-full h-[238px]">
            <div className=" w-full h-full text-black flex py-5 px-10 items-center">
               <div className="border-6 border-sky-400 border-double rounded-full">
                  <div className="size-24 relative bg-red-400 flex justify-center items-center overflow-hidden rounded-full ">
                     <Image
                        src={'/imagen_perfil.jpg'}
                        width={100}
                        height={0o0}
                        alt="image profile"
                     />
                  </div>
               </div>
               
               <div className="bg-amber-950/15 px-5 flex flex-col gap-3">
                  <span className="flex items-center gap-14">
                  <h3 className="text-sky-400 text-3xl">DAVID URBANO</h3>
                  <div className="border rounded-2xl border-sky-400 py-1 px-5 text-gray-400 text-sm">Nivel 3</div>
                  </span>
                  <p className="text-gray-400 text-base">ACADEMIA DC - CRISTOBAL + 10-000000</p>
                  <div className="bg-sky-800/50 w-120 h-1 rounded-xl">
                  <div className="bg-sky-400 w-1/5 h-full"></div>
                  </div>
               </div>
            </div>
            </div>
            <Image 
            src={'/marco_header/marco_header_1.svg'}
            alt="frame"
            width={1631}
            height={238}
            />
         </div>
      </div>
  )
}
