import { Course } from "@/src/components/Course";
import { Header } from "@/src/components/Header";
import { Section } from "@/src/components/Section";
import { Root } from "@/src/types";
import { sectionsOptions } from "@/src/utils/data";
import { httpRequest } from "@/src/utils/http-request";
import Image from "next/image";
/* import { SectionButton } from '../src/components/SectionFrame'; */

export default async function Home() {

  const info:Root = await httpRequest('https://api.digitalcollege.edu.pe/api/versioncurso-usuarios/getByUserId', process.env.NEXT_BEARER_TOKEN);

  return (
    <div className="bg-gray-950 flex">
      <div className="h-screen bg-gray-700 w-60 fixed flex flex-col items-center py-10">
        <div>

        </div>
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
        <h3 className="text-sky-400 font-semibold my-2">David Urbano</h3>
        <h4>Estudiante</h4>
        <div>
          <nav className=" w-60 flex justify-center py-10">
            <ul className="flex flex-col items-center gap-5 w-full">

                <li className="border-l-2 w-full border-amber-400 flex justify-center">
                  <div className="size-16 bg-amber-400">

                  </div>
                </li>
              
                {
                  Array.from({ length: 6 }).map((_, index) => (
                    <li key={index} className="w-full flex justify-center">
                      <div  className="border-amber-400 border size-16">

                      </div>
                     </li>
                  ))
                }
             
            </ul>
          </nav>
        </div>
      </div>
      <div className="w-full min-h-screen pl-60">
        <Header />
        <div className="flex justify-center items-center">
          {
            sectionsOptions.map((section) => (
              <div key={section.title} className="my-10 flex justify-center">
                <Section title={section.title} description={section.description} hexColor={section.hexColor} />
              </div>
            ))
          }
        </div>
        <div>
          <div className="flex flex-wrap max-w-340 justify-start gap-7 mx-auto">
            {
              info.map((course) => {
                return (
                  <Course 
                    key={course.id} 
                    colorHex={course.versioncurso.curso.colores.primary} 
                    courseTitle={course.versioncurso.curso.nombre} 
                    courseImageUrl={course.versioncurso.curso.urlPortada}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
