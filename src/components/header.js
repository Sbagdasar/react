import React, {Fragment} from "react";
import {  Row, Col , Button, ButtonGroup,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText } from 'reactstrap';
import {Link,withRouter } from "react-router-dom";
import {connect} from "react-redux";
import {action} from "Action/action";


class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){

        return <div className={"card-header"}>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Главная</NavbarBrand>
                  <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/news/">Новости</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Profile/">Профиль</NavLink>
                        </NavItem>

                      {
                            localStorage.getItem("userName")!="admin"?
                                <NavItem>
                                        <NavLink href="/login/">Вход</NavLink>
                                </NavItem>
                          :     null
                      }
                      {
                          localStorage.getItem("userName")=="admin"?
                      <NavItem>
                          <NavLink className={"nav-link"} onClick={()=>{
                              this.props.dispatch({
                                  type: action.modal.SHOW_MODAL,
                                  content:"Хотите выйти?",
                                  buttons:{
                                      ok:"Да",
                                      cancel:"Нет"
                                  },
                                  fnOk:()=>{
                                      this.props.dispatch({
                                          type: action.login.LOGIN_ERROR,
                                      })
                                      this.toggle()
                                  }
                              })
                          }}>Выход</NavLink>
                      </NavItem>
                              :     null
                      }
                    </Nav>
                    <NavbarText>Новостной портал</NavbarText>
            </Navbar>
        </div>
    }

    toggle = () =>{
        this.props.dispatch({
            type:action.modal.HIDE_MODAL
        })

    }

}
const mapStateFromProps = (store)=>{
    return {
        modal: store.modal,
        login: store.login
    }
}
export default connect(mapStateFromProps)(Header);