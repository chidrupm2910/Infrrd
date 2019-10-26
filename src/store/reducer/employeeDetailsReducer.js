import Input from '../../common/Input';
import Select from '../../common/Select';
import {NAME,COMPANY_NAME,CONTACT_NO,EMAIL_ID,DESIGNATION} from '../../constants/constants';

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
    allEmployees: {
    'chidrup':{
        [NAME]: 'Chidrup',
        [COMPANY_NAME]: 'PayPal',
        [EMAIL_ID]: 'chidrup@gmail.com',
        [CONTACT_NO]: '242131231',
        [DESIGNATION]: 'Software Developer'
    },
    'mike':{
        [NAME]: 'Mike',
        [COMPANY_NAME]: 'PayPal',
        [EMAIL_ID]: 'mike@gmail.com',
        [CONTACT_NO]: '242131231',
        [DESIGNATION]: 'Software Developer'
    },
    'chelsey': {
        [NAME]: 'Chelsey',
        [COMPANY_NAME]: 'PayPal',
        [EMAIL_ID]: 'chelsey@gmail.com',
        [CONTACT_NO]: '242131231',
        [DESIGNATION]: 'Software Developer'
    },
    'leo':{
        [NAME]: 'Leo',
        [COMPANY_NAME]: 'PayPal',
        [EMAIL_ID]: 'chidrup@gmail.com',
        [CONTACT_NO]: '242131231',
        [DESIGNATION]: 'Software Developer'
    },
    'iniesta':{
        [NAME]: 'Iniesta',
        [COMPANY_NAME]: 'PayPal',
        [EMAIL_ID]: 'mike@gmail.com',
        [CONTACT_NO]: '242131231',
        [DESIGNATION]: 'Software Developer'
    },
    'xavi': {
        [NAME]: 'Xavi',
        [COMPANY_NAME]: 'PayPal',
        [EMAIL_ID]: 'chelsey@gmail.com',
        [CONTACT_NO]: '242131231',
        [DESIGNATION]: 'Software Developer'
    },
    'pedro':{
        [NAME]: 'Pedro',
        [COMPANY_NAME]: 'PayPal',
        [EMAIL_ID]: 'chidrup@gmail.com',
        [CONTACT_NO]: '242131231',
        [DESIGNATION]: 'Software Developer'
    },
    'frenkie':{
        [NAME]: 'Frenkie',
        [COMPANY_NAME]: 'PayPal',
        [EMAIL_ID]: 'mike@gmail.com',
        [CONTACT_NO]: '242131231',
        [DESIGNATION]: 'Software Developer'
    },
    'arthur': {
        [NAME]: 'Arthur',
        [COMPANY_NAME]: 'PayPal',
        [EMAIL_ID]: 'chelsey@gmail.com',
        [CONTACT_NO]: '242131231',
        [DESIGNATION]: 'Software Developer'
    }}
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