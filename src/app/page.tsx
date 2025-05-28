import Welcome from "@/components/Welcome";
import NavBar from "@/components/NavBar";
export default function Home() {
    return (
        <div className="">
            <NavBar
                names={['Inicio', 'Contatos', 'Linkedln']}
                hrefs={['#', '#', 'linkedin']}
            />
            <Welcome/>
        </div>
    );
}
