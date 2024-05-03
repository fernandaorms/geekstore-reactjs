import { Form } from "../../components/common/Form";
import { fields } from '../../utils/forms/form-sign-up-fields';

export const SignUp = () => {
    const signupFormConfig = {
        formId: 'clientRegister',
        apiUrl: '/client',
        successMessage: 'Cadastro realizado com sucesso!',
        errorMessage: 'Não foi possível realizar o cadastro.',
        submitButtonLabel: 'Cadastrar',
        fields: fields
    };

    return (
        <div>
             <section className='sign-up'>
                    <div className='container'>
                        <Form formConfig={signupFormConfig} />
                    </div>
            </section>
        </div>
    );
};