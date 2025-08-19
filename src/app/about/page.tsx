import Calculadora from "@/components/Calculadora"
import NavBar from "@/components/NavBar"

export default function About() {
    return (
        <div className="flex flex-col justify-center items-center">
            <NavBar
                links={[
                    {label: 'Início', href: '/'},
                    {label: 'Produtos', href: '/products'},
                    {label: 'Sobre Nós', href: '/about'}
                ]}
            />
            <h1>Sobre Nós</h1>
            <p>Informações sobre a empresa...</p>
            <div className="p-4 w-[35%]">
                <Calculadora/>
            </div>
        </div>
    )
}