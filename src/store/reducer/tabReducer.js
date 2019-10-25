
const initialState = () => ({
  tabOptions: {  'Add New Employee': {
        contentComponent : [],
        path: '/'
    },
    'Employee Details': {
        contentComponent : [],
        path: '/employee-details'
    }},
    activeTab: 'Add New Employee'
})

const tabReducer = (state = initialState(), action = {}) => {
    switch(action.type) {
        default: {
            return {
                ...state
            }
        }
    }
}

export default tabReducer;