import { useState } from 'react';
import api from '../../services/api';
import { FormResults } from '../common/FormResults';
import { FormLabel } from '../common/FormLabel';
import { FormSpanError } from '../common/FormSpanError';
import { validateForm, validateFormField, clearForm, getRequestBody } from '../../utils/forms/form-validade';

export const FormCreateClient = ({ successMessage, errorMessage }) => {
    const [formState, setFormState] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitSuccess(false);
        setSubmitError(false);

        const errors = validateForm(e.target, formState, formErrors, setFormErrors);

        if(errors) return;
        
        const requestBody = getRequestBody(e.target, formState);

        return api.post('/client', requestBody)
            .then(response => {
                setSubmitSuccess(true);
                clearForm(e.target, setFormState);
            })
            .catch(err => {
                console.error('Error', err);
                setSubmitError(true);
            });
    }

    return (
        <div className='form'>
            { (submitSuccess || submitError) && ( <FormResults success={submitSuccess} error={submitError} successMessage={successMessage} errorMessage={errorMessage} /> )}

            <form id='clientRegister' onSubmit={(e) => handleSubmit(e)}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <FormLabel label='Nome' fieldId='clientFirstName'/>
                
                        <input
                            type='text'
                            id='clientFirstName'
                            className='form-control'
                            name='first_name'
                            placeholder=''
                            value={formState['first_name'] || ''} 
                            onChange={handleChange}
                            onBlur={(e) => {validateFormField(e.target.name, formState, setFormErrors);}}
                        />

                        {formErrors['first_name'] && (<FormSpanError errors={formErrors['first_name']} />)}
                    </div>

                    <div className='col-lg-6'>
                        <FormLabel label='Sobrenome' fieldId='clientLastName'/>
                
                        <input
                            type='text'
                            id='clientLastName'
                            className='form-control'
                            name='last_name'
                            placeholder=''
                            value={formState['last_name'] || ''} 
                            onChange={handleChange}
                            onBlur={(e) => {validateFormField(e.target.name, formState, setFormErrors);}}
                        />

                        {formErrors['last_name'] && (<FormSpanError errors={formErrors['last_name']} />)}
                    </div>

                    <div className='col-lg-6'>
                        <FormLabel label='CPF' fieldId='clientCPF'/>
                
                        <input
                            type='text'
                            id='clientCPF'
                            className='form-control'
                            name='cpf'
                            placeholder=''
                            value={formState['cpf'] || ''} 
                            onChange={handleChange}
                            onBlur={(e) => {validateFormField(e.target.name, formState, setFormErrors);}}
                        />

                        {formErrors['cpf'] && (<FormSpanError errors={formErrors['cpf']} />)}
                    </div>

                    <div className='col-lg-6'>
                        <FormLabel label='Telefone' fieldId='clientPhone'/>
                
                        <input
                            type='text'
                            id='clientPhone'
                            className='form-control'
                            name='phone'
                            placeholder=''
                            value={formState['phone'] || ''} 
                            onChange={handleChange}
                            onBlur={(e) => {validateFormField(e.target.name, formState, setFormErrors);}}
                        />

                        {formErrors['phone'] && (<FormSpanError errors={formErrors['phone']} />)}
                    </div>

                    <div className='col-lg-6'>
                        <FormLabel label='Email' fieldId='clientEmail'/>
                
                        <input
                            type='email'
                            id='clientEmail'
                            className='form-control'
                            name='email'
                            placeholder=''
                            value={formState['email'] || ''} 
                            onChange={handleChange}
                            onBlur={(e) => {validateFormField(e.target.name, formState, setFormErrors, 'input', 'email');}}
                        />

                        {formErrors['email'] && (<FormSpanError errors={formErrors['email']} />)}
                    </div>

                    <div className='col-lg-6'>
                        <FormLabel label='Endereço' fieldId='clientAddress'/>
                
                        <input
                            type='text'
                            id='clientAddress'
                            className='form-control'
                            name='address'
                            placeholder=''
                            value={formState['address'] || ''} 
                            onChange={handleChange}
                            onBlur={(e) => {validateFormField(e.target.name, formState, setFormErrors);}}
                        />

                        {formErrors['address'] && (<FormSpanError errors={formErrors['address']} />)}
                    </div>

                    <div className='col-lg-6'>
                        <FormLabel label='Senha' fieldId='clientPassword'/>
                
                        <input
                            type='password'
                            id='clientPassword'
                            className='form-control'
                            name='password'
                            placeholder=''
                            value={formState['password'] || ''} 
                            onChange={handleChange}
                            onBlur={(e) => {validateFormField(e.target.name, formState, setFormErrors, 'input', 'password');}}
                        />

                        {formErrors['password'] && (<FormSpanError errors={formErrors['password']} />)}
                    </div>

                    <div className='col-lg-6'>
                        <FormLabel label='Senha' fieldId='clientPasswordConfirm'/>
                
                        <input
                            type='password'
                            id='clientPasswordConfirm'
                            className='form-control'
                            placeholder=''
                            name='password_confirm'
                            value={formState['password_confirm'] || ''} 
                            onChange={handleChange}
                            onBlur={(e) => {validateFormField(e.target.name, formState, setFormErrors, 'input', 'password');}}
                        />

                        {formErrors['password_confirm'] && (<FormSpanError errors={formErrors['password_confirm']} />)}
                    </div>
                </div>

                <div className='buttons'>
                    <button type='submit' className='btn btn-success'>Cadastrar</button>
                </div>
            </form>
        </div>
    );
};