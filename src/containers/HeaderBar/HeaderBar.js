import React, {Component} from 'react';
import appLogo from '../../assets/images/infrrd-logo.png';
import './HeaderBar.css';

class HeaderBar extends Component {

    render() {

        return (
            <header className="header-container">
                <div className="image-div">      
                    <img
                    src={appLogo}
                    className="app-logo"
                    alt="logo"
                  /></div>
                  <div className="header-name">
                     <span><i className="fa fa-user"></i>Employee Management</span>
                      </div>
            </header>
        )
    }
}

export default HeaderBar;