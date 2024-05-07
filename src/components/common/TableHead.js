export const TableHead = ({tableColumns}) => {
    return (
        <thead>
            <tr>
                {tableColumns.map((column, index) => (
                    <th key={index} scope='col'>{column.value}</th>
                ))}

                <td></td>
            </tr>
        </thead>
    );
}