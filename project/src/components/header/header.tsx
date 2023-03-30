import Logo from '../logo/logo';

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <Logo/>
          <nav className='header__nav'>
            <ul className='header__nav-list'>
              <li className='header__nav-item user'>
                <div className='header__nav-profile'>
                  <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                  <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
                </div>
              </li>
              <li className='header__nav-item'>
                <a className='header__nav-link' href='#'>
                  <span className='header__signout'>Sign out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
