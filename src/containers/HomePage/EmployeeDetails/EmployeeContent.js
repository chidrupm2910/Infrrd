import React , { Component } from 'react';
import { connect } from 'react-redux';
import {NAME,COMPANY_NAME,CONTACT_NO,EMAIL_ID,DESIGNATION} from '../../../constants/constants';
import { UPDATE_CURRENT_EMPLOYEE } from '../../../constants/actionTypes';
class EmployeeContent extends Component {

    editClicked = (currentEmployee) => {
     const { openModal, updateCurrentEmployee } = this.props;
     updateCurrentEmployee(currentEmployee);
     openModal()
    }

  render() {
      const { allEmployees, deleteClicked, filterApplied, employeeList } = this.props;
      console.log('Employee List', employeeList);
      return (
          <div className="employee-tabular-content">
             <div className="table-header">
                 <div className="manipulate"></div>
                 <div className="info-block">
                 <div>Name</div>
                 <div>Company</div>
                 <div>Email Id</div>
                 <div>Contact Info</div>
                 <div>Designation</div>
                 </div>
             </div>
             {Object.values(allEmployees).map(el => {
                 if(!(filterApplied) || employeeList.includes(el[NAME].toLowerCase())){
                 return (
                   <div key={el[NAME]} className="table-row">
                   <div className="manipulate">
                       <span onClick={() => this.editClicked(el)} className="edit">Edit</span>
                       <span onClick={() => {deleteClicked(el[NAME])}} className="delete">Delete</span>
                   </div>
                   <div className="info-block">
                   <div>{el[NAME]}</div>
                   <div>{el[COMPANY_NAME]}</div>
                   <div>{el[EMAIL_ID]}</div>
                   <div>{el[CONTACT_NO]}</div>
                   <div>{el[DESIGNATION]}</div>
                   </div>
               </div>
             )}
             return null;
             })}
          </div>
      )
  }
}

const mapStateToProps = state => ({
    currentEmployee: state.employeeDetails.currentEmployee,
    allEmployees: state.employeeDetails.allEmployees,
    employeeList: state.searchFilter.employeeList,
    filterApplied:  state.searchFilter.filterApplied
});

const mapDispatchToProps = dispatch => ({
    updateCurrentEmployee: (currentEmployee) => dispatch({ type: UPDATE_CURRENT_EMPLOYEE, currentEmployee}),
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContent);