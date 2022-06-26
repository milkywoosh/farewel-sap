import "./style.css";


/*
    https://blog.logrocket.com/build-modal-with-react-portals/ --> good reference
*/
/*
    note: 
        * key of using Modal --> 
        position: fixed;
        background-color: rgba(0, 0, 0, 0.6)
        overflow: hidden;
        z-index: 999;

        to make sure the modal is on the FRONT-MOST position on the web ! 
*/

function Modal({children, isOpen, handleClose}) {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <button onClick={handleClose} className="close">
                close
            </button>
            <div className="modal-content">{children}</div>
        </div>
    )
}

export default Modal;