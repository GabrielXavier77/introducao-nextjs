import Welcome from "@/components/Welcome";
import NavBar from "@/components/NavBar";
import ImageCard from "@/components/ImageCard";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col ">
      <NavBar
        links={[
          { label: "Início", href: "/" },
          { label: "Produtos", href: "/products" },
          { label: "Sobre Nós", href: "/about" },
        ]}
      />
      <div className="p-4">
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
    </div>
  );
}
