import React , { Component } from 'react';
import { connect } from 'react-redux';
import {NAME,COMPANY_NAME,CONTACT_NO,EMAIL_ID,DESIGNATION} from '../../../constants/constants';
class EmployeeContent extends Component {

  render() {
      const { currentEmployee, allEmployees } = this.props;
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
             {Object.values(allEmployees).map(el => (
                   <div key={el} className="table-row">
                   <div className="manipulate">
                       <span className="edit">Edit</span>
                       <span className="delete">Delete</span>
                   </div>
                   <div className="info-block">
                   <div>{el[NAME]}</div>
                   <div>{el[COMPANY_NAME]}</div>
                   <div>{el[EMAIL_ID]}</div>
                   <div>{el[CONTACT_NO]}</div>
                   <div>{el[DESIGNATION]}</div>
                   </div>
               </div>
             ))}
          </div>
      )
  }
}

const mapStateToProps = state => ({
    currentEmployee: state.employeeDetails.currentEmployee,
    allEmployees: state.employeeDetails.allEmployees
})

export default connect(mapStateToProps, null)(EmployeeContent);