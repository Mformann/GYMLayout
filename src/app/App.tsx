import { useState } from "react";
import { motion } from "motion/react";
import {
  Dumbbell,
  Heart,
  Users,
  Award,
  Lock,
  Clock,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Navigation } from "./components/Navigation";
import { FloatingButtons } from "./components/FloatingButtons";
import { PricingCard } from "./components/PricingCard";
import { FacilityCard } from "./components/FacilityCard";
import { TestimonialCard } from "./components/TestimonialCard";
import { JoinNowModal } from "./components/JoinNowModal";

function App() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation onJoinNow={() => setIsJoinOpen(true)} />
      <FloatingButtons />
      <JoinNowModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwaW50ZXJpb3IlMjBlcXVpcG1lbnQlMjBtb2Rlcm58ZW58MXx8fHwxNzcxOTIzMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Gym Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl mb-6 leading-tight"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Transform Your Body.
              <br />
              <span className="text-[#FFD000]">Transform Your Life.</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Join the premier fitness destination for professionals and achievers.
              State-of-the-art equipment, expert trainers, and a community that pushes you forward.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={() => setIsJoinOpen(true)}
                className="bg-[#FFD000] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ffdb33] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Now
              </motion.button>
              <motion.button
                onClick={() => setIsJoinOpen(true)}
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Free Trial
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#FFD000] rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-[#FFD000] rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-4xl md:text-5xl mb-6"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
              >
                Welcome to <span className="text-[#FFD000]">FitGym</span>
              </h2>
              <p
                className="text-zinc-300 text-lg mb-6 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                For over 10 years, we've been helping people achieve their fitness goals with
                personalized training, cutting-edge equipment, and a supportive community.
                Our certified trainers bring decades of combined experience in strength training,
                cardio, nutrition, and lifestyle coaching.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {[
                  { number: "10+", label: "Years Experience" },
                  { number: "500+", label: "Members" },
                  { number: "15+", label: "Expert Trainers" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-lg">
                  <Award className="text-[#FFD000]" size={20} />
                  <span className="text-sm">Certified Trainers</span>
                </div>
                <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-lg">
                  <Heart className="text-[#FFD000]" size={20} />
                  <span className="text-sm">Health Focused</span>
                </div>
                <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-lg">
                  <Users className="text-[#FFD000]" size={20} />
                  <span className="text-sm">Community Driven</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1704223523518-e3ce27879f99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjB3b3Jrb3V0JTIwbW90aXZhdGlvbnxlbnwxfHx8fDE3NzE5MjMwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Personal Trainer"
                className="rounded-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section id="plans" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
            >
              Membership <span className="text-[#FFD000]">Plans</span>
            </h2>
            <p
              className="text-zinc-400 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Choose the plan that fits your fitness journey. All plans include full gym access.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="Monthly"
              price="49"
              period="month"
              onJoinNow={() => setIsJoinOpen(true)}
              features={[
                "Full gym access",
                "All equipment included",
                "Locker room facilities",
                "Free fitness assessment",
                "24/7 gym access",
              ]}
            />
            <PricingCard
              title="Quarterly"
              price="129"
              period="3 months"
              onJoinNow={() => setIsJoinOpen(true)}
              features={[
                "Everything in Monthly",
                "2 personal training sessions",
                "Nutrition consultation",
                "Workout plan included",
                "Priority class booking",
                "Guest pass (2/month)",
              ]}
              isPopular
              discount="SAVE 12%"
            />
            <PricingCard
              title="Yearly"
              price="449"
              period="year"
              onJoinNow={() => setIsJoinOpen(true)}
              features={[
                "Everything in Quarterly",
                "8 personal training sessions",
                "Monthly nutrition check-ins",
                "Premium workout plans",
                "Unlimited guest passes",
                "Exclusive member events",
              ]}
              discount="SAVE 24%"
            />
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
            >
              World-Class <span className="text-[#FFD000]">Facilities</span>
            </h2>
            <p
              className="text-zinc-400 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Everything you need for your fitness journey, all under one roof.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FacilityCard
              icon={Dumbbell}
              title="Modern Equipment"
              description="Latest cardio and strength training machines from top brands"
            />
            <FacilityCard
              icon={Heart}
              title="Cardio Zone"
              description="Treadmills, bikes, ellipticals with entertainment screens"
            />
            <FacilityCard
              icon={Users}
              title="Personal Training"
              description="Certified trainers to guide your fitness journey"
            />
            <FacilityCard
              icon={Dumbbell}
              title="Strength Training"
              description="Free weights, machines, and functional training area"
            />
            <FacilityCard
              icon={Lock}
              title="Locker Room"
              description="Clean, spacious lockers with shower facilities"
            />
            <FacilityCard
              icon={Award}
              title="Hygiene & Safety"
              description="Regular sanitization and safety protocols maintained"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
            >
              Success <span className="text-[#FFD000]">Stories</span>
            </h2>
            <p
              className="text-zinc-400 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Real transformations from real people. Join our growing community of achievers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              role="Lost 25 lbs in 3 months"
              content="The trainers here are amazing! They created a personalized plan that fit my busy schedule. The results speak for themselves."
              rating={5}
              image="https://images.unsplash.com/photo-1669504243706-1df1f8d5dacd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhbnNmb3JtYXRpb24lMjBiZWZvcmUlMjBhZnRlciUyMGF0aGxldGljfGVufDF8fHx8MTc3MTkyMzA4MHww&ixlib=rb-4.1.0&q=80&w=1080"
            />
            <TestimonialCard
              name="Mike Chen"
              role="Gained 15 lbs muscle"
              content="Best gym I've ever joined. Equipment is top-notch, and the atmosphere keeps me motivated. Worth every penny!"
              rating={5}
              image="https://images.unsplash.com/photo-1669807164466-10a6584a067e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwc3RyZW5ndGglMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzE4ODYzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            />
            <TestimonialCard
              name="Jessica Williams"
              role="Marathon Ready"
              content="From couch to marathon runner! The cardio equipment and training programs helped me achieve my dream."
              rating={5}
              image="https://images.unsplash.com/photo-1704223523518-e3ce27879f99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjB3b3Jrb3V0JTIwbW90aXZhdGlvbnxlbnwxfHx8fDE3NzE5MjMwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
            >
              Our <span className="text-[#FFD000]">Gym</span>
            </h2>
            <p
              className="text-zinc-400 text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Take a look at our state-of-the-art facility
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwaW50ZXJpb3IlMjBlcXVpcG1lbnQlMjBtb2Rlcm58ZW58MXx8fHwxNzcxOTIzMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1669807164466-10a6584a067e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwc3RyZW5ndGglMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzE4ODYzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1761971976282-b2bb051a5474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwc3R1ZGlvJTIwY2FyZGlvJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3MTkyMzA3OXww&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1662386392891-688364c5a5d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3ZWlnaHRzJTIwZHVtYmJlbGxzJTIwZml0bmVzc3xlbnwxfHx8fDE3NzE5MjMwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1704223523518-e3ce27879f99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjB3b3Jrb3V0JTIwbW90aXZhdGlvbnxlbnwxfHx8fDE3NzE5MjMwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1669504243706-1df1f8d5dacd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhbnNmb3JtYXRpb24lMjBiZWZvcmUlMjBhZnRlciUyMGF0aGxldGljfGVufDF8fHx8MTc3MTkyMzA4MHww&ixlib=rb-4.1.0&q=80&w=1080",
            ].map((image, index) => (
              <motion.div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image}
                  alt={`Gym ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
            >
              Visit Us <span className="text-[#FFD000]">Today</span>
            </h2>
            <p
              className="text-zinc-400 text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Come for a free tour and see what FitGym has to offer
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <motion.div
              className="bg-zinc-900 rounded-2xl h-96 flex items-center justify-center border border-zinc-800"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <MapPin size={48} className="text-[#FFD000] mx-auto mb-4" />
                <p className="text-zinc-400">Map Location</p>
                <p className="text-sm text-zinc-500 mt-2">
                  [Embed Google Maps here]
                </p>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-[#FFD000] p-3 rounded-lg">
                    <MapPin className="text-black" />
                  </div>
                  <div>
                    <h4
                      className="text-xl mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
                    >
                      Address
                    </h4>
                    <p
                      className="text-zinc-400"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      123 Fitness Street, Downtown
                      <br />
                      Your City, ST 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-[#FFD000] p-3 rounded-lg">
                    <Phone className="text-black" />
                  </div>
                  <div>
                    <h4
                      className="text-xl mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
                    >
                      Phone
                    </h4>
                    <p
                      className="text-zinc-400"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-[#FFD000] p-3 rounded-lg">
                    <Mail className="text-black" />
                  </div>
                  <div>
                    <h4
                      className="text-xl mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
                    >
                      Email
                    </h4>
                    <p
                      className="text-zinc-400"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      info@fitgym.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#FFD000] p-3 rounded-lg">
                    <Clock className="text-black" />
                  </div>
                  <div>
                    <h4
                      className="text-xl mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
                    >
                      Opening Hours
                    </h4>
                    <p
                      className="text-zinc-400"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Monday - Friday: 5:00 AM - 11:00 PM
                      <br />
                      Saturday - Sunday: 6:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <motion.button
                className="w-full bg-[#FFD000] text-black py-4 rounded-lg font-bold text-lg hover:bg-[#ffdb33] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Directions
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#FFD000] rounded-lg flex items-center justify-center">
                  <span className="text-black text-xl font-black">FG</span>
                </div>
                <span
                  className="text-white text-2xl tracking-tight"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
                >
                  FIT<span className="text-[#FFD000]">GYM</span>
                </span>
              </div>
              <p
                className="text-zinc-400 mb-4 max-w-md"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Your journey to a healthier, stronger you starts here.
                Join our community and transform your life today.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-zinc-900 p-3 rounded-lg hover:bg-[#FFD000] hover:text-black transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="bg-zinc-900 p-3 rounded-lg hover:bg-[#FFD000] hover:text-black transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="bg-zinc-900 p-3 rounded-lg hover:bg-[#FFD000] hover:text-black transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-white text-lg mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2">
                {["About Us", "Membership Plans", "Facilities", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-[#FFD000] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4
                className="text-white text-lg mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
              >
                Support
              </h4>
              <ul className="space-y-2">
                {["FAQ", "Terms & Conditions", "Privacy Policy", "Careers"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-[#FFD000] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-900 pt-8 text-center">
            <p
              className="text-zinc-500"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              © 2026 FitGym. All rights reserved. Built for champions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
