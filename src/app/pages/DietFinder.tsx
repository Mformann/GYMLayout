import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Search, Info } from "lucide-react";

// Mock Database of foods
const dietDatabase = [
  {
    id: 1,
    name: "Doctor's Grilled Lemon Chicken Breast",
    moodMatch: ["Energetic", "Stressed"],
    macroFocus: "High Protein",
    ingredients: ["chicken", "lemon", "garlic", "olive oil"],
    macros: { protein: "45g", carbs: "2g", fats: "8g", calories: "260 kcal" },
    micros: "High in Iron, B12, Zinc (Excellent for immunity)",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3MDgzMTIyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    name: "Recovery Salmon & Asparagus Form",
    moodMatch: ["Lethargic", "Stressed"],
    macroFocus: "Low Carb",
    ingredients: ["salmon", "asparagus", "butter", "pepper"],
    macros: { protein: "35g", carbs: "5g", fats: "22g", calories: "358 kcal" },
    micros: "Rich in Omega-3, Magnesium, Vitamin D (Reduces Cortisol)",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb258ZW58MXx8fHwxNzA4MzEyMjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    name: "Metabolic Oat & Berry Bowl",
    moodMatch: ["Lethargic", "Energetic"],
    macroFocus: "High Fiber",
    ingredients: ["oats", "berries", "almond milk", "chia seeds"],
    macros: { protein: "12g", carbs: "45g", fats: "9g", calories: "310 kcal" },
    micros: "Antioxidants, Manganese, Soluble Fiber (Stabilizes Blood Sugar)",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYXRtZWWsfGVufDF8fHx8MTcwODMxMjI0OHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    name: "Energy Egg & Spinach Scramble",
    moodMatch: ["Happy", "Lethargic"],
    macroFocus: "High Protein",
    ingredients: ["eggs", "spinach", "onions", "cheese"],
    macros: { protein: "24g", carbs: "4g", fats: "15g", calories: "247 kcal" },
    micros: "Choline, Lutein, Iron (Boosts Brain Function)",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ2dzfGVufDF8fHx8MTcwODMxMjI0OHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    name: "PCOS Friendly Tofu Stir Fry",
    moodMatch: ["Stressed", "Energetic"],
    macroFocus: "Balanced",
    ingredients: ["tofu", "broccoli", "soy sauce", "bell peppers"],
    macros: { protein: "20g", carbs: "15g", fats: "11g", calories: "240 kcal" },
    micros: "Calcium, Isoflavones, Vitamin C (Hormonal Balance)",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2Z1fGVufDF8fHx8MTcwODMxMjI0OHww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function DietFinder() {
  const [mood, setMood] = useState("");
  const [macroFocus, setMacroFocus] = useState("");
  const [ingredientInput, setIngredientInput] = useState("");

  const filteredResults = useMemo(() => {
    return dietDatabase.filter((food) => {
      const matchMood = mood ? food.moodMatch.includes(mood) : true;
      const matchMacro = macroFocus ? food.macroFocus === macroFocus : true;
      
      const ingredientsList = ingredientInput
        .split(",")
        .map(i => i.trim().toLowerCase())
        .filter(i => i.length > 0);
        
      const matchIngredients = ingredientsList.length > 0
        ? ingredientsList.some(ing => food.ingredients.some(fIng => fIng.includes(ing)))
        : true;

      return matchMood && matchMacro && matchIngredients;
    });
  }, [mood, macroFocus, ingredientInput]);

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="text-center mb-12 border-b border-zinc-900 pb-12"
        >
          <div className="inline-block bg-[#FFD000]/20 text-[#FFD000] px-4 py-1.5 rounded-full font-bold text-sm mb-6 border border-[#FFD000]/30 tracking-wide uppercase">
            Medical AI
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            The <span className="text-[#FFD000]">Diet Finder</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Select your mood, choose your targeted macronutrient profile, and tell us what ingredients you have. We'll prescribe the perfect meal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Controls Panel */}
          <motion.div 
            className="lg:col-span-1 bg-zinc-950 p-8 rounded-2xl border border-zinc-800 h-fit lg:sticky lg:top-28"
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Filter Criteria
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">How are you feeling? (Mood)</label>
                <select 
                  className="w-full bg-black border border-zinc-800 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#FFD000]"
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                >
                  <option value="">Any Mood</option>
                  <option value="Energetic">Energetic - Ready to lift</option>
                  <option value="Lethargic">Lethargic - Need energy</option>
                  <option value="Stressed">Stressed - Need recovery</option>
                  <option value="Happy">Happy - Maintain flow</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Targeted Macronutrients</label>
                <select 
                  className="w-full bg-black border border-zinc-800 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#FFD000]"
                  value={macroFocus}
                  onChange={(e) => setMacroFocus(e.target.value)}
                >
                  <option value="">Any Focus</option>
                  <option value="High Protein">High Protein</option>
                  <option value="Low Carb">Low Carb</option>
                  <option value="High Fiber">High Fiber</option>
                  <option value="Balanced">Balanced</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  Main Ingredients You Have <span className="text-xs ml-1 text-zinc-500">(comma separated)</span>
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                  <input 
                    type="text" 
                    placeholder="e.g. chicken, oats, eggs"
                    className="w-full bg-black border border-zinc-800 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-[#FFD000]"
                    value={ingredientInput}
                    onChange={(e) => setIngredientInput(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">
                Matched Prescriptions <span className="text-[#FFD000]">({filteredResults.length})</span>
              </h3>
            </div>

            {filteredResults.length === 0 ? (
              <motion.div 
                className="bg-zinc-950 p-12 rounded-2xl border border-zinc-800 text-center"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              >
                <Info className="mx-auto text-zinc-600 mb-4" size={48} />
                <p className="text-zinc-400 text-lg">No matching clinical meals found. Try relaxing your filters.</p>
              </motion.div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-6">
                {filteredResults.map((food, index) => (
                  <motion.div
                    key={food.id}
                    className="bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#FFD000]/50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="h-48 relative">
                      <img src={food.image} alt={food.name} className="w-full h-full object-cover" />
                      <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded border border-[#FFD000]/30 text-[#FFD000] text-xs font-bold">
                        {food.macroFocus}
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-2 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {food.name}
                      </h4>
                      
                      <div className="mb-4">
                        <p className="text-zinc-500 text-xs uppercase font-bold tracking-wider mb-1">Micro Focus</p>
                        <p className="text-[#FFD000] text-sm font-medium leading-snug">{food.micros}</p>
                      </div>

                      <div className="bg-black rounded-lg p-3 grid grid-cols-4 gap-2 text-center border border-zinc-900 mb-4">
                        <div>
                          <div className="text-xs text-zinc-500">PRO</div>
                          <div className="text-white font-bold">{food.macros.protein}</div>
                        </div>
                        <div>
                          <div className="text-xs text-zinc-500">CRB</div>
                          <div className="text-white font-bold">{food.macros.carbs}</div>
                        </div>
                        <div>
                          <div className="text-xs text-zinc-500">FAT</div>
                          <div className="text-white font-bold">{food.macros.fats}</div>
                        </div>
                        <div>
                          <div className="text-xs text-zinc-500">Cals</div>
                          <div className="text-white font-bold text-xs flex items-center justify-center h-full">{food.macros.calories}</div>
                        </div>
                      </div>

                      <div>
                        <p className="text-zinc-500 text-xs uppercase font-bold tracking-wider mb-1 flex items-center gap-1">
                          Key Ingredients
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {food.ingredients.map(ing => (
                            <span key={ing} className="bg-zinc-900 text-zinc-300 text-xs px-2 py-1 rounded">
                              {ing}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
