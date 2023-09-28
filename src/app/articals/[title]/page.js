import React from 'react';

const titlePage = (props) => {
    console.log(props)
    return (
        <div>
            <h1>titlepage</h1>
            <h1>{props.params.title}</h1>
            
        </div>
    );
}

export default titlePage;
