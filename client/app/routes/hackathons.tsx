import type { Route } from "./+types/hackathons";
import Layout from "../components/layout/Layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hackathons - Abhyudaya" },
    { name: "description", content: "Join our exciting hackathons and showcase your coding skills." },
  ];
}

export default function Hackathons() {
  const upcomingHackathons = [
    {
      id: 1,
      title: "AI Innovation Challenge",
      date: "March 15-17, 2024",
      description: "Build innovative AI solutions for real-world problems",
      prize: "$5,000",
      participants: "150+ registered"
    },
    {
      id: 2,
      title: "Web3 Build-a-thon",
      date: "April 20-22, 2024",
      description: "Create decentralized applications and blockchain solutions",
      prize: "$3,000",
      participants: "100+ registered"
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hackathons
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Join our exciting hackathons where innovation meets collaboration. Code, create, and compete!
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Register Now
          </button>
        </div>

        {/* Upcoming Hackathons */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingHackathons.map((hackathon) => (
              <div key={hackathon.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {hackathon.title}
                    </h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Open
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {hackathon.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{hackathon.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Prize Pool</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{hackathon.prize}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {hackathon.participants}
                    </span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Hackathons */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Past Events
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Check back soon for highlights from our previous hackathons!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}