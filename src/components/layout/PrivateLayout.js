import { Outlet } from 'react-router-dom';

export const PrivateLayout = () => {
    return (
        <div>
            <main>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='container'>
                            <h2>Sidebar</h2>
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