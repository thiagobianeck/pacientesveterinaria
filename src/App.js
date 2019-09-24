import React, { Component } from 'react';
import './bootstrap.min.css';

import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component{

  state = {
    consultas: []
  };

  crearNuevaCita = (dados) => {
    // copiar o state atual
    const consultas = [...this.state.consultas, dados];
    // adicionar o novo state
    this.setState({ consultas })
  }

  render() {
    return (
        <div className='container'>
          <Header
              titulo='Administrador Pacientes Veterinária'
          />
          <div className="row">
            <div className="col-md-10 mx-auto">
              <NuevaCita crearNuevaCita={this.crearNuevaCita}/>
            </div>
            <div className="mt-5 col-md-10 mx-auto">
              <ListaCitas consultas={this.state.consultas}/>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
