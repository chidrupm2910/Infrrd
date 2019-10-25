import React, {Component} from 'react';
import { connect } from 'react-redux';
import './AddEmployee.css';

class AddEmployee extends Component {

    componentDidMount() {

    }

    
    render() {
        console.log('This Props add Employee', this.props)
        const { details, closeModal, currentEmployee } = this.props;
        return (
            <div className="add-employee">
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
                <button disabled={Object.values(currentEmployee).some(el =>  el !== '')} type="button">
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

export default connect(mapStateToProps, null)(AddEmployee);