import Welcome from "@/components/Welcome";
import NavBar from "@/components/NavBar";
export default function Home() {
    return (
        <div className="">
            <NavBar
                links={[
                    {label: 'Início', href: '/'},
                    {label: 'Produtos', href: '/products'},
                    {label: 'Sobre Nós', href: '/about'}
                ]}
            />
            <Welcome/>
        </div>
    );
}
