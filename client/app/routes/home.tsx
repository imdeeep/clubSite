import type { Route } from "./+types/home";
import Layout from "../components/layout/Layout";
import { Link } from "react-router";
import Page1 from "~/components/sections/Page1";
import Page2 from "~/components/sections/Page2";
import Page3 from "~/components/sections/Page3";
import Page4 from "~/components/sections/Page4";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tech Club - Innovation Through Collaboration" },
    {
      name: "description",
      content:
        "Join our technical club to learn, build, and innovate together. Participate in hackathons, workshops, and competitions.",
    },
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
        <div className="absolute inset-0 bg-[#0A1D3D]/55 backdrop-blur-[0.5px]"></div>

        <div className="relative max-w-[95vw] mx-auto px-6 sm:px-32 pt-14 h-full flex flex-col justify-center">
          <div className="flex items-center gap-6 mb-4 ">
            <div>
              <h2 className="text-[#eebd9b] fbold text-xl sm:text-2xl font-bold tracking-wider uppercase">
                Welcome to Abhyudaya Coding Club
              </h2>
            </div>
          </div>
          <h3 className="fbold text-white text-2xl sm:text-6xl tracking-[1.5px] mb-2 max-w-[80vw] ">
            Igniting the passion in{" "}
            <span className="inline-block bg-[#FF6A00] text-white px-4 py-2 rounded-md -rotate-4 transform shadow-md hover:rotate-0 hover:scale-105 transition-transform duration-300 ease-in-out">
              future coders
            </span>{" "}
            to lead with technology.
          </h3>
          <p className="text-[#D1D5DB] text-lg sm:text-xl max-w-2xl mb-10">
            Dive into the world of innovation, creativity, and collaboration.
            Join us to build projects, compete in hackathons, and shape your
            tech journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to=""
              className="bg-[#FFE600] hover:bg-[#FFE600]/90 text-[#0A1D3D] px-8 py-3 fbold tracking-wide rounded-full  shadow-lg transition text-lg"
            >
              JOIN THE CLUB
            </Link>
            <Link
              to=""
              className="border-2 border-white text-white px-8 py-3 rounded-full fbold hover:bg-white hover:text-[#0A1D3D] transition tracking-wide text-lg"
            >
              UPCOMING EVENTS
            </Link>
          </div>
        </div>
      </section>

      {/* Page1 : Explore the world of coding with us.*/}
      <section className="">
        <Page1 />
      </section>

      {/* Page2 : Our Domains */}
      <section className="py-15">
        <Page2 />
      </section>

      {/* Page3 : Images and Gallary Yard */}
      <section className="">
        <Page3 />
      </section>

      {/* Page4 : Projects */}
      <section className="">
        <Page4 />
      </section>
    </Layout>
  );
}
