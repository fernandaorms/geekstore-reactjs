export const validate = (key, element, formState, required = true) => {
    const errors = [];

    errors[key] = [];

    if(required && (element === 'input' || element === 'textarea') && isEmpty(formState[key])) errors[key].push('Este campo não pode estar vazio.');
    
    if(required && element === 'select' && (isEmpty(formState[key])) || formState[key] === '0') errors[key].push('Selecione uma opção para continuar.');

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