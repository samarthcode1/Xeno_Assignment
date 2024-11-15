import React, { useState } from 'react';

const MessagePage = () => {
  const [message, setMessage] = useState('');
  const [recipientType, setRecipientType] = useState('Campaign');
  const [recipient, setRecipient] = useState('');

  const handleSendMessage = () => {
    if (message && recipient) {
      alert(`Message sent to ${recipientType}: ${recipient}`);
    } else {
      alert('Please compose a message and select a recipient.');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-700 mb-8">Send Message</h1>
      <div className="bg-white p-6 shadow-md rounded mb-6">
        <label className="block font-semibold mb-2 text-gray-700">Message</label>
        <textarea
          className="w-full border rounded p-3 mb-4 text-gray-800"
          rows="5"
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <label className="block font-semibold mb-2 text-gray-700">Recipient Type</label>
        <select
          className="w-full border rounded p-3 mb-4 text-gray-800"
          value={recipientType}
          onChange={(e) => setRecipientType(e.target.value)}
        >
          <option value="Campaign">Campaign</option>
          <option value="Audience">Audience</option>
        </select>

        <label className="block font-semibold mb-2 text-gray-700">Recipient</label>
        <input
          type="text"
          className="w-full border rounded p-3 mb-4 text-gray-800"
          placeholder="Enter Campaign Name or Audience Email"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />

        <button
          onClick={handleSendMessage}
          className="bg-blue-600 text-white py-2 px-6 rounded shadow-md hover:bg-blue-700"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default MessagePage;
