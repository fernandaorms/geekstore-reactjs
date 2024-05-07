import { Outlet } from 'react-router-dom';

import '../../assets/styles/main.css';
import { Sidebar } from '../layout/Sidebar';

export const PrivateLayout = () => {
    return (
        <div>
            <main>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='container'>
                            <Sidebar />
                        </div>
                    </div>

                    <div className='col-lg-9'>
                        <div className='container'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};