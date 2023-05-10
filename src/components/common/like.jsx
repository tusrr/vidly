import React, { Component } from 'react';


// Input : Like -- a boolean
// output : onClick

const Like = (props) => {
    let classes = 'fa fa-heart';
        if(!props.liked) classes+='-o';
        return (<i 
            onClick={props.onClick} 
            style={{cursor:'pointer'}}
            className = {classes} aria-hidden='true'/>);
}
 
export default Like;
 
// class Like extends Component {
//     render() { 
        
//     }
// }
// export default Like;

// NOTE: To change cc --> sfc:
//  there sud be only one method called render method, no states,no helper methods
// to do so, shift the contents of render method into the return of sfc
//  remember: when u convert cc-> sfc;
// we shud get rid of all references to this...and in sfc: pass props as parameter
// 