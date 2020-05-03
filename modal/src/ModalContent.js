import React from "react";
import { ModalContext } from "./ModalContext";

class ModalContent extends React.Component {

    static contextType = ModalContext;
    
    render() {
        return(
            <div className="modal-component">
                 {this.props.children}
            </div>
        )
    }
}

export default ModalContent 