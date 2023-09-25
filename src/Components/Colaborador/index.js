
import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {

    const { nombre, puesto, foto,id,fav } = props.datos;
    const {colorPrimario, borrarColaborador,like} = props
 

    return <div className="colaborador">
        <AiFillCloseCircle onClick={() => borrarColaborador(id)} className="eliminar"/>
        <div className= "encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>    
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <AiFillHeart color="red" onClick={()=>like(id)}/> : <AiOutlineHeart onClick={()=>like(id)}/>}
        </div>
    </div>
}
// https://github.com/maurocas88.png
// https://github.com/harlandlohora.png
// https://github.com/JeanmarieAluraLatam.png
// https://github.com/christianpva.png
// https://github.com/JoseDarioGonzalezCha.png
export default Colaborador