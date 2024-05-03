import { useState, useEffect } from 'react';

import { FormLabel } from './FormLabel';
import { FormElement } from './FormElement';

export const FormField = ({ field, formState, formFieldsErrors, handleChange }) => {
    const [ formFieldError, setFormFieldError ] = useState([]);
    const fieldId = field.field[0].id;

    useEffect(() => {
        const errorMessages = [];

        if (formFieldsErrors[fieldId]) {
            formFieldsErrors[fieldId].forEach((error, index) => {
                errorMessages.push((
                    <span key={`${fieldId}-${index}`}>{error}</span>
                ));
            });
        }
        setFormFieldError(errorMessages);
    }, [formFieldsErrors, fieldId]);

    return (
        <div className='col-lg-6 field'>
            {field.label && field.label.map(label => (
                <FormLabel key={label.value} label={label.value} fieldId={field.field[0].id} />
            ))}

            {field.field && field.field.map(input => (
                <FormElement key={input.id} input={input} formState={formState} handleChange={handleChange} />
            ))}

            <span className='error text-danger'>{formFieldError}</span>
        </div>
    );
};