import React, {Fragment} from "react";
import {
    Alert, Card, CardText, CardBody,
    CardTitle, Badge
} from 'reactstrap';

import {Link} from "react-router-dom";

export default class NewsItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render(){
        let {info} = this.props;

        return <Fragment>
                <Alert color="secondary">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h2">{info.title} <sup className={"statusPost"}><Badge color="danger">{info.status}</Badge></sup></CardTitle>
                        </CardBody>
                        <img className={"prevImg"} src={info.src} alt="Card image cap" />
                        <CardBody>
                            <CardText tag="h5">{info.preview}</CardText>
                            <Link to={{pathname: `/news/article/${info._id}`, state: { prevPath: location.pathname }}}> <span className={"btn btn-info"}>Подробнее</span></Link>
                        </CardBody>
                    </Card>

                </Alert>
        </Fragment>
    }

    componentDidMount() {

    }
}