import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NAME} from '../../constants/constants';
import './SearchFilter.css'
import { UPDATE_SEARCH_EMPLOYEE_LIST, UPDATE_UNSELECTED_FILTER_LISTS, UPDATE_FILTERED_VALUES } from '../../constants/actionTypes';

class SearchFilter extends Component {


    componentDidMount() {
        const { allEmployees, searchFilter, updateSearchList, updateFilterList, } = this.props;
        if(searchFilter.searchText === '' && !(searchFilter.filterSelected)) {
            updateFilterList([...Object.keys(allEmployees)])
            updateSearchList([...Object.keys(allEmployees)], '', false);
            
        }
    }

    onListItemClicked = (name) => {
        const { searchFilter, updateSelectedLists} = this.props;
        const { filteredValues } = searchFilter;
        const index = filteredValues.indexOf(name);
        let newFilterList = (filteredValues.includes(name)) ?  [...filteredValues.slice(0, index), ...filteredValues.slice(index + 1)] : [...filteredValues, name];
        updateSelectedLists(newFilterList);
    }


    handleInputChange = (e, allEmployees) => {
        const { updateSearchList } = this.props;
      let value = e.target.value.toLowerCase();
      let keys = Object.keys(allEmployees).filter(el => el.includes(value));
    const filterApplied =  keys.length !== Object.keys(allEmployees).length;
    updateSearchList(keys, e.target.value, filterApplied);

    }

    render() {
        const { allEmployees, searchFilter, filterCallBack } = this.props;
        const {  searchText, filteredValues, actualFilterValues} = searchFilter;
        return (
            <div className="search-filter">
                <div className="close-div"><i onClick={() => {filterCallBack()}} className="fa fa-close"></i></div>
                <div className="input-div">
                    <input value={searchText} onChange={(event) => this.handleInputChange(event, allEmployees)} type="text" placeholder="Filter By Name..." />
                </div>
                <div className="list">
                    <div className="list-rows">
                 {Object.values(allEmployees).map(el => {
                     const name = el[NAME].toLowerCase()
                  if(actualFilterValues.includes(name)){
                 return <div onClick={() => this.onListItemClicked(name)} className="list-item" key={el[NAME]}> <i className={(filteredValues.includes(name)) ? "fa fa-check" : "fa fa-check unselected"}></i> <span className="filter-value">{el[NAME]}</span></div>
                  }
                  return null;
                 })}</div>
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
    updateSearchList: (employeeList, searchText, filterApplied) => dispatch({ type: UPDATE_SEARCH_EMPLOYEE_LIST, employeeList, searchText, filterApplied}),
    updateSelectedLists: ( listValues) => dispatch({ type: UPDATE_UNSELECTED_FILTER_LISTS, listValues}),
    updateFilterList: (filteredValues) => dispatch({ type: UPDATE_FILTERED_VALUES, filteredValues })
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);