import { Outlet } from 'react-router-dom';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';

export const PublicLayout = () => {
    return (
        <div>
            <Header />
            
            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};