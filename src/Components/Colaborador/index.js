
import "./Colaborador.css"

const Colaborador = (props) => {

    const { nombre, puesto, foto, equipo } = props.datos;
    const {colorPrimario} =props
 
    return <div className="colaborador">
        <div className= "encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>    
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}
// https://github.com/maurocas88.png
// https://github.com/harlandlohora.png
// https://github.com/JeanmarieAluraLatam.png
// https://github.com/christianpva.png
// https://github.com/JoseDarioGonzalezCha.png
export default Colaborador