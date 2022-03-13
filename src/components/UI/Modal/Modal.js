import { Fragment} from "react";
import ReactDOM from 'react-dom';
import './Modal.css';
const  BackDrop = () => {
    return(<div className="backdrop"></div>)
}

const ModalOverlay = (props) => {

    return(<div className="overlay">{props.children}</div>)
    
}

const Modal = props => {
    const element = document.querySelector("#modal")

    return(
        <Fragment>
        {ReactDOM.createPortal(<BackDrop />, element)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, element)}
        </Fragment>
    )
}

export default Modal;