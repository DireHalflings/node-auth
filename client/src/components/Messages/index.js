import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Messages = ({ token }) => {

    const [messages, setMessages] = useState(false);

    const fetchData = async () => {
        const response = await axios.get('http://localhost:5000/message', { headers: { 'auth-token': token }});
        setMessages(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        fetchData();
    }, []);


    return ( 
        <div>
            <h1>MESSAGES</h1>
            {
                messages ? <h2>{ messages.message.message }</h2> : <></>
            }
        </div>
    );
}

export default Messages;