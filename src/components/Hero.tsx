import React, { useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

interface HeroProps {
  openModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ openModal }) => {
  useEffect(() => {
    const animateItems = () => {
      const items = document.querySelectorAll('.animate-in');
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate-show');
        }, 200 * index);
      });
    };

    animateItems();
  }, []);
  
  return (
    <section id="hero" className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 space-y-6 md:space-y-8 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-in">
              <span className="block">Conversations That</span>
              <span className="block">Start on Calls —</span>
              <span className="block">and <span className="text-cyan-400">Continue Anywhere</span></span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 animate-in">
            An AI-powered voice agent that talks on calls, sends real-time info on WhatsApp or email, handles follow-ups over chat, and syncs seamlessly with your CRM, LMS, and website.



            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-in">
              <button 
                onClick={openModal}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-400 text-black font-medium px-6 py-3 rounded-full transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                <MessageSquare className="w-5 h-5" />
                Book Demo
              </button>
              
              <a 
                href="#try-bot"
                className="flex items-center justify-center border border-gray-600 hover:border-cyan-400 text-white px-6 py-3 rounded-full transition-all transform hover:translate-y-[-2px] hover:text-cyan-400"
              >
                Try Live Bot
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-in">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 to-violet-600/10 mix-blend-overlay"></div>
              <img 
                src="https://images.pexels.com/photos/8438951/pexels-photo-8438951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Person receiving WhatsApp message while on call" 
                className="w-full h-auto"
              />
              
              <div className="absolute right-4 bottom-4 bg-black/70 backdrop-blur-sm p-3 rounded-lg border border-gray-800 max-w-[220px] animate-float">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-emerald-500 flex items-center justify-center rounded-full flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-400 font-medium">Booking Confirmed!</p>
                    <p className="text-xs text-gray-300">Your test drive is scheduled for tomorrow at 2 PM. Here's your confirmation link.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-cyan-500/20 rounded-full blur-[60px] -z-10"></div>
            <div className="absolute -left-16 -top-8 w-40 h-40 bg-violet-600/20 rounded-full blur-[80px] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;