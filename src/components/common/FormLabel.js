export const FormLabel = ({ label, fieldId }) => {
    return (
        <label htmlFor={fieldId} className='form-label'>{label}</label>
    );
};