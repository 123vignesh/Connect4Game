
import React, { Component } from 'react';
import Row from "./Row";
 export default class Board extends Component {
   
    
render() {
    
    let row=[];
    for(let i=0;i<6;i++){
    row.push(<Row key={i} row={i}  cells = {this.props.cells[i]} handleClick = {this.props.handleClick}/>);
    }
   
    return (
      
      <div className="Lpp" style={{width:"350px",height:"350px",margin:"50px"}}>
        
            {row}
            
      </div>
    )
  }
}
