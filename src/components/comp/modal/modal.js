import React, {Component, Suspense, Profiler} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import {connect} from "react-redux";
import {action} from "Action/action";

class ModalComponent extends Component{

    constructor(props){
        super(props);


    }

    render(){
        let {active,content,fnOk,buttons} = this.props.modal;
        return(
            <Modal isOpen={active} toggle={this.toggle}>
                <ModalBody>
                    {content}
                </ModalBody>
                <ModalFooter>
                    {buttons.ok!=undefined ? <Button color="primary" onClick={fnOk}>{buttons.ok}</Button> :null}
                    <Button color="secondary" onClick={this.toggle}>{buttons.cancel}</Button>
                </ModalFooter>
            </Modal>
        )
    }

    toggle = () =>{
        this.props.dispatch({
            type:action.modal.HIDE_MODAL
        })
    }







}

const mapStateFromProps = (store)=>{


    return {
        modal: store.modal
    }
}
export default connect(mapStateFromProps)(ModalComponent);