import CursoItem from "@/components/CursoItem";
import { getCursos } from "./actions";


export default async function CursosPage() {
    const cursos = await getCursos();

    return (
        <div className="h-screen w-screens font-bold flex flex-col items-center">
            <div >

                <h1 className="mt-10 mb-20 text-5xl font-black underline decoration-light-blue-700" >
                    Lista de cursos</h1>
                <br />
            </div>

            <div className="w-50 h-50 bg-white rounded-md shadow-md shadow-white text-black p-2 overflow-auto"  >
                <ul className=" flex flex-col gap-2 items-center " >
                    {cursos.map(curso => (
                        <CursoItem key={curso.id} nome={curso.nome} id={curso.id} />
                    ))}

                </ul>
            </div>


        </div>
    )
}