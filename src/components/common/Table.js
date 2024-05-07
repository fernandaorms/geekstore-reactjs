import {useState, useEffect} from 'react';

import api from '../../services/api';

import { Loading } from './Loading';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { TableResults } from './TableResults';

export const Table = ({ tableConfig }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            api.get(tableConfig.apiUrl)
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    setError(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        };

        fetchData();
    }, [tableConfig.apiUrl]);

    if (loading) return ( <Loading /> );

    if (error) return ( <TableResults type='danger' message={`${error.message} - ${tableConfig.errorMessage}`} /> );
    
    if (!data.response || data.response.length === 0) return ( <TableResults type='warning' message={tableConfig.emptyTableMessage} /> );

    return (
        <table className='table' id={tableConfig.tableId}>
            <TableHead tableColumns={tableConfig.columns} />

            <TableBody tableRows={data.response} tableColumns={tableConfig.columns} />
        </table>
    );
}