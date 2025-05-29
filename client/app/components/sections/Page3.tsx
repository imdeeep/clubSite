import { Link } from "react-router";

export default function Page3() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50  flex flex-col justify-center items-center max-w-[95vw] mx-auto px-6 sm:px-32 text-[#0A1D3D]">
      <h1 className="text-[3.5rem] fbold text-center mb-2 animate-fade-in">
        Explore our{" "}
        <span className="bg-[#0A1D3D] text-white px-4 py-2 rounded-lg transform hover:scale-105 transition-transform">
          tech
        </span>{" "}
        community
      </h1>
      <p className="text-xl leading-relaxed text-center mb-6 text-[#0A1D3D]/80">
        Be part of an innovative tech ecosystem where students collaborate,
        innovate, and create the future of technology!
      </p>
      <div className="max-w-4xl h-auto rounded-2xl overflow-hidden shadow-xl bg-cover bg-center relative border border-gray-600/50 mb-10 user-select-none">
        <img
          src="/images/scrap.png"
          alt=""
          className="relative pointer-events-none"
        />
        <Link
          to=""
          className="absolute bottom-8 left-8 border border-white/25 inline-block bg-[#D96627] text-white px-8 py-4 fbold tracking-wide rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-lg"
        >
          Learn more →
        </Link>
      </div>

      <div
        className="flex flex-col md:flex-row w-full max-w-4xl h-auto rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://hackclub.com/home/slack_ama.webp")',
        }}
      >
        {/* Add an overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/80"></div>
        {/* Content with relative positioning to appear above the overlay */}
        <div className="md:w-[70%] h-full pr-8 p-8 relative z-10">
          <h1 className="fbold text-4xl text-white mb-6">
            Our Vibrant Network
          </h1>
          <p className="text-lg text-gray-100 mb-8">
            Join a dynamic community of tech enthusiasts where innovation meets
            collaboration. Our platform offers workshops, hackathons, and
            networking events that help you grow both technically and
            professionally.
            <br />
            <br />
            We regularly host tech talks and workshops with industry leaders,
            successful entrepreneurs, and renowned developers who share their
            insights and experiences.
          </p>
          <Link
            to=""
            className="inline-block bg-[#D6D9DE] text-[#0A1D3D] px-8 py-4 fbold tracking-wide rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-lg"
          >
            Join our Community →
          </Link>
        </div>
        <div className="md:w-[30%] h-auto bg-black/70 flex flex-col justify-center items-center space-y-8 relative z-10">
          <div className="flex flex-col items-center transform hover:scale-105 transition-all">
            <h1 className="fbold text-3xl text-white">50+</h1>
            <p className="text-blue-100">Team Members</p>
          </div>
          <div className="flex flex-col items-center transform hover:scale-105 transition-all">
            <h1 className="fbold text-3xl text-white">1000+</h1>
            <p className="text-blue-100">Instagram Followers</p>
          </div>
          <div className="flex flex-col items-center transform hover:scale-105 transition-all">
            <h1 className="fbold text-3xl text-white">800+</h1>
            <p className="text-blue-100">Active Students</p>
          </div>
        </div>
      </div>
    </div>
  );
}
