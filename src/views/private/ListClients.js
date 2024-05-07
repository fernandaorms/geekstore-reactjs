import { Table } from '../../components/common/Table';
import { columns } from '../../utils/tables/table-clients-columns';

export const ListClients = () => {
    const tableConfig = {
        tableId: 'clientList',
        apiUrl: '/client',
        errorMessage: 'Não foi possível carregar a lista de Clientes, consulte os desenvolvedores.',
        emptyTableMessage: 'Não há Clientes cadastrados.',
        columns: columns
    };

    return (
        <div className='main'>
            <div className='introduction'>
                <div className='title'>
                    <h1>Clientes</h1>
                </div>
            </div>
            
            <div>
                <Table tableConfig={tableConfig} />
            </div>
        </div>
    );
};