import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="w-screen h-15 flex justify-evenly bg-fuchsia-200 items-center text-black ">
        <Link  href="/">Home</Link> 
        <Link href="/alunos">Alunos</Link>
        <Link href="/cursos">Cursos</Link>
        <span>Sair</span>
    
      </div>
    </div>
  );
}
