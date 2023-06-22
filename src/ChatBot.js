import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Chatbot.css';

function Chatbot() {
    const [messages, setMessages] = useState([{ text: 'Hello, I am a medical assistant. How can I help you today?', user: 'Chatbot' }]);
    const [input, setInput] = useState('');
    const endOfMessages = useRef(null);

    const scrollToBottom = () => {
        endOfMessages.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [messages]);

    const handleSend = async (event) => {
        event.preventDefault();

        setMessages([...messages, { text: input, user: 'You' }]);

        // Construct conversation history string
        const conversationHistory = messages.map(message => `${message.user === 'You' ? 'User' : 'Assistant'}: ${message.text}`).join('\n');

        setInput('');

        try {
            const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
                prompt: `${conversationHistory}\nUser: ${input}`,
                max_tokens: 100,
                temperature: 0.7
            }, {
                headers: {
                    'Authorization': `Bearer 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
                    `,
                    'Content-Type': 'application/json'
                }
            });

            const chatbotMessage = response.data.choices[0].text.trim();
            setMessages([...messages, { text: chatbotMessage, user: 'Chatbot' }]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="chatbot">
            <div className="chatbot-messages">
                {messages.map((message, i) => (
                    <div key={i} className={`chatbot-message ${message.user}`}>
                        <p>{message.text}</p>
                    </div>
                ))}
                <div ref={endOfMessages}></div>
            </div>
            <form onSubmit={handleSend}>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message..." />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Chatbot;