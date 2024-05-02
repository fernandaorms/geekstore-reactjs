import { useState } from 'react';
import axios from 'axios';

import api from '../../services/api';

import { FormLabel } from './FormLabel';
import { FormField } from './FormField';

export const Form = ( { form_id, fields } ) => {
    const [formState, setFormState] = useState({});

    const [formSuccess, setFormSuccess] = useState('');
    const [formError, setFormError] = useState('');

    const [user, setUser] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e, fields) => {
        e.preventDefault();
        
        const request_body = {};
        
        fields.map((field) => {
            if(field.api) {
                request_body[field.api] = formState[field.field[0].id];
            }
        });

        try {
            const response = await api.post('/client', request_body);

            setUser(response.response);

            console.log(user);

        } catch (err) {
            console.error('Error', err);
        }    
    }

    
    return (
        <div className='form'>
            <form id={form_id} onSubmit={(e) => handleSubmit(e, fields)}>
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