import React from "react";
import { ModalContext } from "./ModalContext";

class ModalFooter extends React.Component {

    clickAlert = (e) => {
        alert("OK");
        this.context.toggle()
    }

    // nonClickable(e) {
    //     e.stopPropagation()
    // }

    static contextType = ModalContext;
    
    render() {
        return(
            <div onClick={this.context.nonClickable} className="modal-component modal-footer">
                <button className="modal-button" onClick={this.context.toggle}>Cancel</button>
                <button className="modal-button" onClick={this.clickAlert}>{this.props.callToActionLabel}</button>
            </div>
        )
    }
}

export default ModalFooter 