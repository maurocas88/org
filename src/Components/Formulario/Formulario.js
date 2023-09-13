import "./Formulario.css"
import Campostexto from "../CamposTexto/CamposTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = ()=>{
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campostexto titulo="Nombre" placeholder="Ingresar Nombre"/>
            <Campostexto titulo="Puesto" placeholder="Ingresar Puesto"/>
            <Campostexto titulo="Foto" placeholder="Ingresar enlace de foto"/>
            <ListaOpciones />
            <Boton texto="Crear"/>      {/* Esto pasa el dato mediante props.. => props.texto  */}
            {/* sin embargo se puede hacer con props.children haciendo: */}
            {/* <Boton>texto Crear</Boton>, el dato se saca de props.children */}
        </form>
    </section>
}

export default Formulario