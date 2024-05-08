import { FormStep } from '../common/FormStep';
import { FormLabel } from '../common/FormLabel';
import { FormSpanError } from '../common/FormSpanError';

export const FormCreateProductStep1 = ({ formState, handleChange, validateForm, formErrors }) => {
    return(
        <FormStep title='Dados Básicos' number='1'>
            <div className='col-lg-6'>
                <FormLabel label='Nome do Produto' fieldId='productName'/>
        
                <input
                    type='text'
                    id='productName'
                    className='form-control'
                    name='name'
                    placeholder=''
                    value={formState['name'] || ''} 
                    onChange={handleChange}
                    onBlur={(e) => {validateForm(e.target.name);}}
                />

                {formErrors['name'] && (<FormSpanError errors={formErrors['name']} />)}
            </div>
            
            <div className='col-lg-6'>
                <FormLabel label='Código (SKU)' fieldId='productCode'/>
        
                <input
                    type='text'
                    id='productCode'
                    className='form-control'
                    name='sku'
                    placeholder=''
                    value={formState['sku'] || ''} 
                    onChange={handleChange}
                    onBlur={(e) => {validateForm(e.target.name);}}
                />

                {formErrors['sku'] && (<FormSpanError errors={formErrors['sku']} />)}
            </div>

            <div className='col-lg-6'>
                <FormLabel label='Preço Venda' fieldId='productPrice'/>
        
                <input
                    type='number'
                    id='productPrice'
                    className='form-control'
                    name='price'
                    placeholder=''
                    value={formState['price'] || ''} 
                    onChange={handleChange}
                    onBlur={(e) => {validateForm(e.target.name);}}
                />

                {formErrors['price'] && (<FormSpanError errors={formErrors['price']} />)}
            </div>

            <div className='col-lg-6'>
                <FormLabel label='Categoria' fieldId='productCategory'/>
        
                <select 
                    id='productCategory'
                    name='category'
                    className='form-select'
                    onChange={handleChange}
                    value={formState['category'] || '0'}
                    onBlur={(e) => {validateForm(e.target.name, 'select');}}
                >
                    <option value='0'>Sem Categoria</option>
                    <option value='1'>Categoria 1</option>
                    <option value='2'>Categoria 2</option>
                    <option value='3'>Categoria 3</option>
                </select>

                {formErrors['category'] && (<FormSpanError errors={formErrors['category']} />)}
            </div>
        </FormStep>
    );
}