import "./Formulario.css"
import Campostexto from "../CamposTexto/CamposTexto"
import ListaOpciones from "../ListaOpciones"

const Formulario = ()=>{
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campostexto titulo="Nombre" placeholder="Ingresar Nombre"/>
            <Campostexto titulo="Puesto" placeholder="Ingresar Puesto"/>
            <Campostexto titulo="Foto" placeholder="Ingresar enlace de foto"/>
            <ListaOpciones />
        </form>
    </section>
}

export default Formulario