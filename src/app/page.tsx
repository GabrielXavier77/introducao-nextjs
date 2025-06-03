import Welcome from "@/components/Welcome";
import NavBar from "@/components/NavBar";
import Card from "@/components/Card";

export default function Home() {
    return (
        <div>
            <NavBar
                links={[
                    {label: 'Início', href: '/'},
                    {label: 'Produtos', href: '/products'},
                    {label: 'Sobre Nós', href: '/about'}
                ]}
            />
            <div className="flex flex-wrap justify-center">
                <h1 className="mt-4 w-full font-bold text-2xl text-center">Recursos Principais</h1>
                <Card
                    image={{src: '/nextjs-logo.svg', alt: 'next-logo'}}
                    title="Componentização"
                    subTitle="Criação de componentes reutilizaveis usando Next.js"
                />
                <Card
                    image={{src: '/nextjs-logo.svg', alt: 'next-logo'}}
                    title="Componentização"
                    subTitle="Criação de componentes reutilizaveis usando Next.js"
                />
                <Card
                    image={{src: '/nextjs-logo.svg', alt: 'next-logo'}}
                    title="Componentização"
                    subTitle="Criação de componentes reutilizaveis usando Next.js"
                />
            </div>
            <Welcome/>
        </div>
    );
}
