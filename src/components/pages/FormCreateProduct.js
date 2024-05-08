import { useState, useEffect } from 'react';

import api from '../../services/api';

import { validate } from '../../utils/forms/form-validade';

import { FormResults } from '../common/FormResults';

import {FormCreateProductStep1} from '../../components/pages/FormCreateProductStep1';
import {FormCreateProductStep2} from '../../components/pages/FormCreateProductStep2';
import {FormCreateProductStep3} from '../../components/pages/FormCreateProductStep3';
import {FormCreateProductStep4} from '../../components/pages/FormCreateProductStep4';

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

    const validateFormField = (key, element='input') => {
        const errors = validate(key, element, formState);

        setFormErrors(prevState => ({
            ...prevState,
            [key]: errors[key]
        }));
    }

    const clearForm = (form) => {
        const fields = form.querySelectorAll('input, select, textarea');

        fields.forEach((field) => {
            setFormState(prevState => ({
                ...prevState,
                [field.name]: ''
            }));
        });
    }

    const validateForm = (form) => {
        const inputs = form.querySelectorAll('input');
        const selects = form.querySelectorAll('select');
        const textareas = form.querySelectorAll('textarea');
        
        inputs.forEach((input) => validateFormField(input.name));
        selects.forEach((select) => validateFormField(select.name, 'select'));
        textareas.forEach((textarea) => validateFormField(textarea.name, 'textarea'));

        if(Object.keys(formErrors).length === 0) return true;

        for (const error of Object.values(formErrors)) {
            if (error.length !== 0) return true;
        }

        return false;
    }

    const getRequestBody = (form) => {
        const requestBody = {};

        const fields = form.querySelectorAll('input, select, textarea');

        fields.forEach((field) => { if (field.name) requestBody[field.name] = formState[field.name]; });

        return requestBody;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitSuccess(false);
        setSubmitError(false);

        const errors = validateForm(e.target);

        if(errors) return;
        
        const requestBody = getRequestBody(e.target);

        return api.post('/product', requestBody)
            .then(response => {
                setSubmitSuccess(true);
                clearForm(e.target);
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
                    <FormCreateProductStep1 formState={formState} handleChange={handleChange} validateForm={validateFormField} formErrors={formErrors} />

                    <FormCreateProductStep2 formState={formState} handleChange={handleChange} validateForm={validateFormField} formErrors={formErrors} />

                    <FormCreateProductStep3 formState={formState} handleChange={handleChange} validateForm={validateFormField} formErrors={formErrors} />

                    <FormCreateProductStep4 formState={formState} handleChange={handleChange} validateForm={validateFormField} formErrors={formErrors} />
                </div>

                <div className='buttons'>
                    <button type='submit' className='btn btn-success'>Cadastrar</button>
                </div>
            </form>
        </div>
    );
};