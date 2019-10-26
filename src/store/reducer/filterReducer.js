import { UPDATE_SEARCH_EMPLOYEE_LIST } from '../../constants/actionTypes';

const initialState = () => ({
    searchText: '',
    employeeList: [],
    filterApplied: false
})
const FilterReducer = (state = initialState(), action = {}) => {
switch(action.type) {

    case UPDATE_SEARCH_EMPLOYEE_LIST: {
        return {
            ...state,
            searchText: action.searchText,
            employeeList: [...action.employeeList],
            filterApplied: action.filterApplied
        }
    }
    default: {
        return {
            ...state
        }
    }
}
}

export default FilterReducer;