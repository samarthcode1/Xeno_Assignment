import React, { useState } from 'react';

const AudiencePage = () => {
  const [audiences, setAudiences] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', segment: 'Premium' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', segment: 'Regular' },
  ]);

  const handleAddAudience = () => {
    const newAudience = {
      id: audiences.length + 1,
      name: `New Audience ${audiences.length + 1}`,
      email: `new${audiences.length + 1}@example.com`,
      segment: 'New',
    };
    setAudiences([...audiences, newAudience]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-700 mb-8">Audience Management</h1>
      <button
        onClick={handleAddAudience}
        className="bg-green-600 text-white py-2 px-6 rounded shadow-md mb-6 hover:bg-green-700"
      >
        + Add New Audience
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead>
            <tr className="bg-green-50 text-green-800">
              <th className="text-left px-6 py-4 font-semibold">Name</th>
              <th className="text-left px-6 py-4 font-semibold">Email</th>
              <th className="text-left px-6 py-4 font-semibold">Segment</th>
            </tr>
          </thead>
          <tbody>
            {audiences.map((audience) => (
              <tr key={audience.id} className="hover:bg-green-50 transition duration-150 ease-in-out">
                <td className="px-6 py-4">{audience.name}</td>
                <td className="px-6 py-4">{audience.email}</td>
                <td className="px-6 py-4">{audience.segment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AudiencePage;
