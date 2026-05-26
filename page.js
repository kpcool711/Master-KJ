'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (!message) return;

    setChat([
      ...chat,
      { role: 'user', text: message },
      { role: 'ai', text: `Master KJ received: ${message}` }
    ]);

    setMessage('');
  };

  return (
    <main style={{
      minHeight: '100vh',
      background: 'black',
      color: 'white',
      padding: '40px',
      fontFamily: 'Arial'
    }}>
      <h1 style={{
        color: '#00ffff',
        fontSize: '60px'
      }}>
        Master KJ
      </h1>

      <p>Create Anything.</p>

      <div style={{
        background: '#111',
        padding: '20px',
        borderRadius: '20px',
        height: '400px',
        overflowY: 'auto',
        marginTop: '20px'
      }}>
        {chat.map((msg, index) => (
          <div
            key={index}
            style={{
              background: msg.role === 'user' ? '#006666' : '#222',
              padding: '15px',
              borderRadius: '10px',
              marginBottom: '10px'
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div style={{
        display: 'flex',
        gap: '10px',
        marginTop: '20px'
      }}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask Master KJ anything..."
          style={{
            flex: 1,
            padding: '15px',
            borderRadius: '10px',
            border: 'none',
            background: '#111',
            color: 'white'
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            padding: '15px 25px',
            borderRadius: '10px',
            border: 'none',
            background: '#00ffff',
            fontWeight: 'bold'
          }}
        >
          Send
        </button>
      </div>
    </main>
  );
}
