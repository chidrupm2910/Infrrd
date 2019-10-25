import Input from '../../common/Input';
import Select from '../../common/Select';
import {NAME,COMPANY_NAME,CONTACT_NO,EMAIL_ID,DESIGNATION} from '../../constants/constants';

import { UPDATE_INPUT_VALUE } from '../../constants/actionTypes';

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
        [NAME]: 'Chidrup',
        [COMPANY_NAME]: 'Infrrd',
        [EMAIL_ID]: 'cmahakali@gmail.com',
        [CONTACT_NO]: 123456789,
        [DESIGNATION]: 'Senior Software Developer'
    }
})

const EmployeeReducer = (state = initialState(), action = {}) => {
    switch(action.type) {
       
        case UPDATE_INPUT_VALUE: {
            const newState = {...state.currentEmployee};
            newState[action.headerName] = action.value
            return {
                ...state,
                ...newState
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