import React, { Component } from 'react'

export default class Circle extends Component {
   
    render() {
        var color = "white"
        if(this.props.cell === 1){
            color = "black"
        }
        else if(this.props.cell === 2){
            color = "red"
        }
        
        return (
            <div>
                <div style={{
                    backgroundColor:color,
                    border: "1px solid black",
                    borderRadius: "100%",
                    paddingTop: "98%",
                    width:"49px",
                    
                }}
            
                >
               
                </div>

            </div>
        )
    }
}
