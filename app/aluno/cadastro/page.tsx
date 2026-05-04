"use client"
import { SubmitEvent, useState } from "react";
import { createAluno } from "./actions";
import { useRouter } from "next/navigation";

export default function AlunoCadastroPage() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter();

async function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        const response = await createAluno({
            nome,
            idade: Number(idade),
            cpf: Number(cpf),
            email
        });

        if (!response) {
            setNome("");
            setIdade("");
            setCpf("");
            setEmail("");
            router.push("/alunos");
            return;
        }

        alert(response);
    }


    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <form className="px-10 py-5 flex flex-col gap-2 bg-pink-950   rounded-lg"
                onSubmit={handleSubmit}
            >
                <input
                    className="border border-white text-white pl-1"
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    className="border border-white text-white pl-1"
                    type="number"
                    placeholder="Idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                />
                <input
                    className="border border-white text-white pl-1"
                    type="number"
                    placeholder="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
                <input
                    className="border border-white text-white pl-1"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="bg-white text-black py-2 rounded-lg " type="submit">Cadastrar</button>

            </form>
        </div>
    )

}
