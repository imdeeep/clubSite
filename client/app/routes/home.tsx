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
     
      <section
  className="relative bg-cover bg-center"
  style={{ height: "90vh" }}
>
  <img
    src="/images/hero.webp"
    alt="Hero Background"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/55"></div>

  <div className="relative max-w-[95vw] mx-auto px-6 sm:px-32 pt-14 h-full flex flex-col justify-center">
    {/* Logo & Title Row */}
    <div className="flex items-center gap-6 mb-4 ">
      <div>
        <h2 className="text-white/80 text-xl sm:text-2xl font-bold tracking-wider uppercase">
          Welcome to Abhyudaya Coding Club
        </h2>
      </div>
    </div>

    {/* Highlighted Text */}
    <h3 className="text-white text-2xl sm:text-6xl font-bold mb-2 max-w-[80vw] ">
      Igniting the passion in{' '}
      <span className="inline-block bg-[#EA6E10] text-white px-4 py-2 rounded-md -rotate-2 transform shadow-md">
        future coders
      </span>{' '}
      to lead with technology.
    </h3>

    {/* Subtext */}
    <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mb-10">
      Dive into the world of innovation, creativity, and collaboration. Join us
      to build projects, compete in hackathons, and shape your tech journey.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4">
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transition">
        Join the Club
      </button>
      <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition">
        Upcoming Events
      </button>
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="py-20 ">
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