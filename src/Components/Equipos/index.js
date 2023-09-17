import Colaborador from "../Colaborador";
import "./Equipos.css"

const Equipos = (props)=> {

    //Destructuracion
    const{titulo, colorPrimario, colorSecundario}=props.datos;
    const estiloTitulo = {borderColor: colorPrimario}

    return <section className="equipo" style={{backgroundColor: colorSecundario}}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            <Colaborador />
            <Colaborador />
        </div>
    </section>
}

export default Equipos

