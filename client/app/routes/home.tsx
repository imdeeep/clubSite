import type { Route } from "./+types/home";
import Layout from "../components/layout/Layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tech Club - Innovation Through Collaboration" },
    { name: "description", content: "Join our technical club to learn, build, and innovate together. Participate in hackathons, workshops, and competitions." },
  ];
}

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-yellow-400">Tech Club</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Where innovation meets collaboration. Join us to learn, build, and create amazing things together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Join Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover the opportunities and resources available to help you grow as a developer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hackathons */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Hackathons
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Participate in exciting hackathons to solve real-world problems and showcase your skills.
              </p>
            </div>

            {/* Workshops */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Workshops
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn from experts through hands-on workshops on the latest technologies.
              </p>
            </div>

            {/* Competitions */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Competitions
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Test your skills and win prizes by participating in various technical competitions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}