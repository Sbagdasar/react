import React, {Component, Fragment} from "react";
import {action} from "Action/action";
import {connect} from "react-redux";
import {Spinner, Alert,} from "reactstrap";
import NewsItem from "Comp/home/item";
class Home extends Component{

    constructor(props){
        super(props);
        this.state={
            items:[],
            sortedNew: []
        }

    }


    render(){
        let{items,sortedNew}=this.state;
        console.log(55,sortedNew)
        console.log(313,this.state.items.filter((item)=>item.status=="new"))
        return(<Fragment>
            <h1>Главная</h1>
            <div>
                {
                    sortedNew.length>0 ?
                        sortedNew.map((item)=><NewsItem info={item} key={item._id}/>):
                        <Spinner />
                }

            </div>
    </Fragment>
        )
    }
        componentDidMount(){
            const url = 'https://jsonproject-81e4.restdb.io/rest/json';
            const headers = new Headers({
                "content-type": "application/json",
                "x-apikey": "5fc7c009e8c44553528c8eb6",
                "cache-control": "no-cache"
            });
            const options = {
                headers,
            };

        fetch(url, options)
             .then(data=>data.json())
                .then(item=>{
                this.setState({
                    items: [...item],
                    sortedNew:[...item.filter((item)=>item.status=="new")],
                })

            })
    .catch(error=>console.log(error));

    }
}


const mapStateFromProps = (store)=>{
    return {
        modal: store.modal
    }
}


export default connect(mapStateFromProps)(Home);