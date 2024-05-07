import { Table } from '../../components/common/Table';
import { columns } from '../../utils/tables/table-products-columns';

export const Products = () => {
    const tableConfig = {
        tableId: 'productList',
        apiUrl: '/product',
        errorMessage: 'Não foi possível carregar a lista de Produtos, consulte os desenvolvedores.',
        emptyTableMessage: 'Não há Produtos cadastrados.',
        columns: columns
    };

    return (
        <div className='main'>
            <div className='introduction'>
                <div className='title'>
                    <h1>Produtos</h1>
                </div>
            </div>
            
            <div>
                <Table tableConfig={tableConfig} />
            </div>
        </div>
    );
};