import "./Formulario.css"
import Campostexto from "../CamposTexto/CamposTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = ()=>{

    const envioDeDatos=(e)=>{
        e.preventDefault();
    }

    return <section className="formulario">
        <form onSubmit={envioDeDatos}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campostexto titulo="Nombre" placeholder="Ingresar Nombre" required/>
            <Campostexto titulo="Puesto" placeholder="Ingresar Puesto" required/>
            <Campostexto titulo="Foto" placeholder="Ingresar enlace de foto" required/>
            <ListaOpciones />
            <Boton texto="Crear"/>      {/* Esto pasa el dato mediante props.. => props.texto  */}
            {/* sin embargo se puede hacer con props.children haciendo: */}
            {/* <Boton>texto Crear</Boton>, el dato se saca de props.children */}
        </form>
    </section>
}

export default Formulario