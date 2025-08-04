import Welcome from "@/components/Welcome";
import NavBar from "@/components/NavBar";
import ImageCard from "@/components/ImageCard";
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
              <ImageCard
                title="NextJS"
                description="Next.js é um framework para aplicações web construídas 
                com React que facilita o desenvolvimento de sites rápidos e otimizados.
                Ele oferece funcionalidades como renderização do lado do servidor 
                (SSR), geração de páginas estáticas (SSG), roteamento automático e 
                suporte a APIs. É ideal para criar desde blogs simples até aplicações 
                web complexas, com foco em performance, SEO e experiência do desenvolvedor."
                imageUrl="nextjs-logo.svg"
              />
            </div>
            <Welcome/>
        </div>
    );
}
