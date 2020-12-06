import React from "react";
import {
    Row, Col,
    Form, FormGroup, Label, Input, Button
} from 'reactstrap';


import { FaTrashAlt, FaEdit, FaInfo } from "react-icons/fa";
import {action} from "Action/action";
import {connect} from "react-redux";

class CreateCommentForm extends React.Component {

    constructor(props) {
        super(props);
        this.my = React.createRef();
        this.state = {
            modal : false,
            comments:[]
        }

    }

    render(){
        let {fnOkay,fnCancel, id} = this.props;


        console.log(212,this.props.fnOkay)

        return  <Form onSubmit={this.confirm}>
                <FormGroup>
                    <Label for="name">Пользователь</Label>
                    <Input ref={this.my} type="text" name="name" id="name" placeholder="User name" required />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Еmail</Label>
                    <Input type="email" name="email" id="email" placeholder="email" required />
                </FormGroup>
                <FormGroup>
                    <Label for="comment_text">Комментарий</Label>
                    <Input type="textarea" name="comment_text" id="comment_text" required />
                </FormGroup>
                <Button type="submit">Сохранить</Button>

        </Form>
    }

    confirm = (e) =>{

        e.preventDefault();
        let data = new FormData(e.target);
        this.props.dispatch({
            type : action.modal.SHOW_MODAL,
            content:"Вы уверены что хотите сохранить комментарий?",
            buttons: {
                cancel:"Отмена",
                ok: "Сохранить",
            },
            fnOk:()=>{this.submit(e,data);
                    this.props.dispatch({
                        type: action.message.SHOW_MESSAGE,
                        text: "Комментарий добавлен"
                    })
                setTimeout(()=>{this.props.dispatch({
                    type: action.message.HIDE_MESSAGE
                })},3000)
            }
        })

    }


    submit = (e,data) =>{

      e.preventDefault();
        const jsondata = {"newsId":this.props.id,"name":data.get("name"),"email": data.get("email"),"comment_text":data.get("comment_text")};
       // let {_id} = this.props.match.params;?q={"newsId":"${this.props.id}"}
        console.log(123,data)
        const url = `https://jsonproject-81e4.restdb.io/rest/comments`;
        const headers = new Headers({
            "content-type": "application/json",
            "x-apikey": "5fc7c009e8c44553528c8eb6",
            "cache-control": "no-cache",
            "accept": "application/json",

        });
        const options = {
            headers,
            method:"POST",
            async: true,
            "crossDomain": true,

            body: JSON.stringify(jsondata),
            "processData": false,

        };

        if(data.get("name")!="" && data.get("email")!="" && data.get("comment_text")!=""  ) {
            fetch(url,options).then(response=>{
                console.log("-----response", response)
                this.props.fnOkay(data);
                e.target.reset()
            }).catch(error=>console.error("-----response", error))
        }else{
            this.props.dispatch({
                type : action.modal.SHOW_MODAL,
                content:"заполните все поля",
                buttons: {
                    cancel:"ОК",
                }
            })
        }

        /*const jsondata = {"name": "xyz","email": "abc@mail.ru"};
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://jsonproject-81e4.restdb.io/rest/comments",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "5fc7c009e8c44553528c8eb6",
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata)
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
        });*/
    }




}

const mapStateFromProps = (store)=>{
    return {
        modal: store.modal
    }
}
export default connect(mapStateFromProps)(CreateCommentForm);