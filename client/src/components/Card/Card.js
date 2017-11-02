import React, { Component} from 'react';
import './Card.css';
class Card extends Component{
    render(){
        return(
            <div className="flex">
                <div className="card-image"/>
                <div className="item-1 flex">
                    <div className="item-1 pad">
                        item1
                    </div>
                    <div className="item-1 pad">
                        item2
                    </div>
                </div>
            </div>
        )
    }
}




export default Card;

