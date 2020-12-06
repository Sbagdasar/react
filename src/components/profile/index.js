import React, {Component, Fragment} from "react";

import {Spinner, Row, Col, Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {action} from "Action/action";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Example from "Comp/comp/carusel/carusel";
import {Redirect} from "react-router-dom";
class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }

    }

    render() {
        let {items, modal} = this.state;
        console.log(this.props)
        return (
            <Fragment>
                {localStorage.getItem("userName")=="admin"?
                <Fragment>
                    <Row>
                    <Col lg={6}><h1>Профиль</h1></Col>
                </Row>
                    <Row>
                        <Col lg={12}><Example/></Col>
                    </Row>
                </Fragment>
                    : <Redirect to={"/login"}/>
                }
            </Fragment>
        )
    }


    componentDidMount() {

    }
}
const mapStateFromProps = (store)=>{
    return {
        modal: store.modal
    }
}


export default connect(mapStateFromProps)(Profile);