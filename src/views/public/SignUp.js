import {FormCreateClient} from '../../components/pages/FormCreateClient';

export const SignUp = () => {
    const submitMessages = {
        'success': 'Cadastro realizado com sucesso!',
        'error': 'Não foi possível realizar o cadastro, estamos trabalhando para resolver o problema. Por favor, tente novamente mais tarde.'
    }

    return (
        <div>
             <section className='sign-up'>
                    <div className='container'>
                        <FormCreateClient successMessage={submitMessages['success']} errorMessage={submitMessages['error']} />
                    </div>
            </section>
        </div>
    );
};