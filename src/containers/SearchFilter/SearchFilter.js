import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NAME} from '../../constants/constants';
import './SearchFilter.css'

class SearchFilter extends Component {


    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { allEmployees } = this.props;
        return (
            <div className="search-filter">
                <div className="input-div">
                    <input type="text" placeholder="Filter By Name..." />
                </div>
                <div className="list">
                 {Object.values(allEmployees).map(el => {
                 return <div className="list-item" key={el}> <i className="fa fa-check"></i> <span className="filter-value">{el[NAME]}</span></div>
                 })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    allEmployees : state.employeeDetails.allEmployees
})

export default connect(mapStateToProps, null)(SearchFilter);