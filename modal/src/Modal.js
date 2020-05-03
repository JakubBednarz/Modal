import React from "react";
import { ModalContext } from "./ModalContext";
import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";

class Modal extends React.Component {
    constructor (props) {
        super(props);

        this.toggle = () => {
            this.setState(state => ({
              isOpen: !state.isOpen
            }));
          }
        
        this.nonClickable = (e) => {
            e.stopPropagation()
        }
        
          this.state = {
              isOpen: false,
              toggle: this.toggle,
              nonClickable: this.nonClickable
          }
    };

    static contextType = ModalContext;

    render () {
        const displayModal = this.state.isOpen ? "flex" : "none";
        return (
            <ModalContext.Provider value={this.state}>
                <div>
                    <button className="modal-button" onClick={this.toggle}>
                        {this.state.isOpen ? 'Close Modal' : 'Open Modal'}
                    </button>
                    <div className="modal-container" onClick={this.toggle} style={{display: displayModal}}>
                        {this.props.children}
                    </div>
                </div>
            </ModalContext.Provider>
        )
    }
}

Modal.Footer = ModalFooter;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
export default Modal