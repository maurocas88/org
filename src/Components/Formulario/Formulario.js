import { useState } from "react"
import "./Formulario.css"
import Campostexto from "../CamposTexto/CamposTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props)=>{

    const envioDeDatos=(e)=>{
        e.preventDefault();
//le Damos uso a la funcionalidad de estados armando un objeto que podemos enviar:
    const datosAEnviar ={
        Nombre,
        Puesto,
        Foto,
        equipo
    }        
    console.log (datosAEnviar);
    }

    const [Nombre,setNombre] = useState("");
    const [Puesto,setPuesto] = useState("");
    const [Foto,setFoto] = useState("");
    const [equipo,setEquipo] = useState ("");
  
    return <section className="formulario">
        <form onSubmit={envioDeDatos}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campostexto 
                titulo="Nombre" 
                placeholder="Ingresar Nombre" 
                required 
                valor={Nombre} 
                changeValor={setNombre}
            />
            <Campostexto 
                titulo="Puesto" 
                placeholder="Ingresar Puesto" 
                required
                valor={Puesto} 
                changeValor={setPuesto}
            />

            <Campostexto 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={Foto} 
                changeValor={setFoto}
            />

            <ListaOpciones 
                equipos={props.equipos}
                valor={equipo} 
                setEquipo = {setEquipo} 
            />
            <Boton texto="Crear"/>      {/* Esto pasa el dato mediante props.. => props.texto  */}
            {/* sin embargo se puede hacer con props.children haciendo: */}
            {/* <Boton>texto Crear</Boton>, el dato se saca de props.children */}
        </form>
    </section>
}

export default Formulario