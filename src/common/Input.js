import React from 'react';
import { connect } from 'react-redux';
import {UPDATE_INPUT_VALUE} from '../constants/actionTypes';

const Input = (props) => {
    const { headerName, type, pattern, currentValue } = props;
    return (
        <div className="input-section">
            <div className="input-header">
                {headerName}
            </div>
            <div className="input-div">
                <input placeholder={'Enter ' + headerName + '...'} value={currentValue} required type={type} />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    updateInputValue: (headerName, value) => dispatch({ type: UPDATE_INPUT_VALUE, headerName, value})
})
export default connect(null, mapDispatchToProps)(Input);