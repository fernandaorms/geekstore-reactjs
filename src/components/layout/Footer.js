import '../../assets/styles/footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='wrapper'>
                    <div className='logo'>
                        <Link to='/'>Loja Geek</Link>
                    </div>

                    <div className='copyright'>
                        <p>Copyright © 2024. Todos os direitos reservados.</p>
                    </div>

                    <div className='menu'>
                        <ul className='nav'>
                            <li><Link to='/'>Início</Link></li>
                            <li><Link to='/about'>Sobre</Link></li>
                            <li><Link to='/contact'>Contato</Link></li>
                        </ul>
                    </div>                    
                </div>
            </div>
        </footer>
    );
};