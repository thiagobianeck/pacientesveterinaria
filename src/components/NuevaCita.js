import React, { Component } from 'react';

class NuevaCita extends Component{
  state = {
    consulta: {
      pet: '',
      dono: '',
      data: '',
      hora: '',
      sintomas: ''
    }
  }

  handleChange = (e) => {
    // colocar o que o usuário digitou no state
    this.setState({
      consulta : {
        ...this.state.consulta,
        [e.target.name] : e.target.value
      }
    });
  }

  render() {
    return (
        <div className='card mt-5 py-5'>
          <div className="card-body">
            <h2 className="card-title text-center mb-5">
              Preencha o formulário para criar uma nova consulta.
            </h2>
            <form>
              <div className="form-group row">
                <label className='col-sm-4 col-lg-2 col-form-label'>Nome do Pet</label>
                <div className="col-sm-8 col-lg-10">
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Nome do Pet'
                    name='pet'
                    onChange={this.handleChange}
                    value={this.state.consulta.pet}
                  />
                </div>
              </div>{/*form-group*/}

              <div className="form-group row">
                <label className='col-sm-4 col-lg-2 col-form-label'>Nome do Dono</label>
                <div className="col-sm-8 col-lg-10">
                  <input
                      type='text'
                      className='form-control'
                      placeholder='Nome do Dono do Pet'
                      name='dono'
                      onChange={this.handleChange}
                      value={this.state.consulta.dono}
                  />
                </div>
              </div>{/*form-group*/}

              <div className="form-group row">
                <label className='col-sm-4 col-lg-2 col-form-label'>Data</label>
                <div className="col-sm-8 col-lg-4">
                  <input
                      type='date'
                      className='form-control'
                      name='data'
                      onChange={this.handleChange}
                      value={this.state.consulta.data}
                  />
                </div>

                <label className='col-sm-4 col-lg-2 col-form-label'>Hora</label>
                <div className="col-sm-8 col-lg-4">
                  <input
                      type='time'
                      className='form-control'
                      name='hora'
                      onChange={this.handleChange}
                      value={this.state.consulta.hora}
                  />
                </div>
              </div>{/*form-group*/}

              <div className="form-group row">
                <label className='col-sm-4 col-lg-2 col-form-label'>Sintomas</label>
                <div className="col-sm-8 col-lg-10">
                  <textarea
                    className='form-control'
                    name='sintomas'
                    placeholder='Descreva os sintomas'
                    onChange={this.handleChange}
                  >{this.state.consulta.sintomas}</textarea>
                  
                </div>
              </div>{/*form-group*/}

              <input
                  type="submit"
                  className='py-3 mt-2 btn btn-success btn-block'
                  value='Adicionar nova consulta'
              />


            </form>
          </div>
        </div>
    )
  }


}

export default NuevaCita;
