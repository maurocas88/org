
import { useState } from 'react';
import './App.css';
import Header_RC from './Components/header_C/Header';
import Formulario from './Components/Formulario/Formulario';
import MiOrg from './Components/MiOrg';
import Equipos from './Components/Equipos';

function App() {

  const [formView, switchView]=useState(false);    
  
  const cambiarMostrar = ()=>{
    switchView(!formView);
  }

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
      {formView && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map( (equipo,index)=> <Equipos key={index} datos={equipo}/>)
      }

      {/* <Equipos equipo="Programación"/>
      <Equipos equipo="Front End"/>
      <Equipos equipo="Data Science"/>
      <Equipos equipo="Devops"/>
      <Equipos equipo="UX y Diseño"/>
      <Equipos equipo="Móvil"/>
      <Equipos equipo="Innovación y Gestión"/> */}
      </div>
  );
}

export default App;
