export const validate = (key, element, formState, type = null, required = true) => {
    const errors = [];

    errors[key] = [];

    if(required && (element === 'input' || element === 'textarea') && isEmpty(formState[key])) errors[key].push('Este campo não pode estar vazio.');
    
    if(required && element === 'select' && ((isEmpty(formState[key])) || formState[key] === '0')) errors[key].push('Selecione uma opção para continuar.');

    if(required && type === 'email' && !validateEmail(formState[key])) errors[key].push('Formato de e-mail inválido.');

    if(required && type === 'password') {
        if(!errors['password']) errors['password'] = [];
        if(!errors['password_confirm']) errors['password_confirm'] = [];

        if (formState['password'] !== formState['password_confirm']) {
            errors['password'].push('As senhas não coincidem.');
            errors['password_confirm'].push('As senhas não coincidem.');
        };
    }

    return errors;
};


const isEmpty = (value) => {
    return (
        value === null ||
        value === undefined ||
        value === '' ||
        (Array.isArray(value) && value.length === 0) ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim() === '')
    );
};


function validateEmail(email) {
    var reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

    return reg.test(email);
}


export const validateFormField = (key, formState, setFormErrors, element = 'input', type = null) => {
    const errors = validate(key, element, formState, type);

    setFormErrors(prevState => ({
        ...prevState,
        [key]: errors[key]
    }));
}

export const clearForm = (form, setFormState) => {
    const fields = form.querySelectorAll('input, select, textarea');

    fields.forEach((field) => {
        setFormState(prevState => ({
            ...prevState,
            [field.name]: ''
        }));
    });
}

export const validateForm = (form, formState, formErrors, setFormErrors) => {
    const inputs = form.querySelectorAll('input');
    const selects = form.querySelectorAll('select');
    const textareas = form.querySelectorAll('textarea');
    
    inputs.forEach((input) => {
        const type = (input.type === 'email' || input.type === 'password') ? input.type : null;

        validateFormField(input.name, formState, setFormErrors, 'input', type);
    });

    selects.forEach((select) => validateFormField(select.name, formState, setFormErrors, 'select'));
    textareas.forEach((textarea) => validateFormField(textarea.name, formState, setFormErrors, 'textarea'));

    if(Object.keys(formErrors).length === 0) return true;

    for (const error of Object.values(formErrors)) {
        if (error.length !== 0) return true;
    }

    return false;
}

export const getRequestBody = (form, formState) => {
    const requestBody = {};

    const fields = form.querySelectorAll('input, select, textarea');

    fields.forEach((field) => { if (field.name) requestBody[field.name] = formState[field.name]; });

    return requestBody;
}