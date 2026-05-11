"use client";

import { useParams, useRouter } from "next/navigation";
import { SubmitEvent, useEffect, useState } from "react";
import { getCurso, updateCurso } from "../actions";
import { Curso } from "@/interfaces/cursos";
export default function CursoPage() {
    const { id } = useParams();
    const [curso, setCurso] = useState({} as Curso);
    const router = useRouter();

    useEffect(() => {
        getCurso(Number(id)).then(response => setCurso(response));
    }, [id]);

    function handleChange(value: string | number, key: keyof Curso) {
        setCurso(oldState => ({ ...oldState, [key]: value }))

    }

    async function handleUpdate(e: SubmitEvent) { 
        e.preventDefault();
        const response = await updateCurso(Number(id), curso);

        if (response) {
            alert(response);
            return;
        }

        router.refresh();
        router.push(`/curso/${id}`);
    }


    return (
        <div className="h-screen w-screens font-bold flex flex-col items-center">
            <form className=" items-center text-red-900 w-70 h-40 bg-white rounded-md shadow-md shadow-white p-2 overflow-auto"
                onSubmit={handleUpdate}
            >

                <div>
                    nome:
                    <input value={curso.nome} className="bg-red-200 flex border" onChange={(e) => handleChange(e.target.value, "nome")} />
                </div>

                <div>
                    cargaHoraria:
                    <input value={curso.cargaHoraria}
                        className="bg-red-200 flex border"
                        type="number"
                        onChange={(e) => handleChange(Number(e.target.value), "cargaHoraria")} />

                </div>

                <div>
                    professor:
                    <input value={curso.professor} className="bg-red-200 flex border" onChange={(e) => handleChange(e.target.value, "professor")} />

                </div>

                <div>
                    descricao:
                    <input value={curso.descricao} className="bg-red-200 flex border" onChange={(e) => handleChange(e.target.value, "descricao")} />
                </div>

                <button className="bg-red-400 text-white rounded-x1 px-10 py-2  cursor-pointer hover:opacity-80">
                    Editar
                </button>
            </form>
        </div>


    )
}