import { Form } from "../../components/common/Form";
import { fields } from '../../utils/forms/form-sign-up-fields';

export const SignUp = () => {
    

    return (
        <div>
             <section className='sign-up'>
                    <div className='container'>
                        <Form form_id='clientRegister' fields={fields} />
                    </div>
            </section>
        </div>
    );
};