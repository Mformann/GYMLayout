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
import { PricingCard } from "../components/PricingCard";
import { FacilityCard } from "../components/FacilityCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { InquiryForm } from "../components/InquiryForm";

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwaW50ZXJpb3IlMjBlcXVpcG1lbnQlMjBtb2Rlcm58ZW58MXx8fHwxNzcxOTIzMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Gym Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-center lg:text-left"
            >
              <div className="inline-block bg-[#FFD000]/20 text-[#FFD000] px-4 py-1.5 rounded-full font-bold text-sm mb-6 border border-[#FFD000]/30 tracking-wide uppercase">
                Managed & Run By Doctors
              </div>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
              >
                Cure Diseases Through <span className="text-[#FFD000]">Diet & Exercise.</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-zinc-300 mb-8"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Experience our signature <strong>90 Days Transformation</strong>. 
                We are Doctor Gym—where medical precision meets elite fitness. Specializing in science-backed nutrition and clinically proven exercise routines to reverse diseases and build your dream physique.
              </motion.p>

              <motion.div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg text-sm text-zinc-200">
                  <Heart className="text-[#FFD000]" size={18} /> Disease Curing
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg text-sm text-zinc-200">
                  <Award className="text-[#FFD000]" size={18} /> 90 Days Program
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg text-sm text-zinc-200">
                  <Dumbbell className="text-[#FFD000]" size={18} /> Medical Nutrition
                </div>
              </motion.div>
            </motion.div>

            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <InquiryForm />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
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

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
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
              <span className="text-[#FFD000]">1000+ Successful</span> 90 Days Transformations
            </h2>
            <p
              className="text-zinc-400 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Real clinical transformations from the residents of Ahmedabad.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              role="Reversed Type-2 Diabetes"
              content="The doctors here designed a diet logic that completely stabilized my blood sugar levels in 90 days. Their exercise protocol just makes sense."
              rating={5}
              image="https://images.unsplash.com/photo-1669504243706-1df1f8d5dacd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhbnNmb3JtYXRpb24lMjBiZWZvcmUlMjBhZnRlciUyMGF0aGxldGljfGVufDF8fHx8MTc3MTkyMzA4MHww&ixlib=rb-4.1.0&q=80&w=1080"
            />
            <TestimonialCard
              name="Rahul C."
              role="Lost 25kg (PCOS Directed)"
              content="I was struggling with hormones. Doctor Gym's specialized PCOS diet along with heavy weight training gave me results I thought were impossible."
              rating={5}
              image="https://images.unsplash.com/photo-1669807164466-10a6584a067e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwc3RyZW5ndGglMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzE4ODYzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            />
            <TestimonialCard
              name="Amit Patel"
              role="90 Day Transformation"
              content="From extremely lethargic to running 10Ks! The macro-nutrient breakdown was the game changer. Gota's finest medical fitness facility."
              rating={5}
              image="https://images.unsplash.com/photo-1704223523518-e3ce27879f99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjB3b3Jrb3V0JTIwbW90aXZhdGlvbnxlbnwxfHx8fDE3NzE5MjMwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            />
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
              Visit <span className="text-[#FFD000]">Doctor Gym</span>
            </h2>
            <p
              className="text-zinc-400 text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Schedule an induction with our medical team today.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <motion.div
              className="bg-zinc-900 rounded-2xl h-96 flex items-center justify-center border border-zinc-800 p-2 overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14682.909569651717!2d72.5492501!3d23.1013514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e833150398e4d%3A0x79a18c8b3d7cb6ea!2sDoctor%20GYM%20-%20Vedant%20Fitness%20Club!5e0!3m2!1sen!2sin!4v1715011700687!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1rem' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
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
                    <a href="https://maps.app.goo.gl/BcttqJ8Df8HG76bR7" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-[#FFD000] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Vande Mataram Road, Gota
                      <br />
                      Ahmedabad, Gujarat 382481
                    </a>
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
                      Phone Inquiries
                    </h4>
                    <a href="tel:+919000000000" className="text-zinc-400 hover:text-[#FFD000] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                      +91 90000 00000
                    </a>
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
                      Monday - Saturday: 5:30 AM - 10:30 PM
                      <br />
                      Sunday: Closed (Doctor Consultation by Appointment)
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
