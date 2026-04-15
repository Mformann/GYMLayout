import { motion } from "motion/react";

const blogPosts = [
  {
    title: "Reversing Type-2 Diabetes with Medical Nutrition",
    category: "Disease Reversal",
    date: "March 15, 2026",
    excerpt: "Learn how manipulating your macronutrient intake under medical supervision can normalize HbA1c levels...",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb258ZW58MXx8fHwxNzA4MzA5NjcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    readTime: "5 min read"
  },
  {
    title: "Understanding PCOS and the High Protein Diet",
    category: "Women's Health",
    date: "March 10, 2026",
    excerpt: "Hormonal imbalances require precise dietary interventions. Here's why Doctor Gym emphasizes high protein for PCOS management...",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZHxlbnwxfHx8fDE3MDgzMDk2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    readTime: "4 min read"
  },
  {
    title: "Why Our 90 Days Transformation Program Works",
    category: "Fitness Strategy",
    date: "March 05, 2026",
    excerpt: "It is not just about moving weights. Our doctors explain the physiological science behind our specialized 90-day protocol...",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWV0fGVufDF8fHx8MTcwODMwOTY3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    readTime: "7 min read"
  },
  {
    title: "Macro vs Micro: Balancing and Optimizing",
    category: "Nutrition Science",
    date: "Feb 28, 2026",
    excerpt: "Most people focus on Protein, Carbs, and Fats. But micro-nutrients are the actual catalysts. Let's break it down...",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWFsc3xlbnwxfHx8fDE3MDgzMDk2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    readTime: "6 min read"
  }
];

export function Blog() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto border-b border-zinc-900 pb-12 mb-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
        >
          <div className="inline-block bg-[#FFD000]/20 text-[#FFD000] px-4 py-1.5 rounded-full font-bold text-sm mb-6 border border-[#FFD000]/30 tracking-wide uppercase">
            Medical Insights
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            The <span className="text-[#FFD000]">Nutrition</span> Journal
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            Explore scientific articles curated by the doctors and nutrition experts at Doctor Gym. Learn how to empower your body through precise diet and structured fitness.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article 
            key={index} 
            className="group cursor-pointer bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-900 hover:border-[#FFD000]/50 transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative h-64 overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-md text-[#FFD000] text-xs font-bold uppercase tracking-wider">
                {post.category}
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-zinc-500 rounded-full"></span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FFD000] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {post.title}
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                {post.excerpt}
              </p>
              <div className="text-[#FFD000] font-semibold flex items-center gap-2">
                Read Article <span className="group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
