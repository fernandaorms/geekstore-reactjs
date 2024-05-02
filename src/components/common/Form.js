import { useState } from 'react';
import axios from 'axios';

import { FormLabel } from './FormLabel';
import { FormField } from './FormField';

export const Form = ( { form_id, fields } ) => {
    const [formState, setFormState] = useState({});

    const [formSuccess, setFormSuccess] = useState('');
    const [formError, setFormError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(e);
    }

    return (
        <div className='form'>
            <form id={form_id} onSubmit={handleSubmit}>
                <div className='row'>
                    {fields.map((field) => (
                        <div className='col-lg-6 field' key={field.field[0].id}>
                            {field.label && field.label.map(label => (
                                <FormLabel key={label.value} label={label.value} fieldId={field.field[0].id} />
                            ))}

                            {field.field && field.field.map(input => (
                                <FormField key={input.id} input={input} formState={formState} handleChange={handleChange} />
                            ))}

                            <span className='error'></span>
                        </div>
                    ))}
                </div>

                <div className='buttons'>
                    <button type='submit' className='btn btn-success'>Cadastrar</button>
                </div>
            </form>
        </div>
    );
};