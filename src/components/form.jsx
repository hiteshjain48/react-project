import React from 'react';
import { useState } from 'react';
import './../Form.css'
function Form() {
    const [name, setName] = useState('');
    const[email, setEmail] = useState('');
    function handleSubmit(event){
        event.preventDefault();
        console.log("Name: ", name);
        console.log("Email: ", email);
    }
    return (
        <div className='input'>
            <input type="text" onInput={(event) => setName(event.target.value)} placeholder='Name'/>
            <input type="email" onInput={(event) => setEmail(event.target.value)} placeholder='Email'/>
            <input type="submit" onClick={handleSubmit} />
        </div>
    );
}

export default Form;