import React from "react";
import {  Row, Col , Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from "react-router-dom";


export default class Footer extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return <footer>
            <Breadcrumb>
                <BreadcrumbItem > <Link to={"/"}>  Главная </Link></BreadcrumbItem>
                <BreadcrumbItem><Link to={"/news"}>  Новости </Link></BreadcrumbItem>
                <BreadcrumbItem ><Link to={"/profile"}>  Профиль </Link></BreadcrumbItem>
            </Breadcrumb>
        </footer>
    }

}