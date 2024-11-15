import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center">
      

      {/* Hero Section */}
      <header className="p-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Welcome to the Mini CRM & Campaign Management App</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Streamline your campaign management, audience segmentation, and message sending in one place.
        </p>
        

      </header>

      {/* Feature Cards */}
      <main className="mt-10 p-6 w-full max-w-6xl grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform transition duration-200 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Campaign Management</h2>
          <p className="text-sm">
            Create, edit, and track marketing campaigns effortlessly with our comprehensive campaign management tools.
          </p>
          <a
            href="/campaigns"
            className="inline-block mt-4 bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700 transition duration-200"
          >
            Go to Campaigns
          </a>
        </div>

        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform transition duration-200 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Audience Segmentation</h2>
          <p className="text-sm">
            Organize your audience into segments for targeted messaging and effective outreach.
          </p>
          <a
            href="/audience"
            className="inline-block mt-4 bg-green-600 text-white py-2 px-4 rounded shadow hover:bg-green-700 transition duration-200"
          >
            Go to Audience
          </a>
        </div>

        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform transition duration-200 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Message Sending</h2>
          <p className="text-sm">
            Send personalized messages to campaigns or individual audience members with ease.
          </p>
          <a
            href="/message"
            className="inline-block mt-4 bg-purple-600 text-white py-2 px-4 rounded shadow hover:bg-purple-700 transition duration-200"
          >
            Go to Messages
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-10 w-full text-center bg-gray-800 text-gray-200 p-4">
        <p>&copy; 2024 Mini CRM & Campaign Management App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
