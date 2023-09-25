
import { useState } from 'react';
import './App.css';
import Header_RC from './Components/header_C/Header';
import Formulario from './Components/Formulario/Formulario';
import MiOrg from './Components/MiOrg';
import Equipos from './Components/Equipos';
import Footer from './Components/Footer';
import { v4 as uuid } from "uuid";
import hexToRgba from 'hex-to-rgba';

function App() {

  const [formView, switchView]=useState(false);    
  const [colaboradores, actualizarColaboradores] =useState([
    {
      id: uuid(),
      nombre:"mauro",
      puesto:"j",
      foto:"https://github.com/maurocas88.png",
      equipo:"Programación"
    },    
    {
      id: uuid(),
      nombre:"jose",
      puesto:"j",
      foto:"https://github.com/JoseDarioGonzalezCha.png",
      equipo:"Mobile"

    },    
    {
      id: uuid(),
      nombre:"jose",
      puesto:"j",
      foto:"https://github.com/JoseDarioGonzalezCha.png",
      equipo:"Programación"

    },    
    {
      id: uuid(),
      nombre:"Jeanmarie",
      puesto:"j",
      foto:"https://github.com/JeanmarieAluraLatam.png",
      equipo:"UX y Diseño"
    },   
    {
      id: uuid(),
      nombre:"Cristian",
      puesto:"",
      foto:"https://github.com/christianpva.png",
      equipo:"Devops"
    },    
    {
      id: uuid(),
      nombre:"Harland",
      puesto:"j",
      foto:"https://github.com/harlandlohora.png",
      equipo:"Front End"
    },        


  ]);
    //Lista equipos
  const [equipos,actualizarEquipos] = useState([
      {
        id: uuid(),
        titulo:"Programación",
        colorPrimario:"#57C278",
        colorSecundario:"#D9F7E9",
      },
      {
        id: uuid(),
        titulo:"Front End",
        colorPrimario:"#82CFFA",
        colorSecundario:"#E8F8FF",
      },
      {
        id: uuid(),
        titulo: "Data Science",
        colorPrimario:"#A6D157",
        colorSecundario:"#F0F8E2",
      },
      {
        id: uuid(),
        titulo:"Devops",
        colorPrimario:"#E06B69",
        colorSecundario:"#FDE7E8",
      },
      {
        id: uuid(),
        titulo:"UX y Diseño",
        colorPrimario:"#D8E6BF",
        colorSecundario:"#FAE9F5",
      },
      {
        id: uuid(),
        titulo:"Móvil",
        colorPrimario:"#FFBA05",
        colorSecundario:"#FFF5D9",
      },
      {
        id: uuid(),
        titulo:"Innovación y Gestión",
        colorPrimario:"#FFBA29",
        colorSecundario:"#FFEEDF",
      }        
    ]
  );
  

  const cambiarMostrar = ()=>{
      switchView(!formView);
  }

  //Borrar colaborador
  const borrarColaborador = (idBorrar)=>{
      const borrado=colaboradores.filter((colaboradorB) => colaboradorB.id!==idBorrar);
      actualizarColaboradores(borrado);
    }
  

  //Registrar Colaborador
  const registrarColaborador= (colaborador)=>{
    // console.log("Nuevo colaborador ", colaborador)
    actualizarColaboradores([...colaboradores,colaborador]);

  }

  //Cambiar Color
  const cambiarColor = (idEq, colorNuevo)=>{
    const equiposActualizados = equipos.map( (equipo)=> { 
      if(equipo.id===idEq){
        equipo.colorPrimario = colorNuevo;
        equipo.colorSecundario = hexToRgba(colorNuevo,0.25);
      };
      return equipo;
    })
    actualizarEquipos(equiposActualizados);
  }

  //Agregar nuevos equipos
  const agregarEquipos = (nuevoEquipo) => {
    const equipoagregado= [...equipos,nuevoEquipo];
    actualizarEquipos(equipoagregado);

  }

  return (
    <div>
      <Header_RC/>
      {
        formView && <Formulario 
        equipos={equipos.map((equipo)=>equipo.titulo)}
        registrarColaborador={registrarColaborador}
        agregarEquipos={agregarEquipos}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map( (equipo)=> <Equipos 
          key={equipo.titulo} 
          datos={equipo} 
          colaboradores={colaboradores.filter(colaborador =>colaborador.equipo===equipo.titulo)}
          borrarColaborador={borrarColaborador}
          cambiarColor={cambiarColor}

        />)
      }

      <Footer />

      </div>
  );
}

export default App;
