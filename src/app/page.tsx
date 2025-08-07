import NavBar from "@/components/NavBar";
import ImageCard from "@/components/ImageCard";
import Card from "@/components/Card";
import Counter from "@/components/Counter";
import { ImageCardProps } from "@/components/ImageCard";
import LikeButton from "@/components/LikeButton";

export default function Home() {
  const ImageCardContents: ImageCardProps[] = [
    {
      title: "1984 - George Orwell",
      description:
        "Um romance distópico que retrata um futuro totalitário onde o governo controla todos os aspectos da vida e até mesmo os pensamentos das pessoas.",
      imageUrl: "https://m.media-amazon.com/images/I/61NAx5pd6XL._SY522_.jpg",
      category: "Livro",
    },
    {
      title: "Cem Anos de Solidão – Gabriel García Márquez",
      description:
        "A saga da família Buendía na mítica cidade de Macondo, misturando realismo mágico com história e política da América Latina.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/pt/e/ed/Cem_anos_de_solid%C3%A3o.jpg",
      category: "Livro",
    },
    {
      title: "The Legend of Zelda: Breath of the Wild",
      description:
        "Um jogo de aventura em mundo aberto onde o herói Link explora ruínas antigas, resolve enigmas e enfrenta inimigos para salvar o reino de Hyrule.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/pt/0/0f/Legend_of_Zelda_Breath_of_the_Wild_capa.png",
      category: "Jogo",
    },
    {
      title: "The Last of Us",
      description:
        "Um drama pós-apocalíptico em que Joel e Ellie tentam sobreviver em um mundo devastado por uma pandemia fúngica, enfrentando perigos humanos e não-humanos.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/pt/b/be/The_Last_of_Us_capa.png",
      category: "Jogo",
    },
    {
      title: "A Origem (Inception) – Christopher Nolan",
      description:
        "Um thriller de ficção científica sobre ladrões que invadem os sonhos das pessoas para plantar ou extrair ideias.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/pt/8/84/AOrigemPoster.jpg",
      category: "Filme",
    },
    {
      title: "O Fabuloso Destino de Amélie Poulain – Jean-Pierre Jeunet",
      description:
        "Uma jovem sonhadora em Paris decide melhorar a vida das pessoas ao seu redor de maneiras sutis e encantadoras.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/pt/a/a0/Le_fabuleux_destin_d%27Am%C3%A9lie_Poulain.jpg",
      category: "Filme",
    },
  ];

  return (
    <div>
      <NavBar
        links={[
          { label: "Início", href: "/" },
          { label: "Produtos", href: "/products" },
          { label: "Sobre Nós", href: "/about" },
          { label: "Comentarios", href: "/comments" },
        ]}
      />
      <div className="flex flex-wrap justify-center p-4 gap-4">
        <h1 className="mt-4 w-full font-bold text-2xl text-center">
          Recursos Principais
        </h1>
        <Card
          image={{ src: "/nextjs-logo.svg", alt: "next-logo" }}
          title="Componentização"
          subTitle="Criação de componentes reutilizaveis usando Next.js"
        />
        <Card
          image={{ src: "/nextjs-logo.svg", alt: "next-logo" }}
          title="Componentização"
          subTitle="Criação de componentes reutilizaveis usando Next.js"
        />
        <Card
          image={{ src: "/nextjs-logo.svg", alt: "next-logo" }}
          title="Componentização"
          subTitle="Criação de componentes reutilizaveis usando Next.js"
        />
        {ImageCardContents.map((card, index) => (
          <ImageCard
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            category={card.category}
            key={index}
          />
        ))}
      </div>
      <div className="p-4 w-full flex justify-center">
        <Counter initial={53} />
      </div>
      <div className="p-4 w-full flex justify-center">
        <LikeButton/>
      </div>
    </div>
  );
}
