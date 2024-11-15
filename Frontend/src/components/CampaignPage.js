import React, { useState } from 'react';

const CampaignsPage = () => {
  const [campaigns, setCampaigns] = useState([
    { id: 1, name: 'Black Friday Sale', status: 'Active', created: '2024-10-01' },
    { id: 2, name: 'New Year Promo', status: 'Draft', created: '2024-11-01' },
  ]);

  const handleDelete = (id) => {
    setCampaigns(campaigns.filter((campaign) => campaign.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-700 mb-8">Campaign Management</h1>
      <button className="bg-blue-600 text-white py-2 px-6 rounded shadow-md mb-6 hover:bg-blue-700">
        + Create New Campaign
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead>
            <tr className="bg-blue-50 text-blue-800">
              <th className="text-left px-6 py-4 font-semibold">Name</th>
              <th className="text-left px-6 py-4 font-semibold">Status</th>
              <th className="text-left px-6 py-4 font-semibold">Created Date</th>
              <th className="text-left px-6 py-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.id} className="hover:bg-blue-50 transition duration-150 ease-in-out">
                <td className="px-6 py-4">{campaign.name}</td>
                <td className="px-6 py-4">{campaign.status}</td>
                <td className="px-6 py-4">{campaign.created}</td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:text-blue-800 mr-4">Edit</button>
                  <button
                    onClick={() => handleDelete(campaign.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampaignsPage;
