import { motion } from "motion/react";
import { Heart, Dumbbell, Users, Lock, Clock, Award } from "lucide-react";
import { FacilityCard } from "../components/FacilityCard";

export function Facilities() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block bg-[#FFD000]/20 text-[#FFD000] px-4 py-1.5 rounded-full font-bold text-sm mb-6 border border-[#FFD000]/30 tracking-wide uppercase">
            Inside Doctor Gym
          </div>
          <h1
            className="text-4xl md:text-5xl mb-4 text-white"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
          >
            Medical & Fitness <span className="text-[#FFD000]">Facilities</span>
          </h1>
          <p
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We provide clinical-grade analysis paired with high-end gym equipment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FacilityCard
            icon={Heart}
            title="Medical Consultation"
            description="In-house doctors tracking your biometrics and health markers."
          />
          <FacilityCard
            icon={Award}
            title="Nutrition Strategy"
            description="Customized daily macros & micro-nutrient plans focusing on root cause."
          />
          <FacilityCard
            icon={Dumbbell}
            title="Modern Equipment"
            description="Latest cardio and strength training machines tailored for safety."
          />
          <FacilityCard
            icon={Users}
            title="1-on-1 Monitoring"
            description="Our experts track every rep, assuring optimal muscle engagement."
          />
          <FacilityCard
            icon={Lock}
            title="Private Consultation Rooms"
            description="Safe spaces for medical history and dietary discussion."
          />
          <FacilityCard
            icon={Clock}
            title="24/7 Support"
            description="Always reachable for dietary emergencies or health queries."
          />
        </div>
      </div>
    </div>
  );
}
