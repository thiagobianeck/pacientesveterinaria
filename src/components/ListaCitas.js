import React from 'react';
import Cita from './Cita';

const ListaCitas = ({consultas}) => {
  return (
      <div className='card mt-2 py-5'>
        <div className='card-body'>
          <h2 className='card-title text-center'>Administra as consultas aqui</h2>
          <div className='lista-citas'>
            {consultas.map(consulta => (
                <Cita
                  key={consulta.id}
                  consulta={consulta}
                />
            ))}
          </div>
        </div>
      </div>
  );
}

export default ListaCitas;
