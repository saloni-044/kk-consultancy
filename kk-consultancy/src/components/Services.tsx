import { motion } from 'framer-motion';
import { FlaskConical, Microscope, Activity, Pill, HeartPulse, ClipboardList, FileText, Building2, CheckCircle, Shield } from 'lucide-react';

const servicesList = [
  { title: "Drug Registration", desc: "End-to-end support for new and generic drug approvals.", icon: Pill },
  { title: "Medical Device Registration", desc: "Navigating complex device classifications and compliance.", icon: Microscope },
  { title: "IVD Registration", desc: "In-Vitro Diagnostics registration and regulatory pathways.", icon: Activity },
  { title: "Biologicals", desc: "Expert guidance on biological product approvals.", icon: FlaskConical },
  { title: "Similar Biologics", desc: "Regulatory strategy for biosimilars market entry.", icon: HeartPulse },
  { title: "Vaccines", desc: "Comprehensive support for vaccine trials and registration.", icon: Shield },
  { title: "Clinical Trial Support", desc: "Protocol review and trial compliance management.", icon: ClipboardList },
  { title: "New Drug Registration", desc: "Strategic consulting for innovative drug approvals.", icon: FileText },
  { title: "Site Registration", desc: "Manufacturing and testing site compliance and registration.", icon: Building2 },
  { title: "Post Approval Obligations", desc: "Lifecycle management and post-market surveillance.", icon: CheckCircle },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full mb-6" />
            <p className="text-gray-600 text-lg">
              Comprehensive regulatory affairs consulting to accelerate your product's journey to market.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {servicesList.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <div className="w-12 h-12 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}