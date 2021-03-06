import React from "react";
import { ModalContext } from "./ModalContext";

class ModalHeader extends React.Component {

    static contextType = ModalContext;
    
    render() {
        return(
            <div  className="modal-component">
                 <h1>{this.props.title || "Tu powinien znajdować się tytuł"}</h1> 
                 <button className="modal-button" onClick={this.context.toggle}>
                     Zamknij
                 </button>
            </div>
        )
    }
}

export default ModalHeader