import React, {Component} from 'react'
import { connect } from 'react-redux';
import Modal from '../../../common/Modal';
import AddEmployee from '../../AddEmployee/AddEmployee';
import './EmployeeContent';
import EmployeeContent from './EmployeeContent';
import { DELETE_AN_EMPLOYEE } from '../../../constants/actionTypes';

class EmployeeDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
         modalDisplay: false,
         mode: '',
         deleteName: ''
        };
      }

      cancelConfirm = (mode, deleteName) => {
         
          if(mode === 'confirm') {
            const { removeAnEmployeeRow } = this.props;
            removeAnEmployeeRow(deleteName.toLowerCase());
          }
          this.setState({ modalDisplay: false, deleteName: ''})
      }

    render() {
        const { modalDisplay, mode, deleteName,  } = this.state;

        return (
           <div className="employee-details">
               {modalDisplay ? <div onClick={() => {this.setState({modalDisplay: false})}} className="modal-outer-div">
                   <Modal>
                       {deleteName.length === 0 ?
                       <AddEmployee mode={mode} closeModal={() => {this.setState({modalDisplay: false})}}/>
                       : <React.Fragment>
                           <div className="delete-modal">
                            <div className="text">Are you sure that you want to delete <strong>{deleteName}'s</strong> details ?</div>
                            <div className="delete-buttons">
                                <button onClick={() => {this.cancelConfirm('confirm', deleteName)}} className="confirm" type="button">Confirm</button>
                                <button onClick={() => {this.cancelConfirm('cancel', deleteName)}} className="cancel" type="button">Cancel</button>
                            </div>
                           </div>
                       </React.Fragment> }
                   </Modal>
               </div>: null}
               <div className="header">
               <div>Employee Details</div>
               <div>
                   <button onClick={() => {this.setState({modalDisplay: true, mode: 'add'})}} className="add-new" type="button">
                       Add Employee
                    </button>
               </div>
               </div>
               <EmployeeContent deleteClicked={(name) => {this.setState({ deleteName: name, modalDisplay: true})}}  openModal={() => {this.setState({modalDisplay: true, mode: 'edit'})}} />
               </div>
        )
    }
}

    const mapDispatchToProps = dispatch => ({
        removeAnEmployeeRow: (name) => dispatch({ type: DELETE_AN_EMPLOYEE, name})
    })
export default connect(null, mapDispatchToProps)(EmployeeDetails);