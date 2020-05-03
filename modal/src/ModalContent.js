import React from "react";
import { ModalContext } from "./ModalContext";

class ModalContent extends React.Component {

    static contextType = ModalContext;
    
    render() {
        return(
            <div className="modal-component">
                 {this.props.children || <h1>Tu powinieneś coś wpisać</h1>}
            </div>
        )
    }
}

export default ModalContent 