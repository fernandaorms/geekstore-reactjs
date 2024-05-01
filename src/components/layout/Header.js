import '../../assets/styles/header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='wrapper'>
                    <div className='logo'>
                        <Link to='/'>Loja Geek</Link>
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