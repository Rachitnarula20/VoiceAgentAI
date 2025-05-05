import React, { useEffect, useRef } from 'react';
import { Globe, Brain, Lock, Workflow, Phone, MessageSquare, Mail, MessageCircle } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  gradientFrom, 
  gradientTo,
  delay
}) => {
  return (
    <div 
      className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-on-scroll"
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center mb-6 mx-auto shadow-lg`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-center mb-3">{title}</h3>
      <p className="text-gray-400 text-center">{description}</p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
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
    <section ref={sectionRef} className="py-20 relative overflow-hidden bg-gray-900/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
          Why Teams Trust Our <span className="text-gradient bg-gradient-to-r from-cyan-400 to-violet-400">AI Agent</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 animate-on-scroll">
          Built with enterprise-grade capabilities for businesses of all sizes
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Globe className="w-8 h-8 text-white" />}
            title="Multilingual"
            description="Speaks fluently in English, Hindi, Hinglish, and can be trained on other languages for your market."
            gradientFrom="from-cyan-600"
            gradientTo="to-blue-700"
            delay={0}
          />
          
          <FeatureCard 
            icon={<Brain className="w-8 h-8 text-white" />}
            title="Memory-Aware"
            description="Remembers past interactions and customer preferences across sessions and channels."
            gradientFrom="from-violet-600"
            gradientTo="to-purple-700"
            delay={1}
          />
          
          <FeatureCard 
            icon={<Lock className="w-8 h-8 text-white" />}
            title="Secure & Compliant"
            description="Built with GDPR, HIPAA, and SOC 2 compliance in mind for enterprise security needs."
            gradientFrom="from-emerald-600"
            gradientTo="to-green-700"
            delay={2}
          />
          
          <FeatureCard 
            icon={<Workflow className="w-8 h-8 text-white" />}
            title="API-First Architecture"
            description="Easily integrate with any system using our comprehensive API and webhook system."
            gradientFrom="from-amber-600"
            gradientTo="to-orange-700"
            delay={3}
          />
        </div>
        
        <div className="mt-20 relative">
          <div className="bg-gradient-to-r from-gray-900 to-gray-900/80 border border-gray-800 rounded-xl p-8 md:p-10 relative z-10 animate-on-scroll">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">Train Once, Deploy Everywhere</h3>
                <p className="text-lg text-gray-300">
                  Our omnichannel architecture means you train your AI agent once, and it works across all channels - voice, chat, email, and more.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>No need for separate bots for different channels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Context follows customers across channel switches</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Consistent brand voice and customer experience</span>
                  </li>
                </ul>
              </div>
              
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-gray-800/80 p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-300 font-medium">Voice Calls</p>
                </div>
                
                <div className="bg-gray-800/80 p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-300 font-medium">WhatsApp</p>
                </div>
                
                <div className="bg-gray-800/80 p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-violet-800 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-300 font-medium">Email</p>
                </div>
                
                <div className="bg-gray-800/80 p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-300 font-medium">Web Chat</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-10 -left-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-[80px] -z-10"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-violet-600/10 rounded-full blur-[80px] -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;