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


export const clearFormResults = (setFormSuccess, setFormError) => {
    setFormSuccess(false);
    setFormError(false);
}


export const getRequestBody = (formState, fields) => {
    const requestBody = {};

    fields.forEach((field) => {
        if (field.api) {
            requestBody[field.api] = formState[field.field[0].id];
        }
    });

    return requestBody;
}


export const validateForm = (formState, fields) => {
    const errors = {};

    fields.forEach((field) => {
        const fieldId = field.field[0].id;

        if(isEmpty(formState[fieldId])) {
            if (!errors[fieldId]) errors[fieldId] = []; 

            errors[fieldId].push('Este campo não pode estar vazio.');
        }
    });

    return errors;
}


export const clearFormValues = (setFormState, fields) => {
    const clearedFormState = {};

    fields.forEach((field) => {
        const fieldId = field.field[0].id;
        clearedFormState[fieldId] = '';
    });

    setFormState(clearedFormState);
};