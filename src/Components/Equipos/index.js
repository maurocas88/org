import Colaborador from "../Colaborador";
import "./Equipos.css"

const Equipos = (props)=> {

    //Destructuracion
    const{titulo, colorPrimario, colorSecundario}=props.datos;
    const estiloTitulo = {borderColor: colorPrimario};
    const {colaboradores} = props;

    return <>
        { 
            colaboradores.length > 0 &&
            <section className="equipo" style={{backgroundColor: colorSecundario}}>
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                    colaboradores.map((colaborador,index) => <Colaborador colorPrimario={colorPrimario} datos={colaborador} key={index}/>)
                    }

                </div>
            </section>
        }
    </>
}

export default Equipos

