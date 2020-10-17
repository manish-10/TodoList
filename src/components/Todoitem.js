import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Todoitem extends Component {
    getStyle = () =>{
        
        return{
            background: '#f4f4f4',
            padding: '10px',
            bodderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed? 'line-through':'none'
        }
    }
   
    render() {
        const {id,title}=this.props.todo;
        return (
            <div style={this.getStyle()} onChange={this.props.markComplete.bind(this,id)}>{' '}
               <p>
                   <input type="checkbox" />
                   {title}
                   <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>X</button> 
                </p>
            </div>
        )
    }
}

//proptypes
Todoitem.propTypes ={
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding:' 5px 9px',
    cursor:'pointer',
    float: 'right'
}
export default Todoitem