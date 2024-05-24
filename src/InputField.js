
export const InputField = ({ data, inputRef }) => {
    return (
        <div style={{ padding: '10px', display: 'flex', gap: '10px' }}>
            <label>{data}:</label>
            <input ref={inputRef} placeholder={`Enter ${data}`} />
        </div>
    );
};

export const ButtonField = ({ name, func }) => {
    return (
        <div style={{ padding: '10px', display: 'flex', gap: '10px' }}>
            <button style={{ width: 'fit-content' }} onClick={func} >{name}</button>
        </div>
    );
};