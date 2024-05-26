import { Navegation } from "./navegation";
import { Usuarios } from "./usuario";
import  NavLinks from "./nav-link"; // Assuming the file path and name are correct

export function Sidebar() {
    return (
        <div className="grid grid-cols-[250px_1fr]">
            <aside className="flex flex-col min-h-screen bg-gray-900 max-w-full">
                <header className="content text-center bg-gray-100 p-4 text-black font-bold">
                    <span className="hidden sm:inline-block">SALUD AMINISTRATIVA</span>
                    <span className="sm:hidden">SA</span>
                    <span className="text-green-500 text-2xl">
                        +
                    </span>
                </header>
                <main className="content bg-gray-900 flex-grow">
                    <Navegation />
                    <NavLinks />
                </main>
                <Usuarios />
                
                <footer className="content text-center">Salud Admisnistrativa S.A.S. ©</footer>
            </aside>
        </div>
    )
}
