export const isEmpty = (value) => {
    return (
        value === null ||
        value === undefined ||
        value === '' ||
        (Array.isArray(value) && value.length === 0) ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim() === '')
    );
};


/*  */
export const getRequestBody = (formState, fields) => {
    const requestBody = {};

    fields.forEach((field) => {
        if (field.api) {
            requestBody[field.api] = formState[field.field[0].id];
        }
    });

    return requestBody;
}


/*  Clear  */
export const clearFormResults = (setFormSuccess, setFormError) => {
    setFormSuccess(false);
    setFormError(false);
}

export const clearFormValues = (setFormState, fields) => {
    const clearedFormState = {};

    fields.forEach((field) => {
        const fieldId = field.field[0].id;
        clearedFormState[fieldId] = '';
    });

    setFormState(clearedFormState);
};


/*  Validate  */
function validateEmail(email) {
    var reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

    return reg.test(email);
}

export const validateForm = (formState, fields) => {
    const errors = {};
    const password = [];

    fields.forEach((field) => {
        const fieldId = field.field[0].id;
        const fieldType = field.field[0].type;

        if(isEmpty(formState[fieldId])) {
            if (!errors[fieldId]) errors[fieldId] = []; 

            errors[fieldId].push('Este campo não pode estar vazio.');
        }

        if(fieldType === 'email' && !validateEmail(formState[fieldId])) {
            if (!errors[fieldId]) errors[fieldId] = []; 

            errors[fieldId].push('Formato de e-mail inválido.');
        }

        if(fieldType === 'password' && password.length === 0) password.push(fieldId, formState[fieldId]);

        if((fieldType === 'password') && (password.length !== 0) && (password[1] !== formState[fieldId])) {
            if (!errors[fieldId]) errors[fieldId] = []; 
            if (!errors[password[0]]) errors[password[0]] = []; 
            
            errors[fieldId].push('As senhas não coincidem.');
            errors[password[0]].push('As senhas não coincidem.');
        }
    });

    return errors;
}