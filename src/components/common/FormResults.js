export const FormResults = ({ success, error, successMessage, errorMessage }) => {
    return (
        <div className='results'>
            {success && ( <div className='alert alert-success' role='alert'>{successMessage}</div> )}
            
            {error && ( <div className='alert alert-danger' role='alert'>{errorMessage}</div> )}
        </div>
    );
};