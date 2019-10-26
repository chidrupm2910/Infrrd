import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NAME} from '../../constants/constants';
import './SearchFilter.css'
import { UPDATE_SEARCH_EMPLOYEE_LIST } from '../../constants/actionTypes';

class SearchFilter extends Component {


    constructor(props) {
        super(props);
        this.state = {
            // employeeList: []
        }
    }

    componentDidMount() {
        const { allEmployees, searchFilter, updateSearchList } = this.props;
        if(searchFilter.searchText === '') {
            updateSearchList([...Object.keys(allEmployees)], '', false);
        }
    }


    handleInputChange = (e, allEmployees) => {
        const { updateSearchList } = this.props;
      let value = e.target.value.toLowerCase();
    //   let result = {};
      let keys = Object.keys(allEmployees).filter(el => el.includes(value));
    //   keys.forEach(el => {
    //       result[el]
    //   })
    const filterApplied =  keys.length !== Object.keys(allEmployees).length;
    updateSearchList(keys, e.target.value, filterApplied);

    }

    render() {
        const { allEmployees, searchFilter } = this.props;
        const { employeeList, searchText} = searchFilter;
        // const { employeeList } = this.state;
        return (
            <div className="search-filter">
                <div className="input-div">
                    <input value={searchText} onChange={(event) => this.handleInputChange(event, allEmployees)} type="text" placeholder="Filter By Name..." />
                </div>
                <div className="list">
                 {Object.values(allEmployees).map(el => {
                     console.log('Condition', employeeList.includes(el[NAME]))
                  if(employeeList.includes(el[NAME].toLowerCase())){
                 return <div className="list-item" key={el[NAME]}> <i className="fa fa-check"></i> <span className="filter-value">{el[NAME]}</span></div>
                  }
                  return null;
                 })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    allEmployees : state.employeeDetails.allEmployees,
    searchFilter: state.searchFilter
})

const mapDispatchToProps = dispatch => ({
    updateSearchList: (employeeList, searchText, filterApplied) => dispatch({ type: UPDATE_SEARCH_EMPLOYEE_LIST, employeeList, searchText, filterApplied})
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);