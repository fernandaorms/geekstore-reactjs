import { Link } from 'react-router-dom';
import { FaChartLine, FaBox, FaCartShopping, FaUserGroup, FaCircleUser } from "react-icons/fa6";

import '../../assets/styles/sidebar.css';
import LogoColored from '../../assets/images/logo-colored.svg'

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='wrapper'>
                <div className='logo'>
                    <Link to='/admin'><img src={LogoColored} alt='Logo Colored' /></Link>
                </div>

                <div className='menu'>
                    <ul className='nav'>
                        <li><Link to='/admin'><FaChartLine /><span>Dashboard</span></Link></li>
                        <li><Link to='/admin/product'><FaBox /><span>Produtos</span></Link></li>
                        <li><Link to='/admin'><FaCartShopping /><span>Pedidos</span></Link></li>
                        <li><Link to='/admin/client'><FaUserGroup /><span>Clientes</span></Link></li>
                    </ul>
                </div>

                <div className='user'>
                    <div className='logo'><FaCircleUser /></div>

                    <div className='info'>
                        <div className='username'>
                            <span>Administrador</span>
                        </div>

                        <div className='email'>
                            <span>admin@admin.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};