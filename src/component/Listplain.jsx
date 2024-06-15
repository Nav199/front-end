import React from 'react';
import data from '../../planos.json';
import Plan_Item from './Home/Plan_Item';

const Lisplain = () => {
  return (
    <div className='mt-5 sm:mt-0 grid gap-4 m-auto max-w-2xl sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1000px]'>
      {data.planosDeNegocios.map((plain, index) => (
        <Plan_Item key={index} title={plain.title} tipo={plain.tipo} />
      ))}
    </div>
  );
};

export default Lisplain;
