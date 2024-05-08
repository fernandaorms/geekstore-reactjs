import '../../assets/styles/form.css';
import { useState} from 'react';
import api from '../../services/api';
import { FormResults } from '../common/FormResults';
import {FormCreateProductStep1} from '../../components/pages/FormCreateProductStep1';
import {FormCreateProductStep2} from '../../components/pages/FormCreateProductStep2';
import {FormCreateProductStep3} from '../../components/pages/FormCreateProductStep3';
import {FormCreateProductStep4} from '../../components/pages/FormCreateProductStep4';
import { validateForm, validateFormField, clearForm, getRequestBody } from '../../utils/forms/form-validade';

export const FormCreateProduct = () => {
    const [formState, setFormState] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const name = e.target.name;
        const value = ((e.target.tagName === 'INPUT' && e.target.type === 'number') || e.target.tagName === 'SELECT') ? parseInt(e.target.value, 10) : e.target.value;

        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrorMessage('');
        setSuccessMessage('');
        setSubmitSuccess(false);
        setSubmitError(false);

        const errors = validateForm(e.target, formState, formErrors, setFormErrors);

        if(errors) return;

        const requestBody = getRequestBody(e.target, formState);

        return api.post('/product', requestBody)
            .then(response => {
                if(response.data.status === 200) {
                    setSubmitSuccess(true);
                    setSuccessMessage(response.data.response)
                    clearForm(e.target, setFormState);
                }
                else {
                    setSubmitError(true);
                    setErrorMessage(response.data.response)
                }
            })
            .catch(err => {
                setErrorMessage(err.message);
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