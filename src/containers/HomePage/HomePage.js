import React, {Component} from 'react';
import './HomePage.css'
import EmployeeDetails from './EmployeeDetails/EmployeeDetails';

class HomePage extends Component {

    render() {

        return (
            <React.Fragment>
           
            <div className="home-page">
            {/* <Tabs />
            <div>Tab Content</div> */}
            <EmployeeDetails />
            </div>
            </React.Fragment>
        )
    }
}

export default HomePage;