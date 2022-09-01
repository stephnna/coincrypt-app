import logo from '../assets/img/logo.png';

const Navigation = () => (
  <header>
    <nav className='nav'>      
      <div className='nav-logo-container'><img   className='nav-logo' src={logo} alt="Logo" /></div>
      <div><h1>Coincrypt Market</h1></div>          
    </nav>
  </header>
);

export default Navigation;
