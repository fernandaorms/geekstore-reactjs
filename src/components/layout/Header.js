import { Link } from 'react-router-dom';

import '../../assets/styles/header.css';
import logo_colored from '../../assets/images/logo-colored.svg'

export const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='wrapper'>
                    <div className='logo'>
                        <Link to='/'><img src={logo_colored} alt='Logo Colored' /></Link>
                    </div>

                    <div className='menu'>
                        <ul className='nav'>
                            <li><Link to='/'>Início</Link></li>
                            <li><Link to='/about'>Sobre</Link></li>
                            <li><Link to='/contact'>Contato</Link></li>
                        </ul>
                    </div>

                    <div className='buttons'>
                        <Link to='/login' className='btn btn-outline-primary'>Login</Link>
                        <Link to='/register' className='btn btn-primary'>Registro</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};