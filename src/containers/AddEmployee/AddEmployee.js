import React, {Component} from 'react';
import { connect } from 'react-redux';
import './AddEmployee.css';
import { ADD_NEW_EMPLOYEE } from '../../constants/actionTypes';

class AddEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
         errorMessage: 'Error Occured'
        };
      }
   
    saveClicked = () => {
        const { currentEmployee, addNewEmployee } = this.props;
       addNewEmployee({...currentEmployee});
    }


    
    render() {

        const { details, closeModal, currentEmployee } = this.props;
        const { errorMessage } = this.state;
 
        return (
            <div className="add-employee">
                <div className="error-message">{errorMessage}</div>
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
                  pattern={details[headerName].pattern}
                  options={details[headerName].options}
                  currentValue={currentEmployee[headerName]}
                  />
              })}
            </div>
            <div className="save-btn">
                <button onClick={() => this.saveClicked()} disabled={Object.values(currentEmployee).some(el =>  el === '')} type="button">
                    Save
                </button>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    details: state.employeeDetails.details,
    currentEmployee: state.employeeDetails.currentEmployee
})

const mapDispatchToProps = dispatch => ({
   addNewEmployee: (data) => dispatch({ type: ADD_NEW_EMPLOYEE, data})
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);