import React, {Component} from 'react';
import { connect } from 'react-redux';
import './AddEmployee.css';
import { ADD_NEW_EMPLOYEE, } from '../../constants/actionTypes';
import { EMAIL_ID ,CONTACT_NO,NAME} from '../../constants/constants'

class AddEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
         errorMessage: '',
         errorShow: false,
         currentName: ''
        };
      }

      componentDidMount() {
          const { mode, currentEmployee } = this.props;
          if(mode === 'edit') {
              this.setState({currentName: currentEmployee[NAME].toLowerCase()})
          }
      }
   

    saveClicked = (mode) => {
        
         const { currentName } = this.state;
        const { currentEmployee, addNewEmployee, allEmployees, closeModal } = this.props;
        var emailValidator = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
        if(allEmployees[currentEmployee[NAME].toLowerCase()] && mode === 'add'){
            this.setState({errorMessage: 'Employee Name already exists', errorShow: true})
           return null;
        }
        if(!(currentEmployee[EMAIL_ID].match(emailValidator))){
           this.setState({errorMessage: 'Enter a valid email address', errorShow: true})
           return null;
        } else if((currentEmployee[CONTACT_NO].length !== 10)) {
            this.setState({errorMessage: 'Enter a valid 10 digit Number', errorShow: true})
        }
        this.setState({errorShow: false})
        if(mode === 'edit') {
            closeModal();
        }
       addNewEmployee({...currentEmployee}, mode, currentName);
    }


    
    render() {

        const { details, closeModal, currentEmployee, mode } = this.props;
        const { errorMessage, errorShow } = this.state;
        return (
            <div className="add-employee">
              { errorShow ? <div className="error-message">{errorMessage}</div> : null}
            <div className="employee-header">
                <span>Employee Details</span>
                <span onClick={() => {closeModal()}}><i className="fa fa-close"></i></span>
            </div>
            <div className="add-content">
              {Object.keys(details).map(headerName => {
                  const HeaderComponent = details[headerName].contentComponent
                  return <HeaderComponent 
                  key={headerName}
                  headerName={headerName}
                  type={details[headerName].type}
                  options={details[headerName].options}
                  currentValue={currentEmployee[headerName]}
                  />
              })}
            </div>
            <div className="save-btn">
                <button onClick={() => this.saveClicked(mode)} disabled={Object.values(currentEmployee).some(el =>  el === '')} type="button">
                    {mode === 'add' ? 'Save' : 'Update'}
                </button>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    details: state.employeeDetails.details,
    currentEmployee: state.employeeDetails.currentEmployee,
    allEmployees: state.employeeDetails.allEmployees
})

const mapDispatchToProps = dispatch => ({
   addNewEmployee: (data, mode, currentName) => dispatch({ type: ADD_NEW_EMPLOYEE, data, mode, currentName})
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);