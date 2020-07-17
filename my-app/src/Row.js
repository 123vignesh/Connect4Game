
import React, { Component } from 'react';
import Cell from "./Cell";
import "./App.css";
export default class Row extends Component {
  
  render() { 
    let cells=[];
    for(let i=0;i<7;i++){
      cells.push(<Cell key = {i} cell = {this.props.cells[i]} row = {this.props.row} col = {i} handleClick = {this.props.handleClick}/>)
    }
   
    return (
      
      <div className="Bapp">
      
       {cells}
      </div>
    )
  }
}
