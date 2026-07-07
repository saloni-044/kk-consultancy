import { motion } from 'framer-motion';
import { Award, Compass, Users, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: "Years of Regulatory Experience",
    desc: "Decades of combined experience in handling complex regulatory filings with health authorities."
  },
  {
    icon: Compass,
    title: "End-to-End Guidance",
    desc: "From early development strategy to post-approval compliance, we support the entire lifecycle."
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Comprised of former regulators and industry veterans with deep scientific and legal knowledge."
  },
  {
    icon: MapPin,
    title: "Pan-India Compliance",
    desc: "Extensive network and deep understanding of CDSCO and state SLA requirements."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 lg:sticky lg:top-32"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose KK Consultancy?</h2>
            <div className="w-16 h-1 bg-secondary rounded-full mb-6" />
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              We translate regulatory complexities into clear, actionable pathways. Our proactive approach minimizes delays and ensures your products reach patients faster.
            </p>
          </motion.div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/15 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                  <p className="text-blue-100 leading-relaxed">
                    {reason.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}