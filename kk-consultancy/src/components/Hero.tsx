import { motion } from 'framer-motion';

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pills = [
    "Drug Registration",
    "Medical Devices",
    "Biologicals",
    "Vaccines"
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-primary via-[#16305a] to-[#0f213d]"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-white/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-400/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Leading Pharma Regulatory Consultants in India
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            KK Consultancy
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-medium max-w-2xl mx-auto leading-relaxed">
            Navigating Pharma Regulations with Expertise
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {pills.map((pill, i) => (
            <span 
              key={i}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm md:text-base backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              {pill}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <button 
            onClick={() => scrollTo('contact')}
            className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-white/20"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}