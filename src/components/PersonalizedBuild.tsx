import React, { useEffect, useRef } from 'react';
import { Settings, FileText, Users, LineChart } from 'lucide-react';

const PersonalizedBuild: React.FC = () => {
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
              }, 150 * index);
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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 shadow-xl animate-on-scroll">
                <div className="flex space-x-3 mb-5">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium text-white">Automotive Industry Workflow</h4>
                      <span className="bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded">Active</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-2 bg-gray-700/50 rounded-md">
                        <div className="w-6 h-6 bg-violet-500/20 rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-violet-400 text-xs">1</span>
                        </div>
                        <span className="text-sm text-gray-300">Inbound call handling</span>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-2 bg-gray-700/50 rounded-md">
                        <div className="w-6 h-6 bg-cyan-500/20 rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-cyan-400 text-xs">2</span>
                        </div>
                        <span className="text-sm text-gray-300">Test drive scheduling</span>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-2 bg-gray-700/50 rounded-md">
                        <div className="w-6 h-6 bg-emerald-500/20 rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-emerald-400 text-xs">3</span>
                        </div>
                        <span className="text-sm text-gray-300">Document collection via WhatsApp</span>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-2 bg-gray-700/50 rounded-md">
                        <div className="w-6 h-6 bg-amber-500/20 rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-amber-400 text-xs">4</span>
                        </div>
                        <span className="text-sm text-gray-300">Dealership directions via email</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between mb-3">
                      <h4 className="font-medium text-white">Customized Car Models</h4>
                      <button className="text-cyan-400 text-sm">Edit</button>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-gray-700/50 p-2 rounded-md text-xs text-center text-gray-300">SUV Series</div>
                      <div className="bg-gray-700/50 p-2 rounded-md text-xs text-center text-gray-300">Sedan Series</div>
                      <div className="bg-gray-700/50 p-2 rounded-md text-xs text-center text-gray-300">EV Models</div>
                      <div className="bg-gray-700/50 p-2 rounded-md text-xs text-center text-gray-300">Hybrid</div>
                      <div className="bg-gray-700/50 p-2 rounded-md text-xs text-center text-gray-300">Luxury</div>
                      <div className="bg-cyan-500/20 p-2 rounded-md text-xs text-center text-cyan-400">+ Add New</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-5 -right-5 w-60 h-60 bg-cyan-500/10 rounded-full blur-[80px] -z-10"></div>
              <div className="absolute -top-5 -left-5 w-60 h-60 bg-violet-600/10 rounded-full blur-[80px] -z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              <span className="block">Built Specifically for</span>
              <span className="text-gradient bg-gradient-to-r from-cyan-400 to-violet-400">Your Business Use Case</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 animate-on-scroll">
              Our AI voice agent doesn't just follow generic scripts. It's customized to match your exact industry needs, business processes, and customer expectations.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tailored Conversation Flows</h3>
                  <p className="text-gray-400">Custom scripts and workflows designed for your specific industry requirements and customer journeys</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Industry-Specific Knowledge</h3>
                  <p className="text-gray-400">Pre-built knowledge base with terminology, FAQs, and processes relevant to your business domain</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Onboarding</h3>
                  <p className="text-gray-400">White-glove setup by specialists who understand your business model and integration requirements</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <LineChart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Custom Analytics Dashboard</h3>
                  <p className="text-gray-400">Track KPIs that matter to your business with dashboards built around your specific goals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedBuild;