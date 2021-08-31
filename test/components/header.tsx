import ImagenInicio from '../pages/imagenes/imageninicio';
import Logo from '../pages/imagenes/logo';

const Headerprop = () => {
  return (
    <header>
      <div>
        <div className='overflow-auto'>
          <div className='flex pt-5 pr-10'>
            <div className='mb-5 ml-8 mr-8 h-7 center'>
              <Logo />
            </div>
            <a className='header-list'>Live</a>
            <a className='header-list'>Push</a>
            <a className='header-list'>Link</a>
            <a className='header-list'>Shop</a>
            <a className='header-list'>Packs</a>
            <a className='header-list'>Help</a>
            <a className='header-list text-mamon'>More +</a>
            <a className='ml-auto px-2.5 text-azulrey'>Try Live for free</a>
            <a className='ml-2.5 pl-2.5'>Log in or register</a>
          </div>
          <div className='h-0 border-t-2 border-solid border-griseparador'></div>
          <div className='flex py-5 px-10'>
            <a className='mr-2.5 pr-2.5 text-mamon'>About</a>
            <a className='ml-2.5 pl-2.5'>Jobs</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headerprop;
