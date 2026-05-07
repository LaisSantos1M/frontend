"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
import { Curso } from "@/interfaces/cursos";

export async function getCursos() {
    try {
        const cookiesStore = await cookies();
        const token = cookiesStore.get("access_token")?.value;

        const response = await fetch("http://localhost:8080/cursos", {
            headers: {
                Authorization: `
                Bearer ${token}`,
            },
            next: { tags: ["listar"] },
        })

        if(response.status === 401){
            redirect("/login");
        }
        if(response.status === 200){
            const data = await response.json();
            return data as Curso[];
        }

        console.error(response);
        return[];

    } catch(e){
        console.error(e);
        return[]
    }
}

export async function deleteCurso(id:number) {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value;

    const response = await fetch(`http://localhost:8080/cursos/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    
        const data = await response.json();
    
        if (response.status === 200) {
            revalidateTag("listar", "max");
            return;
        }
    
        return data;
    
    
}

