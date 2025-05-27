import {Link} from 'react-router-dom';
export default function Page4() {
    return (
        <div className="bg-white flex flex-col items-center max-w-[95vw] h-auto pt-15 pb-20 mx-auto px-6 sm:px-32 text-[#0A1D3D]">
            <div className="flex space-x-4 justify-center">
                <div className="max-w-[70%]">
                    <h1 className="text-5xl fbold font-bold mb-2">
                        We build {" "}
                        <span className="bg-gradient-to-r from-[#FF6A00]/80 to-[#FFE600] text-transparent bg-clip-text">
                            projects
                        </span>{" "}
                        and <br /> tools together.
                    </h1>
                    <p className="max-w-lg text-xl">
                        In collaboration with engineers on the Hack Club team, Hack Clubbers
                        build learning tools for each other. Get involved with these
                        projects by building something with our tools or contribute to the
                        tools themselves.
                    </p>
                    <Link
          to=""
          className="border-2 inline-block border-[#D96627] text-[#D96627] bg-[#D96627]/5 px-6 py-2 fbold tracking-wide rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-lg mt-4"
        >
          See our projects →
        </Link>
                </div>
                <div className="translate-y-2">
                    <p className="font-light text-sm italic mb-1">Live from GitHub</p>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <img
                                    src="images/logo.jpeg"
                                    alt="logo"
                                    className="w-8 h-8 rounded-full border border-gray-600/40"
                                />
                                <p className="">AbhyudayaCodingClub</p>
                            </div>
                            <p className="">Project #17</p>
                            <p className="text-xs">2 hours ago</p>
                        </div>
                        <div className="flex items-center space-x-4 opacity-75">
                            <div className="flex items-center space-x-2">
                                <img
                                    src="images/logo.jpeg"
                                    alt="logo"
                                    className="w-8 h-8 rounded-full border border-gray-600/40"
                                />
                                <p className="">AbhyudayaCodingClub</p>
                            </div>
                            <p className="">Project #19</p>
                            <p className="text-xs">2 hours ago</p>
                        </div>
                        <div className="flex items-center space-x-4 opacity-50">
                            <div className="flex items-center space-x-2">
                                <img
                                    src="images/logo.jpeg"
                                    alt="logo"
                                    className="w-8 h-8 rounded-full border border-gray-600/40"
                                />
                                <p className="">AbhyudayaCodingClub</p>
                            </div>
                            <p className="">Project #18</p>
                            <p className="text-xs">2 hours ago</p>
                        </div>
                        <div className="flex items-center space-x-4 opacity-25">
                            <div className="flex items-center space-x-2">
                                <img
                                    src="images/logo.jpeg"
                                    alt="logo"
                                    className="w-8 h-8 rounded-full border border-gray-600/40"
                                />
                                <p className="">AbhyudayaCodingClub</p>
                            </div>
                            <p className="">Project Bin</p>
                            <p className="text-xs">2 hours ago</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}
