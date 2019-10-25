import React from 'react';

const Modal = (props) => {


    return (
        <div onClick={(event) => {event.stopPropagation()}} className="modal-content">
           {props.children}
        </div>
    )
}

export default Modal;