import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, Container} from "reactstrap";
import Header from "Comp/header";
import Footer from "Comp/footer";
import Home from "Comp/home";
import Profile from "Comp/profile";
import Login from "Comp/login/login";
import Page404 from "Comp/404";

import NewsInside from "Comp/news/itemInside";
import NewsItem from "Comp/home/item";
import Message from "Comp/comments/message";
import Modal from "Comp/comp/modal/modal";
import News from "Comp/news/index"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            items:null,
        }

    }

    render(){


        let {} = this.state;

        console.log(111,this.props)
        return(

            <Router>
                <Container>
                    <Header />

                    <Switch>
                        <Route exact path={"/"} component = {Home} />
                        <Route exact path={"/home"} component = {()=><Home title={333333}/>} />
                        <Route exact path={"/profile"} component = {Profile} />
                        <Route exact path={"/news"} component = {News} />
                        <Route exact path={'/news/article/:_id'} component = {NewsInside} />
                        <Route exact path={"/login"} component = {Login} />
                        <Route component = {Page404} />

                    </Switch>


                    {
                        this.props.message.active ? <Message /> : null
                    }

                    {
                        this.props.modal.active ?<Modal /> : null
                    }
                    {
                        this.props.login.logOk ?<Login /> : null
                    }
                    <Footer />
                </Container>
            </Router>
        )
    }

    componentDidMount(){
        console.log("------componentDidMount");

       /* fetch("https://jsonplaceholder.typicode.com/todos")
            .then(data=>data.json())
            .then(todos=>{
                    // let date =  this.randomDate(todos)
                    // this.setState({
                    //     items: [... date],
                    //     itemsCount : todos.length,
                    //     sortedItems:[... date],
                    // })
                })
            .catch(error=>console.log(error));
*/
    }
}

const mapStateFromProps = (store)=>{


    return {
        message: store.message,
        modal: store.modal,
        login: store.login

    }
}


export default connect(mapStateFromProps)(App);