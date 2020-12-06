import React, {Component, Fragment} from "react";
import {Jumbotron,Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";
import {Redirect} from "react-router-dom";
import {action} from "Action/action";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            userName:null,
            password:null,
        }

    }

    render(){

        return(
        <Fragment>
            { localStorage.getItem("userName")!="admin"?
                <Jumbotron>
                    <h1 className="display-3">Добро пожаловать!</h1>
                    <p className="lead">На нашем сайте вы найдете много интересных новостей!</p>
                    <hr className="my-2"/>
                    <Form onSubmit={this.submit}>
                        <FormGroup>
                            <Label for="exampleEmail">Username</Label>
                            <Input type="text" name="userName" id="userName" placeholder="User name"
                                   onChange={this.login}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password"
                                   onChange={this.password}/>
                        </FormGroup>
                        <Button>Войти</Button>
                    </Form>

                </Jumbotron>:<Redirect to="/Profile" />
            }
        </Fragment>
        )
    }

    modalToggle = () =>{
        this.props.dispatch({
            type : action.modal.SHOW_MODAL,
            content: "Вы ввели не корректные данные. Хотите повторить попытку?",
            buttons: {
                cancel:"Отмена",
                ok: "Еще раз"
            },
        })
    }

    login= (e)=>{
        this.setState({
            userName:e.target.value
        })
    }
    password= (e)=>{
        this.setState({
            password:e.target.value
        })
    }
    submit = (e) => {
        e.preventDefault();
        let userName = this.state.userName.toLowerCase()

        if (this.state.password === "12345" && userName === "admin") {

            this.props.dispatch({
                type: action.login.LOGIN_OK,
            })

            e.target.reset()
        } else {
            this.props.dispatch({
                type: action.modal.SHOW_MODAL,
                content: "Вы ввели не корректные данные. Повторить?",
                buttons: {
                    cancel: "Отмена",
                    ok: "Повторить",
                },
                fnOk:this.toggle
            })
            e.target.reset()
        }
    }
    toggle = () =>{
        this.props.dispatch({
            type:action.modal.HIDE_MODAL
        })
    }
    componentDidMount(){

    }

}

const mapStateFromProps = (store)=>{
    return {
        modal: store.modal,
        login: store.login
    }
}


export default connect(mapStateFromProps)(Login);