const Alert = ({
    title,
    type,
    message,
    onClose
}) => {
    const noFunctionFound = (e) => {
        e.preventDefault()
        console.log('No Function found');
    }

    if (!open) {
        return
    }
    
    return (
        <div className={`custom-alert-overlay rq-alert-${type}`}>
            <div className="custom-alert">
                <h2>{title}</h2>
                <p>{message}</p>
                <button onClick={onClose ? onClose : noFunctionFound}>Close</button>
            </div>
        </div>
    )
}

export default Alert