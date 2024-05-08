import { useState} from 'react';
import api from '../../services/api';
import { FormResults } from '../common/FormResults';
import {FormCreateProductStep1} from '../../components/pages/FormCreateProductStep1';
import {FormCreateProductStep2} from '../../components/pages/FormCreateProductStep2';
import {FormCreateProductStep3} from '../../components/pages/FormCreateProductStep3';
import {FormCreateProductStep4} from '../../components/pages/FormCreateProductStep4';
import { validateForm, validateFormField, clearForm, getRequestBody } from '../../utils/forms/form-validade';

export const FormCreateProduct = ({ successMessage, errorMessage }) => {
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

        return api.post('/product', requestBody)
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

            <form id='productRegister' onSubmit={(e) => handleSubmit(e)}>
                <div className='row'>
                    <FormCreateProductStep1 formState={formState} handleChange={handleChange} validateForm={validateFormField} formErrors={formErrors} setFormErrors={setFormErrors} />

                    <FormCreateProductStep2 formState={formState} handleChange={handleChange} validateForm={validateFormField} formErrors={formErrors} setFormErrors={setFormErrors} />

                    <FormCreateProductStep3 formState={formState} handleChange={handleChange} validateForm={validateFormField} formErrors={formErrors} setFormErrors={setFormErrors} />

                    <FormCreateProductStep4 formState={formState} handleChange={handleChange} validateForm={validateFormField} formErrors={formErrors} setFormErrors={setFormErrors} />
                </div>

                <div className='buttons'>
                    <button type='submit' className='btn btn-success'>Cadastrar</button>
                </div>
            </form>
        </div>
    );
};