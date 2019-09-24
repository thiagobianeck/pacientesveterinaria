import React from 'react';

const Cita = ({consulta}) => (
    <div className='media mt-3'>
      <div className="media-body">
        <h3 className='mt-0'>{consulta.pet}</h3>
        <p className='card-text'><span>Nome do Dono: </span>{consulta.dono}</p>
        <p className='card-text'><span>Data: </span>{consulta.data}</p>
        <p className='card-text'><span>Hora: </span>{consulta.hora}</p>
        <p className='card-text'><span>Sintomas: </span></p>
        <p className='card-text'>{consulta.sintomas}</p>
      </div>
    </div>
);


export default Cita;
