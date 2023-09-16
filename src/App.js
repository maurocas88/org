
import { useState } from 'react';
import './App.css';
import Header_RC from './Components/header_C/Header';
import Formulario from './Components/Formulario/Formulario';
import MiOrg from './Components/MiOrg';

function App() {

  const [formView, switchView]=useState(true);    
  
  const cambiarMostrar = ()=>{
    switchView(!formView);
  }

  return (
    <div>
      <Header_RC/>
      {formView && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
