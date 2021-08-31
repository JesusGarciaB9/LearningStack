import Caja from '../components/caja';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Logo from './imagenes/logo';
import Headerprop from '../components/header';
import ImagenInicio from './imagenes/imageninicio';

const Home = () => {
  /** 
  const [numero, setNumero] = useState(0);
  const suma = () => {
    console.log('suma');
    setNumero(numero + 1);
  };
  const resta = () => {
    console.log('resta');
    setNumero(numero - 1);
  };
  */

  return (
    <div className='w-100vw bg-griseparador'>
      <div className='w-5/6 mx-auto bg-white'>
        <Headerprop />
        <ImagenInicio />
      </div>
    </div>
  );
};

export default Home;
