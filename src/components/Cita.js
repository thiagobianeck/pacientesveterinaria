import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({consulta, eliminarConsulta}) => (
    <div className='media mt-3'>
      <div className="media-body">
        <h3 className='mt-0'>{consulta.pet}</h3>
        <p className='card-text'><span>Nome do Dono: </span>{consulta.dono}</p>
        <p className='card-text'><span>Data: </span>{consulta.data}</p>
        <p className='card-text'><span>Hora: </span>{consulta.hora}</p>
        <p className='card-text'><span>Sintomas: </span></p>
        <p className='card-text'>{consulta.sintomas}</p>
        <button
          className='btn btn-danger'
          onClick={() => eliminarConsulta(consulta.id)}
        >Eliminar &times;</button>
      </div>
    </div>
);

Cita.propTypes = {
  consulta: PropTypes.object.isRequired,
  eliminarConsulta: PropTypes.func.isRequired
}

export default Cita;
