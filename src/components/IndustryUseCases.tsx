import React, { useEffect, useRef } from 'react';
import { Car, Hotel, Heart, Briefcase, ShoppingBag, Wallet, ShieldCheck, Building2 } from 'lucide-react';

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  useCases: string[];
  gradientFrom: string;
  gradientTo: string;
  delay: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ 
  icon, 
  title, 
  useCases, 
  gradientFrom, 
  gradientTo,
  delay 
}) => {
  return (
    <div 
      className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-on-scroll"
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center mb-5 shadow-lg`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {useCases.map((useCase, index) => (
          <li key={index} className="flex items-start space-x-2">
            <span className="text-cyan-400 mt-1">•</span>
            <span className="text-gray-300 text-sm">{useCase}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const IndustryUseCases: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.animate-on-scroll');
            items.forEach((item) => {
              (item as HTMLElement).classList.add('animate-visible');
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
    <section ref={sectionRef} id="use-cases" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
          Use Cases Across Industries
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 animate-on-scroll">
          Our AI voice agent adapts to various industries with specialized workflows
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Each IndustryCard wrapped in anchor tag */}
          <a href="https://wa.me/918010545225" target="_blank" rel="noopener noreferrer">
            <IndustryCard 
              icon={<Car className="w-7 h-7 text-white" />}
              title="Automotive"
              useCases={[
                "Book test drives via voice, confirm on WhatsApp",
                "Send dealership details mid-call",
                "Collect documents & verify identity over chat",
                "Schedule service appointments across channels"
              ]}
              gradientFrom="from-blue-600"
              gradientTo="to-blue-800"
              delay={0}
            />
          </a>

          <a href="https://wa.me/918010545225" target="_blank" rel="noopener noreferrer">
            <IndustryCard 
              icon={<Hotel className="w-7 h-7 text-white" />}
              title="Hospitality"
              useCases={[
                "Take room bookings on calls, send confirmation links",
                "Handle check-in requirements via WhatsApp",
                "Collect preferences before arrival",
                "Send digital room keys and property information"
              ]}
              gradientFrom="from-emerald-600"
              gradientTo="to-emerald-800"
              delay={1}
            />
          </a>

          <a href="https://wa.me/918010545225" target="_blank" rel="noopener noreferrer">
            <IndustryCard 
              icon={<Wallet className="w-7 h-7 text-white" />}
              title="Banking & Financial Services"
              useCases={[
                "Assist with loan applications and eligibility over calls",
                "Guide through application process via WhatsApp",
                "Auto-fill forms or send payment links",
                "Enable balance inquiry and transaction history via voice"
              ]}
              gradientFrom="from-indigo-600"
              gradientTo="to-indigo-800"
              delay={5}
            />
          </a>

          <a href="https://wa.me/918010545225" target="_blank" rel="noopener noreferrer">
            <IndustryCard 
              icon={<ShieldCheck className="w-7 h-7 text-white" />}
              title="Insurance"
              useCases={[
                "Share instant quotes via voice or chat",
                "Collect KYC documents securely over WhatsApp",
                "Provide instant claim status updates via voice",
                "Automate reminders for premium payments"
              ]}
              gradientFrom="from-sky-600"
              gradientTo="to-sky-800"
              delay={7}
            />
          </a>

          <a href="https://wa.me/918010545225" target="_blank" rel="noopener noreferrer">
            <IndustryCard 
              icon={<ShoppingBag className="w-7 h-7 text-white" />}
              title="E-commerce"
              useCases={[
                "Provide order support over multiple channels",
                "Send product recommendations with images",
                "Process returns with cross-channel verification",
                "Recover abandoned carts via WhatsApp follow-ups"
              ]}
              gradientFrom="from-amber-600"
              gradientTo="to-amber-800"
              delay={4}
            />
          </a>

          <a href="https://wa.me/918010545225" target="_blank" rel="noopener noreferrer">
            <IndustryCard 
              icon={<Heart className="w-7 h-7 text-white" />}
              title="Healthcare"
              useCases={[
                "Schedule appointments via voice or chat",
                "Collect & verify insurance information",
                "Send pre-appointment instructions via email",
                "Handle prescription refill requests cross-channel"
              ]}
              gradientFrom="from-red-600"
              gradientTo="to-red-800"
              delay={2}
            />
          </a>

          <a href="https://wa.me/918010545225" target="_blank" rel="noopener noreferrer">
            <IndustryCard 
              icon={<Briefcase className="w-7 h-7 text-white" />}
              title="SaaS & B2B"
              useCases={[
                "Schedule demos from calls to calendar links",
                "Send pricing documents mid-conversation",
                "Qualify leads across multiple touchpoints",
                "Deploy custom onboarding sequences via email"
              ]}
              gradientFrom="from-violet-600"
              gradientTo="to-violet-800"
              delay={3}
            />
          </a>

          <a href="https://wa.me/918010545225" target="_blank" rel="noopener noreferrer">
            <IndustryCard 
              icon={<Building2 className="w-7 h-7 text-white" />}
              title="Real Estate"
              useCases={[
                "Schedule site visits from voice interaction",
                "Send property brochures and location maps via WhatsApp",
                "Collect buyer preferences via chat forms",
                "Connect to agents automatically"
              ]}
              gradientFrom="from-yellow-600"
              gradientTo="to-yellow-800"
              delay={6}
            />
          </a>

          {/* Contact Us card */}
          <div
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-xl p-6 flex items-center justify-center animate-on-scroll"
            style={{ transitionDelay: '500ms' }}
          >
            <div className="text-center">
              <p className="text-xl font-semibold mb-3">Custom Industry Solution</p>
              <p className="text-gray-400 mb-4">Need a solution for your specific industry?</p>
              <a
                href="https://wa.me/918010545225"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 px-5 py-2.5 rounded-lg transition-colors font-medium inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustryUseCases;
