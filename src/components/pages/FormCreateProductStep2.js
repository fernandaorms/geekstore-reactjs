import { FormStep } from '../common/FormStep';
import { FormLabel } from '../common/FormLabel';
import { FormSpanError } from '../common/FormSpanError';

export const FormCreateProductStep2 = ({ formState, handleChange, validateForm, formErrors }) => {
    return(
        <FormStep title='Características' number='2'>
            <div className='col-lg-6'>
                <FormLabel label='Peso' fieldId='productWeight'/>
        
                <input
                    type='number'
                    id='productWeight'
                    className='form-control'
                    name='size_weight'
                    placeholder=''
                    value={formState['size_weight'] || ''} 
                    onChange={handleChange}
                    onBlur={(e) => {validateForm(e.target.name);}}
                />

                {formErrors['size_weight'] && (<FormSpanError errors={formErrors['size_weight']} />)}
            </div>
            
            <div className='col-lg-6'>
                <FormLabel label='Largura' fieldId='productWidth'/>
        
                <input
                    type='number'
                    id='productWidth'
                    className='form-control'
                    name='size_width'
                    placeholder=''
                    value={formState['size_width'] || ''} 
                    onChange={handleChange}
                    onBlur={(e) => {validateForm(e.target.name);}}
                />

                {formErrors['size_width'] && (<FormSpanError errors={formErrors['size_width']} />)}
            </div>

            <div className='col-lg-6'>
                <FormLabel label='Altura' fieldId='productHeight'/>
        
                <input
                    type='number'
                    id='productHeight'
                    className='form-control'
                    name='size_height'
                    placeholder=''
                    value={formState['size_height'] || ''} 
                    onChange={handleChange}
                    onBlur={(e) => {validateForm(e.target.name);}}
                />

                {formErrors['size_height'] && (<FormSpanError errors={formErrors['size_height']} />)}
            </div>

            <div className='col-lg-6'>
                <FormLabel label='Comprimento' fieldId='productLength'/>
        
                <input
                    type='number'
                    id='productLength'
                    className='form-control'
                    name='size_length'
                    placeholder=''
                    value={formState['size_length'] || ''} 
                    onChange={handleChange}
                    onBlur={(e) => {validateForm(e.target.name);}}
                />

                {formErrors['size_length'] && (<FormSpanError errors={formErrors['size_length']} />)}
            </div>

            <div className='col-lg-6'>
                <FormLabel label='Items p/caixa' fieldId='productItemsPerBox'/>
        
                <input
                    type='number'
                    id='productItemsPerBox'
                    className='form-control'
                    name='qty_items_per_box'
                    placeholder=''
                    value={formState['qty_items_per_box'] || ''} 
                    onChange={handleChange}
                    onBlur={(e) => {validateForm(e.target.name);}}
                />

                {formErrors['qty_items_per_box'] && (<FormSpanError errors={formErrors['qty_items_per_box']} />)}
            </div>

            <div className='col-lg-6'>
                <FormLabel label='GTIN/EAN' fieldId='productEAN'/>
        
                <input
                    type='text'
                    id='productEAN'
                    className='form-control'
                    name='ean'
                    placeholder=''
                    value={formState['ean'] || ''} 
                    onChange={handleChange}
                    onBlur={(e) => {validateForm(e.target.name);}}
                />

                {formErrors['ean'] && (<FormSpanError errors={formErrors['ean']} />)}
            </div>

            <div className='col-lg-6'>
                <FormLabel label='Descrição' fieldId='productDescription'/>
        
                <textarea
                    id='productDescription'
                    className='form-control'
                    name='description'
                    placeholder=''
                    value={formState['description'] || ''} 
                    onChange={handleChange}
                    onBlur={(e) => {validateForm(e.target.name, 'textarea');}}
                />

                {formErrors['description'] && (<FormSpanError errors={formErrors['description']} />)}
            </div>

            
        </FormStep>
    );
}