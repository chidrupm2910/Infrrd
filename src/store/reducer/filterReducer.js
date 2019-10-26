import { UPDATE_SEARCH_EMPLOYEE_LIST, UPDATE_UNSELECTED_FILTER_LISTS, UPDATE_FILTERED_VALUES } from '../../constants/actionTypes';

const initialState = () => ({
    searchText: '',
    employeeList: [],
    filterApplied: false,
    unselectedList: [],
    filteredValues: [], 
    actualFilterValues: [],
    filterSelected: false
})
const FilterReducer = (state = initialState(), action = {}) => {
switch(action.type) {

    case UPDATE_SEARCH_EMPLOYEE_LIST: {
        const filterList = [...state.filteredValues]
        const employeeList =  action.employeeList.filter(value => filterList.includes(value))
        return {
            ...state,
            searchText: action.searchText,
            employeeList:employeeList,
            filterApplied: action.filterApplied,
            actualFilterValues: [...action.employeeList],
            filterList: [...employeeList]
        }
    }
    case UPDATE_UNSELECTED_FILTER_LISTS: {
        const list = [...state.actualFilterValues]
        const employeeList =  action.listValues.filter(value => list.includes(value))
        return {
            ...state,
            filteredValues: action.listValues,
            filterSelected: !(action.listValues === state.actualFilterValues.length),
            employeeList: [...employeeList]
        }
    }

    case UPDATE_FILTERED_VALUES: {
        return {
            ...state,
            filteredValues: [...action.filteredValues],
            actualFilterValues: [...action.filteredValues],
            employeeList: [...action.filteredValues]

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