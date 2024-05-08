import { FormStep } from '../common/FormStep';
import { FormLabel } from '../common/FormLabel';
import { FormSpanError } from '../common/FormSpanError';

export const FormCreateProductStep4 = ({ formState, handleChange, validateForm, formErrors, setFormErrors }) => {
    return(
        <FormStep title='Estoque e Variações' number='4'>
            <div className='col-lg-6'>
                <FormLabel label='Quantidade em Estoque' fieldId='productStock'/>
        
                <input
                    type='number'
                    id='productStock'
                    className='form-control'
                    name='qty_stock'
                    placeholder=''
                    value={formState['qty_stock'] || ''} 
                    onChange={handleChange}
                    onBlur={(e) => {validateForm(e.target.name, formState, setFormErrors);}}
                />

                {formErrors['qty_stock'] && (<FormSpanError errors={formErrors['qty_stock']} />)}
            </div>
        </FormStep>
    );
}