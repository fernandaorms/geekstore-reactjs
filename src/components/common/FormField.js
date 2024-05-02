export const FormField = ({ input, formState, handleChange }) => {
    return (
        <input 
          type={input.type} 
          className='form-control' 
          id={input.id} 
          name={input.id} 
          placeholder={input.placeholder} 
          value={formState[input.id] || ''} 
          onChange={handleChange}    
        />
    );
};