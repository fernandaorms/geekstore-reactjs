import { Outlet } from 'react-router-dom';
import { Header } from '../layout/Header';

export const PublicLayout = () => {
    return (
        <div>
            <Header />
            
            <main>
                <Outlet />
            </main>

            <footer>
                <h2>Footer</h2>
            </footer>
        </div>
    );
};