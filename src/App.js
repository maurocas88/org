
import { useState } from 'react';
import './App.css';
import Header_RC from './Components/header_C/Header';
import Formulario from './Components/Formulario/Formulario';
import MiOrg from './Components/MiOrg';
import Equipos from './Components/Equipos';
import Footer from './Components/Footer';

function App() {

  const [formView, switchView]=useState(false);    
  const [colaboradores, actualizarColaboradores] =useState([]);
  
  const cambiarMostrar = ()=>{
      switchView(!formView);
  }


  //Registrar Colaborador
  const registrarColaborador= (colaborador)=>{
    console.log("Nuevo colaborador ", colaborador)
    actualizarColaboradores([...colaboradores,colaborador]);

  }


  //Lista equipos
    const equipos=[
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
        />)
      }

      <Footer />

      </div>
  );
}

export default App;
