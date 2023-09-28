"use client";
import React, { useEffect, useState } from 'react';

export default function Todo () {

    const [todo , setTodo] = useState({});

    const doSomething = async() =>{
        const  response = await fetch(
            'https://jsonplaceholder.typicode.com/todos/1'
            );

        const result = await response.json();
        setTodo(result);
        
        }
    useEffect( () => {
        doSomething();
        
    },[]);

    return (
        <div>
             <h2>{todo.title}</h2>
            
        </div>
    );
}


