import {useLocation, Link} from 'react-router-dom';
import {AppRoutes} from '../../const';

function Logo() {
  const location = useLocation();

  if (location.pathname === AppRoutes.root) {
    return (
      <div className='header__left'>
        <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41'/>
      </div>
    )
  }
  return (
    <div className='header__left'>
      <Link to={AppRoutes.root} className='header__logo-link header__logo-link--active'>
        <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41'/>
      </Link>
    </div>
  )
}

export default Logo;
