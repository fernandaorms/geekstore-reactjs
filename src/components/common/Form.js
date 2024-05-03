import '../../assets/styles/form.css'
import { useState } from 'react';

import api from '../../services/api';

import { FormField } from './FormField';

import { clearFormResults, getRequestBody, validateForm, clearFormValues } from '../../utils/forms/form-utils';

export const Form = ( { formConfig } ) => {
    const [formState, setFormState] = useState({});

    const [formSuccess, setFormSuccess] = useState(false);
    const [formError, setFormError] = useState(false);

    const [formFieldsErrors, setFormFieldsErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        clearFormResults(setFormSuccess, setFormError);
        
        const formValidationErrors = validateForm(formState, formConfig.fields);

        setFormFieldsErrors(formValidationErrors);

        if(Object.keys(formValidationErrors).length === 0) {
            const request_body = getRequestBody(formState, formConfig.fields);
            
            return api.post(formConfig.apiUrl, request_body)
                .then(response => {
                    setFormSuccess(true);
                    clearFormValues(setFormState, formConfig.fields);
                })
                .catch(err => {
                    console.error('Error', err);
                    setFormError(true);
                });
        }
    }
    
    return (
        <div className='form'>
            { (formSuccess || formError) && (
                <div className='results'>
                    {formSuccess && ( <div className='alert alert-success' role='alert'>{formConfig.successMessage}</div> )}
                    
                    {formError && ( <div className='alert alert-danger' role='alert'>{formConfig.errorMessage}</div> )}
                </div>
            )}

            <form id={formConfig.formId} onSubmit={(e) => handleSubmit(e)}>
                <div className='row'>
                    {formConfig.fields.map((field) => (
                        <FormField field={field} formState={formState} formFieldsErrors={formFieldsErrors} handleChange={handleChange} key={field.field[0].id} />
                    ))}
                </div>

                <div className='buttons'>
                    <button type='submit' className='btn btn-success'>{formConfig.submitButtonLabel}</button>
                </div>
            </form>
        </div>
    );
};