
import "./CamposTexto.css"

const Campostexto = (props) => {

    const placeholderModificado=`${props.placeholder}...`
    const manejarCambio = (e)=> {
        props.changeValor(e.target.value);
    }
    return <div className="campo-texto">
        <label>{props.titulo}</label>

        <input 
        placeholder={placeholderModificado} 
        required= {props.required}
        onChange = {manejarCambio}
        value= {props.valor}
        />
    </div>
}


export default Campostexto 