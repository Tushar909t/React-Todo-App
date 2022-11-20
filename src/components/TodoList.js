import React, { useState } from 'react';
const TodoList = () => {
    const [Input, setInput]=useState("");
    const [Todo, setTodo]=useState([]);

    const InputEvent = (e)=>{
        setInput(e.target.value);
        
    };

    const AddTodo = ()=>{
        const NewData = Input;
        setTodo([...Todo, NewData]);

        setInput('');
    }

    function DeleteItem (i){
        const newArray = Todo.filter((elem, id)=>{
           return i!==id;
        });
        setTodo(newArray)
    }

    function RemoveAll (){
        setTodo([]);
    }



    return (
        <div className='box'>
            <h1>Todo List</h1>
            <div>
                <input type='text' placeholder="Add Item" value={Input} onChange={InputEvent}/>
                <button onClick={AddTodo} type='submit'>Add</button>
          
            </div>
            <div className='list'>
                <h2>Your List Item</h2>
                <ul>
                {
                 Todo.map((item,i) =>{
                    return(
                    <div key={i}>
                    <li className='item'>{item}</li>
                    <li><button className='btn' onClick={()=>DeleteItem(i)}>Remove</button></li>
                    </div>
                        
                    )
                 })
                }
                </ul>
                {
                    Todo.length>=1 &&
                    <button className='btn-all' onClick={RemoveAll}>Remove All</button>
                }
            </div>
        </div>
    );
};

export default TodoList;