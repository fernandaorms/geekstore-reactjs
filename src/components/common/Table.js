import {useState, useEffect} from 'react';

import api from '../../services/api';

import { TableHead } from './TableHead';
import { TableBody } from './TableBody';

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

    if (loading) {
        return (
            <div className='results'>
                <div className='alert alert-info' role='alert'>Carregando...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className='results'>
                <div className='alert alert-danger' role='alert'>{tableConfig.errorMessage}</div>
            </div>
        )
    }
    
    if (!data.response || data.response.length === 0) {
        return (
            <div className='results'>
                <div className='alert alert-warning' role='alert'>{tableConfig.emptyTableMessage}</div>
            </div>
        )
    }

    return (
        <table className='table' id={tableConfig.tableId}>
            <TableHead tableColumns={tableConfig.columns} />

            <TableBody tableRows={data.response} tableColumns={tableConfig.columns} />
        </table>
    );
}