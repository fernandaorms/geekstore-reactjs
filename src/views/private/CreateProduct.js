import {FormCreateProduct} from '../../components/pages/FormCreateProduct';

export const CreateProduct = () => {
    const submitMessages = {
        'success': 'Cadastro realizado com sucesso!',
        'error': 'Não foi possível realizar o cadastro, estamos trabalhando para resolver o problema. Por favor, tente novamente mais tarde.'
    }
    
    return (
        <div>
            <div className='title'>
                <h1>Novo Produto</h1>
            </div>
            
            <div>
                <FormCreateProduct successMessage={submitMessages['success']} errorMessage={submitMessages['error']} />
            </div>
        </div>
    );
};