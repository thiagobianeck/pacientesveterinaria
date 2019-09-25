import React, { Component } from 'react';
import './bootstrap.min.css';

import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component{

  state = {
    consultas: []
  };

  /**
   * Quando a aplicação carrega
   */
  componentDidMount() {
    const consultasLS = localStorage.getItem('consultas');
    if (consultasLS) {
      this.setState({
        consultas : JSON.parse(consultasLS)
      })
    }
  }

  /**
   * Quando eliminamos ou adicionamos uma nova consulta
   * @param prevProps
   * @param prevState
   * @param snapshot
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    localStorage.setItem('consultas', JSON.stringify(this.state.consultas));
  }

  /**
   * Elimina uma consulta
   * @param id
   */
  eliminarConsulta = (id) => {
    const consultaAtuais = [...this.state.consultas];
    const consultas = consultaAtuais.filter((consulta) => consulta.id !== id);
    this.setState({
      consultas
    })
  }

  /**
   * Cria uma nova consulta
   * @param dados
   */
  crearNuevaCita = (dados) => {
    // copiar o state atual
    const consultas = [...this.state.consultas, dados];
    // adicionar o novo state
    this.setState({ consultas })
  }

  /**
   *
   * @returns {*}
   */
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
              <ListaCitas
                  consultas={this.state.consultas}
                  eliminarConsulta={this.eliminarConsulta}
              />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
