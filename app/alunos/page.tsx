export default function AlunosPage() {
    return (
        <div className="h-screen w-screens font-bold flex flex-col items-center">
            <div >
                <h1 className="mt-10 mb-50 text-5xl font-bold underline decoration-light-blue-700" >Lista de alunos</h1>
                <br />
            </div>

            <div className="w-50 h-50 bg-white rounded-md shadow-md shadow-white text-black p-2 overflow-auto"  >
                <ul   className=" flex flex-col gap-2 items-center " >
                    <li className="underline decoration-pink-700 decoration-wavy">Aluno 1: Joana</li>
                    <li className="underline decoration-indigo-700 decoration-wavy">Aluno 2: Maria</li>
                    <li className="underline decoration-sky-700 decoration-wavy">Aluno 3: Pedro</li>
                    <li className="underline decoration-red-700 decoration-wavy">Aluno 4: João</li>
                    <li className="underline decoration-orange-700 decoration-wavy ">Aluno 5:Tiago</li>
                    <li className="underline decoration-green-700 decoration-wavy">Aluno 6:Denise</li>
                    <li className="underline decoration-blue-700 decoration-wavy">Aluno 7: Monica</li>
                    <li className=" line-through">Aluno 8:Carlos</li>
                </ul>
            </div>
        </div>
    )

}