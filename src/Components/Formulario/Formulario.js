import { useState } from "react"
import "./Formulario.css"
import Campostexto from "../CamposTexto/CamposTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
import { v4 as uuid } from "uuid";
import hexToRgba from "hex-to-rgba";

const Formulario = (props)=>{

    const [nombre,setNombre] = useState("");
    const [puesto,setPuesto] = useState("");
    const [foto,setFoto] = useState("");
    const [equipo,setEquipo] = useState ("");
    const [nuevoEquipo,setnuevoEquipo] = useState ("");
    const [nuevoColor,setnuevoColor] = useState ("");
  
const {registrarColaborador,agregarEquipos}=props
// const id= uuid();
const envioDeDatos=(e)=>{
    e.preventDefault();
    //le Damos uso a la funcionalidad de estados armando un objeto que podemos enviar:
    const datosAEnviar ={
        id:uuid(),
        nombre,
        puesto,
        foto,
        equipo,
    }        
    registrarColaborador (datosAEnviar);
}
const envioNuevoEquipo=(e)=>{
    e.preventDefault();
    //le Damos uso a la funcionalidad de estados armando un objeto que podemos enviar:
    const equipoAEnviar ={
        id:uuid(),
        titulo:nuevoEquipo,
        colorPirmario: nuevoColor,
        colorSecundario: hexToRgba(nuevoColor,0.25)
    }        
    agregarEquipos (equipoAEnviar);
}


    return <section className="formulario">
        <form onSubmit={envioDeDatos}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campostexto 
                titulo="Nombre" 
                placeholder="Ingresar Nombre" 
                required 
                valor={nombre} 
                changeValor={setNombre}
            />
            <Campostexto 
                titulo="Puesto" 
                placeholder="Ingresar Puesto" 
                required
                valor={puesto} 
                changeValor={setPuesto}
            />

            <Campostexto 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto} 
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


        <form onSubmit={envioNuevoEquipo}>
            <h2>Crear un Nuevo Equipo</h2>
            <Campostexto 
                titulo="Equipo" 
                placeholder="Ingrese el nuevo equipo" 
                required 
                valor={nuevoEquipo} 
                changeValor={setnuevoEquipo}
            />
            
            <Campostexto 
                titulo="Color" 
                placeholder="Seleccionar Color" 
                className="textoNEquipo"
                required
                valor={nuevoColor} 
                changeValor={setnuevoColor}
            />
             <input 
                    type="color"
                    className="colorNEquipo"
                    value= {nuevoColor}
                    onChange={(evento)=>{setnuevoColor(evento.target.value)}}
                    
                /> 
            <Boton texto="Crear Equipo"/> 
        </form>

    </section>
}

export default Formulario