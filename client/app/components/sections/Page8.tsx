import { motion } from "framer-motion";

export default function Page8() {
  return (
    <div className="h-screen w-full mx-auto text-[#0A1D3D] relative overflow-hidden flex justify-center items-center">
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/back5.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></motion.div>
      <div className="absolute inset-0 bg-[#091B3A]/30"></div>

      {/* Content container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[60rem] h-[30rem] relative z-10 rounded-xl bg-white/50 backdrop-blur-sm border border-black/10 shadow-lg flex"
      >
        <div className="w-[50%] h-full pl-8 pt-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="fbold text-6xl"
          >
            Join the <br />
            newsletter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl w-[85%] text-[#0A1D3D]/80 pt-3"
          >
            We'll send you an email no more than once a month, when we work on
            something cool for you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="w-[80%] space-y-4 mt-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="bg-white/60 text-center text-lg rounded-lg w-full p-2 transition-all hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#F36A00]/50"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="bg-white/60 text-center text-lg rounded-lg w-full p-2 transition-all hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#F36A00]/50"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#F36A00] text-white w-full text-center text-lg rounded-full py-2 cursor-pointer transition-colors hover:bg-[#E05A00]"
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>
        <div className="w-[50%] h-full flex justify-center items-center">
          <motion.img
            src="/images/about.png"
            alt="about"
            className="w-[26rem] h-auto object-cover rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-[1.1] hover:rotate-1"
          />
        </div>
      </motion.div>
    </div>
  );
}
