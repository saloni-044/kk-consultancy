export default function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0f213d] text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left mb-8">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-white flex items-center justify-center text-primary font-bold text-sm leading-none">
                KK
              </div>
              <span className="font-bold text-xl tracking-tight">KK Consultancy</span>
            </div>
            <p className="text-blue-200 text-sm max-w-xs mx-auto md:mx-0">
              Navigating Pharma Regulations with Expertise. Your trusted partner for regulatory compliance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-center gap-6 text-sm font-medium">
            <button onClick={() => scrollTo('home')} className="text-blue-200 hover:text-white transition-colors">Home</button>
            <button onClick={() => scrollTo('about')} className="text-blue-200 hover:text-white transition-colors">About</button>
            <button onClick={() => scrollTo('services')} className="text-blue-200 hover:text-white transition-colors">Services</button>
            <button onClick={() => scrollTo('contact')} className="text-blue-200 hover:text-white transition-colors">Contact</button>
          </div>

          <div className="text-sm text-blue-200 md:text-right">
            <p>9911803296</p>
            <p>kkjayswal@yahoo.co.in</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm text-blue-300">
          <p>&copy; {new Date().getFullYear()} KK Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}