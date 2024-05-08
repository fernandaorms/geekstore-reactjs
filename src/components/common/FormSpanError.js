export const FormSpanError = ({ errors }) => {
    return (
        <span className='error text-danger'>
            { errors.map((error, index) => (
                <span key={index}>{error}</span>
            )) }
        </span>
    );
};