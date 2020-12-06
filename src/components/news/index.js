import React, {Component, Fragment} from "react";
import {action} from "Action/action";
import {connect} from "react-redux";
import {Spinner,} from "reactstrap";
import NewsItem from "Comp/news/item";
import Sort from "Comp/news/sort";

class News extends Component{

    constructor(props){
        super(props);
        this.state={
            items:[],
            flag:null,
            sortedItems:[],
        }

    }


    render(){
        let{items, sortedItems}=this.state;
console.log(33,sortedItems)
        return(<Fragment>
                <h1>Новости</h1>
                <Sort sortItems={this.sortItems}/>
                <div>
                    {
                        sortedItems.length>0 ?
                            sortedItems.map((item)=><NewsItem info={item} items={this.state.items}
                                                        show={this.state.flag}
                                                        key={item._id}/>)  :
                            <Spinner />
                    }

                </div>
            </Fragment>
        )
    }

    sortItems=(sorting)=>{
        if(sorting == 1){
            this.setState({
                flag:1,
                sortedItems:this.state.items.filter((item)=>item.category=="finansy")
            })
            console.log(3113,this.state.items.filter((item)=>item.category=="finansy"))
        }else if(sorting == 3){
            this.setState({
                flag:2,
                sortedItems:[...this.state.items.filter((item)=>item.category=="actual"?true:false)]
            })
        }else if(sorting == 2){
            this.setState({
                flag:3,
                sortedItems:[...this.state.items.filter((item)=>item.category=="society"?true:false)]
            })
        }else  {
            this.setState({
                flag:null,
                sortedItems:[...this.state.items]
            })
        }
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
                    sortedItems: [...item]
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


export default connect(mapStateFromProps)(News);