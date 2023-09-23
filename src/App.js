
import { useState } from 'react';
import './App.css';
import Header_RC from './Components/header_C/Header';
import Formulario from './Components/Formulario/Formulario';
import MiOrg from './Components/MiOrg';
import Equipos from './Components/Equipos';
import Footer from './Components/Footer';

function App() {

  const [formView, switchView]=useState(false);    
  const [colaboradores, actualizarColaboradores] =useState([
    {
      nombre:"mauro",
      puesto:"j",
      foto:"https://github.com/maurocas88.png",
      equipo:"Programación"
    },    
    {
      nombre:"jose",
      puesto:"j",
      foto:"https://github.com/JoseDarioGonzalezCha.png",
      equipo:"Mobile"

    },    
    {
      nombre:"jose",
      puesto:"j",
      foto:"https://github.com/JoseDarioGonzalezCha.png",
      equipo:"Programación"

    },    
    {
      nombre:"Jeanmarie",
      puesto:"j",
      foto:"https://github.com/JeanmarieAluraLatam.png",
      equipo:"UX y Diseño"
    },   
    {
      nombre:"Cristian",
      puesto:"",
      foto:"https://github.com/christianpva.png",
      equipo:"Devops"
    },    
    {
      nombre:"Harland",
      puesto:"j",
      foto:"https://github.com/harlandlohora.png",
      equipo:"Front End"
    },        


  ]);
    //Lista equipos
  const [equipos,actualizarEquipos] = useState([
      {
        titulo:"Programación",
        colorPrimario:"#57C278",
        colorSecundario:"#D9F7E9",
      },
      {
        titulo:"Front End",
        colorPrimario:"#82CFFA",
        colorSecundario:"#E8F8FF",
      },
      {
        titulo: "Data Science",
        colorPrimario:"#A6D157",
        colorSecundario:"#F0F8E2",
      },
      {
        titulo:"Devops",
        colorPrimario:"#E06B69",
        colorSecundario:"#FDE7E8",
      },
      {
        titulo:"UX y Diseño",
        colorPrimario:"#D8E6BF",
        colorSecundario:"#FAE9F5",
      },
      {
        titulo:"Móvil",
        colorPrimario:"#FFBA05",
        colorSecundario:"#FFF5D9",
      },
      {
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
  const borrarColaborador = (borraColaborador)=>{
      const borrado=colaboradores.filter(colaboradorB => colaboradorB.nombre!=borraColaborador);
      actualizarColaboradores(borrado);
    }
  

  //Registrar Colaborador
  const registrarColaborador= (colaborador)=>{
    // console.log("Nuevo colaborador ", colaborador)
    actualizarColaboradores([...colaboradores,colaborador]);

  }

  //Cambiar Color
  const cambiarColor = (tituloEq, colorNuevo)=>{
    const equiposActualizados = equipos.map( (equipo)=> { 
      if(equipo.titulo===tituloEq){equipo.colorSecundario = colorNuevo;};
      return equipo;
    })
    actualizarEquipos(equiposActualizados);
  }


  return (
    <div>
      <Header_RC/>
      {
        formView && <Formulario 
        equipos={equipos.map((equipo)=>equipo.titulo)}
        registrarColaborador={registrarColaborador}
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
