import React from 'react';
import { connect } from 'react-redux';
import {UPDATE_INPUT_VALUE} from '../constants/actionTypes';

 const Select = (props) => {
    const { headerName, options, currentValue} = props;

    const handleChange = (e) => {
        const {updateInputValue} = props;
        updateInputValue(headerName, e.target.value)
    }
    return (
        <div>
            <div className="input-header">
                {headerName}
            </div>
            <select onChange={handleChange}>
             {options.map(el => (
                 <option selected={el === currentValue} key={el}>{el}</option>
             ))}
            </select>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    updateInputValue: (headerName, value) => dispatch({ type: UPDATE_INPUT_VALUE, headerName, value})
})
export default connect(null, mapDispatchToProps)(Select);
