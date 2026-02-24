import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  User,
  Mail,
  Phone,
  Calendar,
  ChevronRight,
  ChevronLeft,
  Dumbbell,
  CheckCircle2,
  Zap,
  Crown,
  Star,
} from "lucide-react";

interface JoinNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PLANS = [
  {
    id: "monthly",
    label: "Monthly",
    price: "₹1,999",
    period: "/ month",
    icon: Zap,
    color: "from-zinc-800 to-zinc-900",
    features: ["Full gym access", "All equipment", "Locker room", "24/7 access"],
  },
  {
    id: "quarterly",
    label: "Quarterly",
    price: "₹4,999",
    period: "/ 3 months",
    icon: Star,
    popular: true,
    color: "from-yellow-500/20 to-zinc-900",
    features: [
      "Everything in Monthly",
      "2 PT sessions",
      "Nutrition plan",
      "Priority booking",
      "Guest pass (2/mo)",
    ],
  },
  {
    id: "yearly",
    label: "Yearly",
    price: "₹15,999",
    period: "/ year",
    icon: Crown,
    color: "from-zinc-800 to-zinc-900",
    features: [
      "Everything in Quarterly",
      "8 PT sessions",
      "Monthly check-ins",
      "Unlimited guests",
      "Member events",
    ],
  },
];

const GOALS = [
  "Weight Loss",
  "Muscle Building",
  "Endurance & Cardio",
  "Flexibility & Yoga",
  "Sports Performance",
  "General Fitness",
];

type Step = "plan" | "details" | "goals" | "success";

export function JoinNowModal({ isOpen, onClose }: JoinNowModalProps) {
  const [step, setStep] = useState<Step>("plan");
  const [selectedPlan, setSelectedPlan] = useState("quarterly");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    startDate: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep("plan");
      setSelectedGoals([]);
      setForm({ name: "", email: "", phone: "", dob: "", gender: "", startDate: "" });
      setErrors({});
    }, 300);
  };

  const toggleGoal = (goal: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  const validateDetails = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address";
    if (!/^\+?[\d\s-]{8,}$/.test(form.phone))
      newErrors.phone = "Enter a valid phone number";
    if (!form.gender) newErrors.gender = "Please select your gender";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === "plan") setStep("details");
    else if (step === "details") {
      if (validateDetails()) setStep("goals");
    } else if (step === "goals") {
      setStep("success");
    }
  };

  const handleBack = () => {
    if (step === "details") setStep("plan");
    else if (step === "goals") setStep("details");
  };

  const stepIndex = { plan: 0, details: 1, goals: 2, success: 3 };
  const currentStep = stepIndex[step];
  const plan = PLANS.find((p) => p.id === selectedPlan)!;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-2xl max-h-[95vh] overflow-y-auto bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-zinc-950 border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#FFD000] rounded-lg flex items-center justify-center">
                  <Dumbbell size={18} className="text-black" />
                </div>
                <div>
                  <h2
                    className="text-white font-black text-lg leading-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    FIT<span className="text-[#FFD000]">GYM</span>
                  </h2>
                  <p className="text-zinc-500 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Membership Registration
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Progress Bar */}
            {step !== "success" && (
              <div className="px-6 pt-5">
                <div className="flex items-center gap-2 mb-1">
                  {["Choose Plan", "Your Details", "Fitness Goals"].map((label, i) => (
                    <div key={label} className="flex items-center gap-2 flex-1">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                          i < currentStep
                            ? "bg-[#FFD000] text-black"
                            : i === currentStep
                            ? "bg-[#FFD000] text-black ring-4 ring-[#FFD000]/25"
                            : "bg-zinc-800 text-zinc-500"
                        }`}
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {i < currentStep ? <CheckCircle2 size={14} /> : i + 1}
                      </div>
                      <span
                        className={`text-xs hidden sm:block ${
                          i <= currentStep ? "text-zinc-300" : "text-zinc-600"
                        }`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {label}
                      </span>
                      {i < 2 && (
                        <div
                          className={`flex-1 h-0.5 rounded ${
                            i < currentStep ? "bg-[#FFD000]" : "bg-zinc-800"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step Content */}
            <div className="px-6 pb-6">
              <AnimatePresence mode="wait">
                {/* ── STEP 1: PLAN SELECTION ── */}
                {step === "plan" && (
                  <motion.div
                    key="plan"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3
                      className="text-white text-2xl font-black mt-6 mb-1"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Choose Your Plan
                    </h3>
                    <p
                      className="text-zinc-400 text-sm mb-6"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Select the membership that fits your goals. Cancel anytime.
                    </p>

                    <div className="grid gap-4">
                      {PLANS.map((p) => {
                        const PlanIcon = p.icon;
                        const selected = selectedPlan === p.id;
                        return (
                          <motion.button
                            key={p.id}
                            onClick={() => setSelectedPlan(p.id)}
                            className={`relative w-full text-left rounded-xl p-5 border-2 transition-all bg-gradient-to-br ${p.color} ${
                              selected
                                ? "border-[#FFD000] shadow-lg shadow-[#FFD000]/10"
                                : "border-zinc-800 hover:border-zinc-600"
                            }`}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.99 }}
                          >
                            {p.popular && (
                              <div className="absolute -top-3 left-4 bg-[#FFD000] text-black text-xs font-black px-3 py-0.5 rounded-full">
                                MOST POPULAR
                              </div>
                            )}
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                    selected ? "bg-[#FFD000]" : "bg-zinc-800"
                                  }`}
                                >
                                  <PlanIcon
                                    size={20}
                                    className={selected ? "text-black" : "text-zinc-400"}
                                  />
                                </div>
                                <div>
                                  <div
                                    className="text-white font-bold text-lg"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                  >
                                    {p.label}
                                  </div>
                                  <div className="flex items-baseline gap-1">
                                    <span
                                      className={`text-2xl font-black ${
                                        selected ? "text-[#FFD000]" : "text-white"
                                      }`}
                                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    >
                                      {p.price}
                                    </span>
                                    <span
                                      className="text-zinc-500 text-sm"
                                      style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                      {p.period}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-1 transition-colors ${
                                  selected ? "border-[#FFD000] bg-[#FFD000]" : "border-zinc-600"
                                }`}
                              >
                                {selected && (
                                  <div className="w-2 h-2 bg-black rounded-full" />
                                )}
                              </div>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                              {p.features.map((f) => (
                                <span
                                  key={f}
                                  className="text-xs text-zinc-400"
                                  style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                  ✓ {f}
                                </span>
                              ))}
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 2: PERSONAL DETAILS ── */}
                {step === "details" && (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3
                      className="text-white text-2xl font-black mt-6 mb-1"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Your Details
                    </h3>
                    <p
                      className="text-zinc-400 text-sm mb-6"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Tell us about yourself so we can set up your membership.
                    </p>

                    <div className="space-y-4">
                      {/* Full Name */}
                      <div>
                        <label
                          className="block text-zinc-300 text-sm font-semibold mb-1.5"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Full Name *
                        </label>
                        <div className="relative">
                          <User
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
                          />
                          <input
                            type="text"
                            placeholder="John Doe"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className={`w-full bg-zinc-900 border rounded-lg pl-10 pr-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FFD000] transition-colors ${
                              errors.name ? "border-red-500" : "border-zinc-800"
                            }`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          />
                        </div>
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          className="block text-zinc-300 text-sm font-semibold mb-1.5"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
                          />
                          <input
                            type="email"
                            placeholder="john@example.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className={`w-full bg-zinc-900 border rounded-lg pl-10 pr-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FFD000] transition-colors ${
                              errors.email ? "border-red-500" : "border-zinc-800"
                            }`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          className="block text-zinc-300 text-sm font-semibold mb-1.5"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
                          />
                          <input
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className={`w-full bg-zinc-900 border rounded-lg pl-10 pr-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FFD000] transition-colors ${
                              errors.phone ? "border-red-500" : "border-zinc-800"
                            }`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>

                      {/* DOB + Gender in grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            className="block text-zinc-300 text-sm font-semibold mb-1.5"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            Date of Birth
                          </label>
                          <div className="relative">
                            <Calendar
                              size={16}
                              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
                            />
                            <input
                              type="date"
                              value={form.dob}
                              onChange={(e) => setForm({ ...form, dob: e.target.value })}
                              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-10 pr-4 py-3 text-zinc-400 focus:outline-none focus:border-[#FFD000] transition-colors [color-scheme:dark]"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            className="block text-zinc-300 text-sm font-semibold mb-1.5"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            Gender *
                          </label>
                          <select
                            value={form.gender}
                            onChange={(e) => setForm({ ...form, gender: e.target.value })}
                            className={`w-full bg-zinc-900 border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD000] transition-colors appearance-none ${
                              errors.gender ? "border-red-500" : "border-zinc-800"
                            }`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            <option value="" className="bg-zinc-900">Select gender</option>
                            <option value="male" className="bg-zinc-900">Male</option>
                            <option value="female" className="bg-zinc-900">Female</option>
                            <option value="other" className="bg-zinc-900">Prefer not to say</option>
                          </select>
                          {errors.gender && (
                            <p className="text-red-400 text-xs mt-1">{errors.gender}</p>
                          )}
                        </div>
                      </div>

                      {/* Start Date */}
                      <div>
                        <label
                          className="block text-zinc-300 text-sm font-semibold mb-1.5"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Preferred Start Date
                        </label>
                        <div className="relative">
                          <Calendar
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
                          />
                          <input
                            type="date"
                            value={form.startDate}
                            min={new Date().toISOString().split("T")[0]}
                            onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-10 pr-4 py-3 text-zinc-400 focus:outline-none focus:border-[#FFD000] transition-colors [color-scheme:dark]"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          />
                        </div>
                      </div>

                      {/* Selected Plan Summary */}
                      <div className="flex items-center gap-3 bg-zinc-900 border border-[#FFD000]/30 rounded-lg px-4 py-3">
                        <div className="w-8 h-8 bg-[#FFD000] rounded-lg flex items-center justify-center shrink-0">
                          <Dumbbell size={16} className="text-black" />
                        </div>
                        <div className="flex-1">
                          <p
                            className="text-zinc-400 text-xs"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            Selected Plan
                          </p>
                          <p
                            className="text-white font-bold"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {plan.label} — {plan.price}
                            <span className="text-zinc-500 font-normal ml-1 text-sm">
                              {plan.period}
                            </span>
                          </p>
                        </div>
                        <button
                          onClick={() => setStep("plan")}
                          className="text-[#FFD000] text-xs underline underline-offset-2 hover:text-yellow-300 transition-colors"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Change
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 3: GOALS ── */}
                {step === "goals" && (
                  <motion.div
                    key="goals"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3
                      className="text-white text-2xl font-black mt-6 mb-1"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Your Fitness Goals
                    </h3>
                    <p
                      className="text-zinc-400 text-sm mb-6"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Select all that apply — we'll tailor a program just for you.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                      {GOALS.map((goal) => {
                        const active = selectedGoals.includes(goal);
                        return (
                          <motion.button
                            key={goal}
                            onClick={() => toggleGoal(goal)}
                            className={`py-3 px-4 rounded-xl text-sm font-semibold border-2 transition-all text-left ${
                              active
                                ? "bg-[#FFD000]/10 border-[#FFD000] text-[#FFD000]"
                                : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-600"
                            }`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            {active && <span className="mr-1.5">✓</span>}
                            {goal}
                          </motion.button>
                        );
                      })}
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                      <p
                        className="text-zinc-400 text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        💪 <strong className="text-white">Almost there!</strong> Submitting this
                        form will register your interest. Our team will contact you within{" "}
                        <strong className="text-[#FFD000]">24 hours</strong> to confirm your
                        membership and schedule an induction.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* ── SUCCESS ── */}
                {step === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 20 }}
                    className="py-12 text-center"
                  >
                    <motion.div
                      className="w-24 h-24 bg-[#FFD000] rounded-full flex items-center justify-center mx-auto mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 15, delay: 0.1 }}
                    >
                      <CheckCircle2 size={48} className="text-black" />
                    </motion.div>
                    <h3
                      className="text-white text-3xl font-black mb-3"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Welcome to FitGym! 🎉
                    </h3>
                    <p
                      className="text-zinc-400 text-base mb-2 max-w-sm mx-auto"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Hey <strong className="text-white">{form.name || "Champion"}</strong>, your{" "}
                      <strong className="text-[#FFD000]">{plan.label}</strong> membership
                      registration is confirmed!
                    </p>
                    <p
                      className="text-zinc-500 text-sm mb-8"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      We'll send your welcome kit to{" "}
                      <strong className="text-zinc-300">{form.email}</strong> and call you
                      within 24 hours.
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-8 max-w-xs mx-auto">
                      {[
                        { label: "Plan", value: plan.label },
                        { label: "Price", value: plan.price },
                        { label: "Goals", value: `${selectedGoals.length || "0"} set` },
                      ].map((item) => (
                        <div key={item.label} className="bg-zinc-900 rounded-xl p-3 border border-zinc-800">
                          <p
                            className="text-zinc-500 text-xs mb-1"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {item.label}
                          </p>
                          <p
                            className="text-white font-bold text-sm"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      onClick={handleClose}
                      className="bg-[#FFD000] text-black px-8 py-3 rounded-lg font-bold text-base hover:bg-yellow-400 transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Let's Go! 💪
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer Nav Buttons */}
            {step !== "success" && (
              <div className="sticky bottom-0 bg-zinc-950 border-t border-zinc-800 px-6 py-4 flex items-center justify-between gap-4">
                {step !== "plan" ? (
                  <motion.button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-semibold"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    whileHover={{ x: -3 }}
                  >
                    <ChevronLeft size={18} />
                    Back
                  </motion.button>
                ) : (
                  <div />
                )}
                <motion.button
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-[#FFD000] text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors ml-auto"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {step === "goals" ? "Submit Registration" : "Continue"}
                  <ChevronRight size={18} />
                </motion.button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
