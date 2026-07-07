import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About KK Consultancy</h2>
            <div className="w-20 h-1.5 bg-primary/20 mb-8 rounded-full">
              <div className="w-10 h-full bg-primary rounded-full" />
            </div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              KK Consultancy is a specialized pharmaceutical regulatory consultancy with years of experience in pharmaceutical regulatory affairs and regulatory compliance.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team brings deep expertise in navigating complex drug approval processes, medical device registrations, and biologicals across national and international regulatory frameworks. We serve pharmaceutical manufacturers, biotech companies, and healthcare enterprises seeking end-to-end regulatory guidance.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {['Expert Team', 'End-to-End Guidance', 'Pan-India Reach', 'Timely Approvals'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-primary font-medium">
                  <CheckCircle className="text-secondary w-5 h-5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Abstract visual replacing a photo */}
            <div className="aspect-square md:aspect-[4/3] rounded-2xl bg-gradient-to-tr from-primary/5 to-secondary/10 border border-primary/10 flex items-center justify-center p-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
               
               <div className="grid grid-cols-2 gap-4 w-full h-full relative z-10">
                 <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-bold text-primary mb-2">15+</span>
                    <span className="text-sm text-gray-500 font-medium">Years Experience</span>
                 </div>
                 <div className="bg-primary text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center translate-y-8">
                    <span className="text-4xl font-bold mb-2">500+</span>
                    <span className="text-sm text-white/80 font-medium">Approvals Secured</span>
                 </div>
                 <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center text-center -translate-y-8">
                    <span className="text-4xl font-bold text-primary mb-2">100%</span>
                    <span className="text-sm text-gray-500 font-medium">Compliance</span>
                 </div>
                 <div className="bg-secondary text-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-bold mb-2">50+</span>
                    <span className="text-sm text-white/80 font-medium">Global Clients</span>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}