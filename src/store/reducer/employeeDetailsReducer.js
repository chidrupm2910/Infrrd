import Input from '../../common/Input';
import Select from '../../common/Select';
import {NAME,COMPANY_NAME,CONTACT_NO,EMAIL_ID,DESIGNATION} from '../../constants/constants';

import { UPDATE_INPUT_VALUE, ADD_NEW_EMPLOYEE } from '../../constants/actionTypes';

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
    'Chidrup':{
        [NAME]: 'Chidrup',
        [COMPANY_NAME]: 'PayPal',
        [EMAIL_ID]: 'chidrupmahakali@gmail.com',
        [CONTACT_NO]: '242131231',
        [DESIGNATION]: 'Software Developer'
    },
    'ABC':{
        [NAME]: 'ABC',
        [COMPANY_NAME]: 'PayPal',
        [EMAIL_ID]: 'chidrupmahakali@gmail.com',
        [CONTACT_NO]: '242131231',
        [DESIGNATION]: 'Software Developer'
    },
    'CDE': {
        [NAME]: 'CDE',
        [COMPANY_NAME]: 'PayPal',
        [EMAIL_ID]: 'chidrupmahakali@gmail.com',
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
            const newEmployees = JSON.parse(JSON.stringify({...state.allEmployees}));
            newEmployees[action.data[NAME]] = {...action.data}
            return {
                ...state,
                allEmployees: {...newEmployees}
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