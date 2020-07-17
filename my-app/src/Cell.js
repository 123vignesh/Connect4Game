import React, { Component } from 'react'
import Circle from "./Circle";
import propTypes from "prop-types"
export default class Cell extends Component {
 
render() {
        
        return (
            <div style={{
                width:50,
                height:50,
                backgroundColor:"yellow",
                border:"1px solid black"
            }}
            onClick={()=>{this.props.handleClick(this.props.row,this.props.col)}}
            >
                <Circle cell={this.props.cell}/>
            </div>
        );
    }
}
Cell.propTypes={handleClick:propTypes.func.isRequired}