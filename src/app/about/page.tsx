import NavBar from "@/components/NavBar"

export default function About() {
    return (
        <div>
            <NavBar
                links={[
                    {label: 'Início', href: '/'},
                    {label: 'Produtos', href: '/products'},
                    {label: 'Sobre Nós', href: '/about'}
                ]}
            />
            <h1>Sobre Nós</h1>
            <p>Informações sobre a empresa...</p>
        </div>
    )
}