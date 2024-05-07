export const TableResults = ({message, type}) => {
    return (
        <div className='results'>
            <div className={`alert alert-${type}`} role='alert'>{message}</div>
        </div>
    )
}