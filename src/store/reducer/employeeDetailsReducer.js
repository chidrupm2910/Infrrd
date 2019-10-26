import Input from '../../common/Input';
import Select from '../../common/Select';
import {NAME,COMPANY_NAME,CONTACT_NO,EMAIL_ID,DESIGNATION} from '../../constants/constants';
import allEmployees from '../../constants/employees';

import { UPDATE_INPUT_VALUE, ADD_NEW_EMPLOYEE, UPDATE_CURRENT_EMPLOYEE, DELETE_AN_EMPLOYEE } from '../../constants/actionTypes';

const initialState = () => ({
    details: {
        [NAME]: {
            filter: '',
            pattern: '',
            type: 'text',
            contentComponent: Input
        },
        [COMPANY_NAME]: {
            filter: '',
            pattern: '',
            type: 'text',
            contentComponent: Input
        },
        [EMAIL_ID]: {
            filter: '',
            pattern: '/@infrrd\\.com$/',
            type: 'email',
            contentComponent: Input
        },
        [CONTACT_NO]: {
            filter: '',
            pattern: '',
            type: 'number',
            contentComponent: Input
        },
        [DESIGNATION]: {
            filter: '',
            pattern: '',
            type: '',
            contentComponent: Select,
            options:['Software Developer', 'Senior Software Developer', 'Quality Assurance','Technical Lead', 'Manager']
        }
    },
    showModal: false,
    currentEmployee: {
        [NAME]: '',
        [COMPANY_NAME]: '',
        [EMAIL_ID]: '',
        [CONTACT_NO]: '',
        [DESIGNATION]: 'Software Developer'
    },
    allEmployees
})

const EmployeeReducer = (state = initialState(), action = {}) => {
    switch(action.type) {
       
        case UPDATE_INPUT_VALUE: {
   
            const newState = {...state.currentEmployee};
            newState[action.headerName] = action.value

            return {
                ...state,
                currentEmployee: {
                    ...state.currentEmployee,
                    ...newState
                }
            }
        }
        case ADD_NEW_EMPLOYEE: {
            let newEmployees = JSON.parse(JSON.stringify({...state.allEmployees}));
            console.log("Action", action)
            if(action.mode === 'edit'){
                delete newEmployees[action.currentName];
            }
            console.log(newEmployees)
            newEmployees[action.data[NAME].toLowerCase()] = {...action.data}
            return {
                ...state,
                currentEmployee: {...initialState().currentEmployee},
                allEmployees: {...newEmployees}
            }
        }
        case UPDATE_CURRENT_EMPLOYEE: {
            return {
                ...state,
                currentEmployee: {...action.currentEmployee}
            }
        }
        case DELETE_AN_EMPLOYEE: {
            const newState = JSON.parse(JSON.stringify({...state.allEmployees}));
            delete newState[action.name];
            return {
                ...state,
                allEmployees: {
                    ...newState
                }
              
            }
        }
       
        default: {
            return {
                ...state
            }
        }
    }
}

export default EmployeeReducer;