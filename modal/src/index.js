import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal"

const App = () => {
    return (
        <Modal>
            <Modal.Header title={'Tytuł modala'}/>
            <Modal.Content>
                <h1>To powinno zadziałać</h1>
            </Modal.Content>
            <Modal.Footer callToActionLabel={'Udało się'}/>
        </Modal>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)