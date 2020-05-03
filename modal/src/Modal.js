import React from "react";
import { ModalContext } from "./ModalContext";
import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";

class Modal extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isOpen: false,
        }

        this.toggle = this.toggle.bind(this);
    };
    static Footer = ModalFooter;
    static Content = ModalContent;
    static Header = ModalHeader;
    static contextType = ModalContext;

    toggle () {
        this.setState(state => ({
            isOpen: !state.isOpen
          }));
    }

    nonClickable(e) {
        e.stopPropagation()
    }

    render () {
        if (this.state.isOpen) {
            return (
                <ModalContext.Provider value={{state: this.state, toggle: this.toggle}}>
                    <div className="modal-background" onClick={this.toggle}>
                        <div className="modal-container" onClick={this.nonClickable}>
                            {this.props.children}
                        </div>
                    </div>
                </ModalContext.Provider>
            )
        } else {
            return (
                <div>
                    <button className="modal-button" onClick={this.toggle}>
                        Open Modal
                    </button>
                </div>
            )
        }
    }
}

export default Modal