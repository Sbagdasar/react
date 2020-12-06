import React from "react";
import {connect} from "react-redux";


class Message extends React.Component {

    constructor(props) {
        super(props);


    }

    render(){
        return  <div className={"message"}>
            {this.props.message.text}
        </div>

    }

}

const mapStateFromProps = (store)=>{

    return {
        message: store.message
    }
    console.log(1111, this.props)
}


export default connect(mapStateFromProps)(Message);
