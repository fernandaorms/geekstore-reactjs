import {FormCreateProduct} from '../../components/pages/FormCreateProduct';

export const CreateProduct = () => {
    return (
        <div>
            <div className='title'>
                <h1>Novo Produto</h1>
            </div>
            
            <div>
                <FormCreateProduct />
            </div>
        </div>
    );
};