import React, {Fragment} from "react";
import {Card,CardImg,CardText,CardBody,CardTitle,Button,ButtonGroup,Modal,ModalBody,ModalFooter,ModalHeader,
    Spinner,    Alert,    Collapse,    Form,    FormGroup, Label, Input,} from 'reactstrap';

import {Link,} from "react-router-dom";
import {connect} from "react-redux";
import {action} from "Action/action";
import CreateCommentForm from "Comp/comp/formPOST/form"
import NewsItem from "Comp/home/item";



class NewsInside extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item:null,
            comments: [],
            isOpen:false,
            setIsOpen:false
        }

    }

    render(){
        let {item,isOpen,setIsOpen,comments} = this.state;

        return  <Fragment>
            {      localStorage.getItem("userName")=="admin"?
                <Fragment>
                    {item !=null ?
                        <Fragment>
                            <Card>
                                {
                                    <CardBody>
                                        <CardTitle tag="h2">{item.title}</CardTitle>
                                        <CardImg  className={"prevImg"} src={item.src} alt="Card image cap" />

                                        <CardText>{item.full_text}</CardText>
                                        <Link to={this.props.location.state.prevPath }><span className={"btn btn-success"} color={'success'}>К списку</span></Link>
                                        <span className={"btn btn-secondary"} color="primary" onClick={this.toggle}>Написать комментарий</span>
                                        <Collapse isOpen={isOpen}>
                                            <Card>
                                                <CardBody>
                                                    <CreateCommentForm fnOkay={this.addComment} id={this.state.item._id}/>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </CardBody>
                                }
                            </Card>
                            <h2>Комментарии:</h2>

                            {
                                comments.length>0?
                                    comments.map((comment)=>
                                        <Alert color={"secondary "} key={comment.id}>
                                            <h3>Пользователь:{comment.name}</h3>
                                            <h4>Email:{comment.email}</h4>
                                            <p>{comment.comment_text}</p>

                                        </Alert>):
                                    <Spinner />
                            }

                        </Fragment>:<Spinner /> }</Fragment>:<h1>Данная страница доступна только авторизованным пользователям</h1>
            }
        </Fragment>
    }


    addComment = (data) =>{

        this.setState({
            comments : [{
                "newsId":this.state.item.id,
                "name" : data.get("name"),
                "email" : data.get("email"),
                "comment_text":data.get("comment_text")
            },...this.state.comments]

        })
        this.props.dispatch({
            type:action.modal.HIDE_MODAL,
        })
    }

    toggle = () =>  {
        this.setState({
            isOpen : !this.state.isOpen
        })
    }


    componentDidMount() {
        let {_id} = this.props.match.params;
        let {newsId} = this.props.match.params;
        console.log(11,this.props.match.params)
        const url = `https://jsonproject-81e4.restdb.io/rest/json/${_id}`;
        const urlComment = `https://jsonproject-81e4.restdb.io/rest/comments?q={"newsId":"${_id}"}`;
        const headers = new Headers({
            "content-type": "application/json",
            "x-apikey": "5fc7c009e8c44553528c8eb6",
            "cache-control": "no-cache",

        });
        const options = {
            headers,
            async: true,
            method:"GET"
        };
        const optionsComment = {
            headers,
            async: true,
        }
        fetch(url, options)
            .then((data)=>data.json())
            .then((item)=>this.setState({
                item:item,
            }))

        fetch(urlComment, optionsComment)
            .then((comment)=>comment.json())
            .then((comments)=>this.setState({
                comments: [...comments]
            }))
    }


}

const mapStateFromProps = (store)=>{
    return {
        modal: store.modal
    }
}
export default connect(mapStateFromProps)(NewsInside);