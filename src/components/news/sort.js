import React from "react";
import {Button, ButtonGroup,Alert } from 'reactstrap';


export default function Sort(props) {
    return <Alert>
        <span className={"h3"}>Сортировка :</span>
            <ButtonGroup>
                <Button color={'primary'} onClick={()=>{
                    props.sortItems()
                }}>Все новости</Button>
                <Button color={'success'} onClick={()=>{
                    props.sortItems(1);
                }}>Финансы</Button>
                <Button color={'danger'} onClick={()=>{
                    props.sortItems(2)
                }}>Общество</Button>
                <Button color={'secondary'} onClick={()=>{
                    props.sortItems(3)
                }}>Актуальное</Button>
            </ButtonGroup>
    </Alert>
}