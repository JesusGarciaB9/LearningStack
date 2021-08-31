/** 
import { useRouter } from 'next/router';

function redireccion(e, router, direccion) {
  e.preventDefault();
  router.push(direccion);
  console.log('hice click.');
}

const Caja = ({ name = '', direccion, redireccion2 }) => {
  console.log('name', name);
  const router = useRouter();
  return (
    <button className='btn-primary' onClick={(e) => redireccion2()}>
      {name}
    </button>
  );
};

export default Caja;
*/
