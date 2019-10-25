import React, {Component} from 'react'
import { connect } from 'react-redux';
import Modal from '../../../common/Modal';
import AddEmployee from '../../AddEmployee/AddEmployee';
import './EmployeeContent';
import EmployeeContent from './EmployeeContent';

class EmployeeDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
         modalDisplay: false
        };
      }


    render() {
        const { modalDisplay } = this.state;
        return (
           <div className="employee-details">
               {modalDisplay ? <div onClick={() => {this.setState({modalDisplay: false})}} className="modal-outer-div">
                   <Modal>
                       <AddEmployee closeModal={() => {this.setState({modalDisplay: false})}}/>
                   </Modal>
               </div>: null}
               <div className="header">
               <div>Employee Details</div>
               <div>
                   <button onClick={() => {this.setState({modalDisplay: true})}} className="add-new" type="button">
                       Add Employee
                    </button>
               </div>
               </div>
               <EmployeeContent />
               </div>
        )
    }
}

const mapStateToProps = state =>( {
    // tabs: state.tabs,
    // modalDisplay: state.employeeDetails.showModal
    })

export default connect(mapStateToProps, null)(EmployeeDetails);