import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PrivateLayout } from './components/layout/PrivateLayout';
import { PublicLayout } from './components/layout/PublicLayout';

import { Dashboard } from './views/private/Dashboard';
import { CreateProduct } from './views/private/CreateProduct';
import { ListClients } from './views/private/ListClients';
import { ListProducts } from './views/private/ListProducts';

import { Home } from './views/public/Home';
import { About } from './views/public/About';
import { Contact } from './views/public/Contact';
import { SignIn } from './views/public/SignIn';
import { SignUp } from './views/public/SignUp';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PublicLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='/login' element={<SignIn />}/>
                    <Route path='/register' element={<SignUp />}/>
                </Route>

                <Route path='/admin' element={<PrivateLayout />}>
                    <Route path='/admin' element={<Dashboard />}/>
                    <Route path='/admin/client' element={<ListClients />}/>
                    <Route path='/admin/product' element={<ListProducts />}/>
                    <Route path='/admin/product/create' element={<CreateProduct />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};