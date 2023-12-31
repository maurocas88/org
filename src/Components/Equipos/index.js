import Colaborador from "../Colaborador";
import "./Equipos.css"

const Equipos = (props)=> {

    //Destructuracion
    const{titulo, colorPrimario, colorSecundario,id}=props.datos;
    const estiloTitulo = {borderColor: colorPrimario};
    const {colaboradores, borrarColaborador, cambiarColor,like} = props;

    return <>
        { 
            colaboradores.length > 0 &&
            <section className="equipo" style={{backgroundColor: colorSecundario}}>
                <input 
                    type="color"
                    className="colorFondo"
                    value={colorPrimario}
                    onChange={(evento)=>{cambiarColor(id, evento.target.value)}}
                    
                />  
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                    colaboradores.map((colaborador,index) => <Colaborador 
                    colorPrimario={colorPrimario} 
                    datos={colaborador} 
                    key={index}
                    borrarColaborador={borrarColaborador}
                    like={like}
                    />)
                    }

                </div>
            </section>
        }
    </>
}

export default Equipos

