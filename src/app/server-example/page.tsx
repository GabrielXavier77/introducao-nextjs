import ClientCounter from "@/components/ClientCounter"
import NavBar from "@/components/NavBar"

export default function ServerExample() {
    const data = 'dados muitos dados HHAAHAHAHAHA!!!!!!!'

    return (
        <div>
            <h1>Dados do Servidor</h1>
            <p>{data}</p>
            <ClientCounter/>
        </div>
    )
}