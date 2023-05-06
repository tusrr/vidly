import React, { Component } from 'react';


// Input : Like -- a boolean
// output : onClick

class Like extends Component {
    state = {  } 
    render() { 
        let classes = 'fa fa-heart';
        if(!this.props.liked) classes+='-o';
        return (<i 
            onClick={this.props.onClick} 
            style={{cursor:'pointer'}}
            className = {classes} aria-hidden='true'/>);
    }
}
 
export default Like;