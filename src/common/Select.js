import React from 'react';

 const Select = (props) => {
    const { headerName, options, currentValue} = props;
    return (
        <div>
            <div className="input-header">
                {headerName}
            </div>
            <select>
             {options.map(el => (
                 <option selected={el === currentValue} key={el}>{el}</option>
             ))}
            </select>
        </div>
    )
}

export default Select;
