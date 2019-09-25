import React from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

const ListaCitas = ({consultas, eliminarConsulta}) => {
  return (
      <div className='card mt-2 py-5'>
        <div className='card-body'>
          <h2 className='card-title text-center'>Administra as consultas aqui</h2>
          <div className='lista-citas'>
            {consultas.map(consulta => (
                <Cita
                  key={consulta.id}
                  consulta={consulta}
                  eliminarConsulta={eliminarConsulta}
                />
            ))}
          </div>
        </div>
      </div>
  );
}

ListaCitas.propTypes = {
  consultas: PropTypes.array.isRequired,
  eliminarConsulta: PropTypes.func.isRequired
};

export default ListaCitas;
