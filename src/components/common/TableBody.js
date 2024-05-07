import { FaRegPenToSquare, FaRegTrashCan } from 'react-icons/fa6';

export const TableBody = ({tableRows, tableColumns}) => {
    return (
        <tbody>
            {tableRows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {tableColumns.map((column, columnIndex) => (
                        <td key={`${rowIndex}-${columnIndex}`}>{row[column.api]}</td>
                    ))}

                    <td>
                        <span><FaRegPenToSquare />Editar</span>
                        <span><FaRegTrashCan />Apagar</span>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}