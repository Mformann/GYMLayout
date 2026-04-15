import { motion } from "motion/react";

export function About() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-[#FFD000]/20 text-[#FFD000] px-4 py-1.5 rounded-full font-bold text-sm mb-6 border border-[#FFD000]/30 tracking-wide uppercase">
              About Doctor Gym
            </div>
            <h1
              className="text-4xl md:text-5xl mb-6 text-white"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
            >
              Welcome to <span className="text-[#FFD000]">Doctor Gym</span>
            </h1>
            <p
              className="text-zinc-300 text-lg mb-6 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Located in the heart of Gota, Ahmedabad, we are the only facility where your 
              fitness journey is medically supervised. Our certified medical doctors and expert 
              trainers combine their knowledge to offer holistic health treatments—whether it is 
              reversing PCOS, managing diabetes, or achieving extreme fat loss.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                { number: "90", label: "Days Transformation" },
                { number: "1000+", label: "Transformations" },
                { number: "10+", label: "Medical Experts" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className="text-3xl md:text-4xl font-black text-[#FFD000] mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-zinc-400"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1704223523518-e3ce27879f99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjB3b3Jrb3V0JTIwbW90aXZhdGlvbnxlbnwxfHx8fDE3NzE5MjMwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Doctor consulting patient"
              className="rounded-2xl w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
