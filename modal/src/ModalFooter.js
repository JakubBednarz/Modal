import React from "react";
import { ModalContext } from "./ModalContext";

class ModalFooter extends React.Component {

    clickAlert = (e) => {
        alert("OK");
        this.context.toggle()
    }

    static contextType = ModalContext;
    
    render() {
        return(
            <div className="modal-component modal-footer">
                <button className="modal-button" onClick={this.context.toggle}>Cancel</button>
                <button className="modal-button" onClick={this.clickAlert}>{this.props.callToActionLabel || "Nazwa przycisku"}</button>
            </div>
        )
    }
}

export default ModalFooter 