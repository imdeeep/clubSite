export default function Page1() {
  return (
    <div className="bg-white flex flex-col max-w-[95vw] h-auto mx-auto px-6 sm:px-32 text-[#0A1D3D] ">
      <div className="pt-15 pb-15">
        <h1 className="text-4xl sm:text-6xl fbold font-bold mb-4">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#FF6A00] to-[#FFE600] text-transparent bg-clip-text">
            world of coding
          </span>{" "}
          with us.
        </h1>
        <p className="max-w-3xl text-lg sm:text-xl">
          Join hundreds of students at Abhyudaya Coding Club where we learn,
          build and grow together. Whether you're taking your first steps in
          programming or you're an experienced coder, we have something for
          everyone. Learn about our{" "}
          <span className="text-[#FF6A00] underline underline-offset-4 hover:decoration-wavy">
            {" "}
            community guidelines
          </span>
          .
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-8 sm:gap-15">
        <div className="-rotate-3 transition-transform hover:rotate-0 duration-300 px-5 ">
          {/* Image Div */}
          <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://hackclub.com/_next/image/?url=%2Fhome%2Fama.png&w=1920&q=75"
              alt="Students coding together"
              className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-center mt-1 text-base sm:text-lg text-gray-600 italic">
            Students collaborating at our coding workshops
          </p>
        </div>
        <div className="w-full">
          <div className="mb-6 sm:mb-8">
            <h1 className="fbold text-xl sm:text-2xl">
              <span className="mr-3 sm:mr-4 border-2 sm:border-3 border-[#0A1D3D] text-[#0A1D3D] px-2 sm:px-3 py-[0.2rem] sm:py-[0.4rem] rounded-full text-sm sm:text-base">
                1
              </span>
              Connect with Fellow Programmers
            </h1>
            <p className="text-lg sm:text-xl pl-10 sm:pl-15 mt-2">
              Get help with your code, share your projects, and collaborate with
              other students through our active{" "}
              <span className="text-[#FF6A00] underline underline-offset-4 hover:decoration-wavy">
                Discord community
              </span>
              .
            </p>
          </div>

          <div className="mb-6 sm:mb-8">
            <h1 className="fbold text-xl sm:text-2xl">
              <span className="mr-3 sm:mr-4 border-2 sm:border-3 border-[#FF6A00] text-[#FF6A00] px-2 sm:px-3 py-[0.2rem] sm:py-[0.4rem]  rounded-full text-sm sm:text-base">
                2
              </span>
              Learn Through Real Projects
            </h1>
            <p className="text-lg sm:text-xl pl-10 sm:pl-15 mt-2">
              Participate in hands-on workshops, hackathons, and collaborative{" "}
              <span className="text-[#FF6A00] underline underline-offset-4 hover:decoration-wavy">
                projects
              </span>{" "}
              to enhance your coding skills.
            </p>
          </div>

          <div className="mb-6 sm:mb-8">
            <h1 className="fbold text-xl sm:text-2xl">
              <span className="mr-3 sm:mr-4 border-2 sm:border-3 border-[#FFE600] text-[#FFE600] px-2 sm:px-3 py-[0.3rem] sm:py-[0.4rem] rounded-full text-sm sm:text-base">
                3
              </span>
              Grow Your Network
            </h1>
            <p className="text-lg sm:text-xl pl-10 sm:pl-15 mt-2">
              Connect with industry experts, attend{" "}
              <span className="text-[#FF6A00] underline underline-offset-4 hover:decoration-wavy">
                tech talks
              </span>
              , and build your professional network within the college
              community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
