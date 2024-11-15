import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center">
      {/* Navigation Bar */}
      <nav className="w-full bg-blue-800 text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">Mini CRM</h1>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-blue-300 transition-colors">Home</a></li>
            <li><a href="/campaigns" className="hover:text-blue-300 transition-colors">Campaigns</a></li>
            <li><a href="/audience" className="hover:text-blue-300 transition-colors">Audience</a></li>
            <li><a href="/message" className="hover:text-blue-300 transition-colors">Send Message</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="p-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Welcome to the Mini CRM & Campaign Management App</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Streamline your campaign management, audience segmentation, and message sending in one place.
        </p>
        <button className="mt-4 flex items-center justify-center bg-white text-black font-extrabold text-sm py-1 px-4 rounded-lg shadow-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white transition duration-200 transform hover:-translate-y-1 hover:shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 48 48"
            className="mr-2"
          >
            <path
              fill="#4285F4"
              d="M47.532 24.545c0-1.561-.14-3.046-.406-4.465H24v8.452h13.244c-.574 2.862-2.229 5.278-4.752 6.908l7.709 6.018c4.468-4.116 7.331-10.173 7.331-16.913z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.426 0 11.8-2.143 15.732-5.818l-7.709-6.018c-2.143 1.446-4.873 2.3-8.023 2.3-6.173 0-11.413-4.144-13.282-9.69H3.747v6.101C7.669 42.378 15.319 48 24 48z"
            />
            <path
              fill="#FBBC05"
              d="M10.718 28.774A14.874 14.874 0 0 1 9.3 24c0-1.661.285-3.275.785-4.774V13.124H3.747A23.929 23.929 0 0 0 0 24c0 3.844.901 7.482 2.747 10.876l7.971-6.102z"
            />
            <path
              fill="#EA4335"
              d="M24 9.523c3.495 0 6.618 1.2 9.09 3.526l6.818-6.818C35.8 2.43 30.426 0 24 0 15.319 0 7.669 5.622 3.747 13.124l7.971 6.102C12.587 14.067 17.827 9.523 24 9.523z"
            />
          </svg>
          Sign in with Google
        </button>
    

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
