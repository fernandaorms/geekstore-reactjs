export const FormStep = ({title, number, children}) => {
    return(
        <div className={`step step-${number}`}>
            <div className='title'>
                <h3>{title}</h3>
            </div>

            <div className='fields'>
                {children}
            </div>
        </div>
    );
}