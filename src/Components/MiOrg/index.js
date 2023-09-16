import "./MiOrg.css"

const MiOrg=(props)=>{
            // Hook:   const [nombreVariable, funcionQueActualiza] = useState (valorInicial)

return <section className="orgSection">
    <h3 className="title">Mi Organización</h3>
    <img src="/img/Add CardReact.ico" alt="add" onClick={props.cambiarMostrar}></img>
    {/* <img src="/img/add.png" alt="add"></img> */}
    </section>
}

export default MiOrg