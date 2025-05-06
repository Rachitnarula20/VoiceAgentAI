import React, { useEffect, useRef } from 'react';
import { Rocket, Calendar } from 'lucide-react';

interface LaunchCTAProps {
  openModal: () => void;
}

const LaunchCTA: React.FC<LaunchCTAProps> = ({ openModal }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.animate-on-scroll');
            items.forEach((item, index) => {
              setTimeout(() => {
                (item as HTMLElement).classList.add('animate-visible');
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="try-bot" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900/90 rounded-2xl p-8 md:p-12 border border-gray-800 relative">
          <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500 rounded-t-2xl"></div>
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-[80px] -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-violet-600/10 rounded-full blur-[80px] -z-10"></div>
          
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-violet-600 rounded-full flex items-center justify-center mb-6 animate-on-scroll">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              Launch in Days, Scale in Weeks
            </h2>
            
            <p className="text-lg text-gray-300 mb-10 animate-on-scroll">
              No heavy dev time needed. We help you go live with pre-built flows for voice, chat, and email, 
              full CRM/LMS integration, and post-launch analytics and optimization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
              <div className="bg-gray-800/60 p-5 rounded-xl animate-on-scroll">
                <h3 className="font-semibold mb-2">Quick Setup</h3>
                <p className="text-gray-400 text-sm">Go live in days with pre-built templates and white-glove onboarding</p>
              </div>
              
              <div className="bg-gray-800/60 p-5 rounded-xl animate-on-scroll">
                <h3 className="font-semibold mb-2">Easy Integration</h3>
                <p className="text-gray-400 text-sm">Connect with your existing systems without heavy coding</p>
              </div>
              
              <div className="bg-gray-800/60 p-5 rounded-xl animate-on-scroll">
                <h3 className="font-semibold mb-2">Full Support</h3>
                <p className="text-gray-400 text-sm">Dedicated success team to optimize performance after launch</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
            <a
  href="https://wa.me/918010545225"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-400 text-black font-medium px-6 py-3 rounded-full transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
>
  <Calendar className="w-5 h-5" />
  Book Demo
</a>
              
              <a 
                href="#use-cases"
                className="flex items-center justify-center border border-gray-600 hover:border-cyan-400 text-white px-6 py-3 rounded-full transition-all transform hover:translate-y-[-2px] hover:text-cyan-400"
              >
                See Use Cases
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchCTA;