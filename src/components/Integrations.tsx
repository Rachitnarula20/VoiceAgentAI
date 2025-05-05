import React, { useEffect, useRef } from 'react';
import { Database, BookOpen, File, Clipboard, PanelRight } from 'lucide-react';

interface IntegrationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-5 hover:border-cyan-900/60 transition-all duration-300 animate-on-scroll"
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="flex flex-col h-full">
        <div className="w-12 h-12 rounded-xl bg-gray-800/80 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

const Integrations: React.FC = () => {
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
    <section ref={sectionRef} id="integrations" className="py-20 relative overflow-hidden">
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
          Fully Integrated With Your <span className="text-gradient bg-gradient-to-r from-cyan-400 to-violet-400">Business Stack</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 animate-on-scroll">
          Connect your existing systems and automate workflows across your business
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <IntegrationCard 
            icon={<Database className="w-6 h-6 text-cyan-400" />}
            title="CRM Integration"
            description="Connect with Salesforce, HubSpot, Zoho CRM and more to update leads, contacts, and opportunities in real-time."
            delay={0}
          />
          
          <IntegrationCard 
            icon={<BookOpen className="w-6 h-6 text-violet-400" />}
            title="LMS Synchronization"
            description="Integrate with your Learning Management Systems to handle enrollments, assignments, and course information."
            delay={1}
          />
          
          <IntegrationCard 
            icon={<File className="w-6 h-6 text-emerald-400" />}
            title="Document Management"
            description="Send, receive, and process documents securely from Google Drive, Dropbox, or custom storage systems."
            delay={2}
          />
          
          <IntegrationCard 
            icon={<Clipboard className="w-6 h-6 text-amber-400" />}
            title="Google Sheets & Excel"
            description="Read from and write to spreadsheets automatically, keeping your data in sync across systems."
            delay={3}
          />
        </div>
        
        <div className="mt-14 bg-gradient-to-r from-gray-900 to-gray-900/80 border border-gray-800 rounded-xl p-8 relative animate-on-scroll">
          <div className="absolute -top-5 -right-5 w-40 h-40 bg-cyan-500/10 rounded-full blur-[50px] -z-10"></div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="md:w-3/5 space-y-4">
              <h3 className="text-2xl font-bold">Custom API Integration</h3>
              <p className="text-gray-400">
                Need to connect with proprietary systems or third-party services? Our API-first architecture makes it easy to build custom integrations with your existing tech stack.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">Webhook Triggers</span>
                <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">REST API</span>
                <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">GraphQL</span>
                <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">JSON Payloads</span>
                <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">OAuth 2.0</span>
              </div>
            </div>
            
            <div className="md:w-2/5 flex justify-center md:justify-end">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <PanelRight className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;