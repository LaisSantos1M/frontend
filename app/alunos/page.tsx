import AlunoItem from "@/components/AlunoItem";
import { getAlunos } from "./actions";
import Link from "next/link";

export default async function AlunosPage() {
    const alunos = await getAlunos();

    return (
        <div className="h-screen w-screens font-bold flex flex-col items-center">
            <div >
                
                <h1 className="mt-10 mb-20 text-5xl font-black underline decoration-light-blue-700" >
                    Lista de alunos</h1>
                <br />
            </div>

            <div className="w-50 h-50 bg-white rounded-md shadow-md shadow-white text-black p-2 overflow-auto"  >
                <ul className=" flex flex-col gap-2 items-center " >
                    {alunos.map(aluno => (
                        <AlunoItem key={aluno.id} nome={aluno.nome} id={aluno.id}/>
                    ))}

                </ul>
            </div>

            <Link href="/aluno/cadastro" className="px-5 py-2 bg-white text-black mt-5 rounded-lg" >
            Cadastrar alunos
            </Link>
        </div>
    )

}