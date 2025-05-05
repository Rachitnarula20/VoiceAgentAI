import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OmnichannelFlow from './components/OmnichannelFlow';
import IndustryUseCases from './components/IndustryUseCases';
import PersonalizedBuild from './components/PersonalizedBuild';
import Integrations from './components/Integrations';
import WhyChooseUs from './components/WhyChooseUs';
import LaunchCTA from './components/LaunchCTA';
import DemoModal from './components/DemoModal';
import Footer from './components/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-black text-white min-h-screen overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 -z-10"></div>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-20">
        <div className="absolute -top-[30%] -left-[20%] w-[70%] h-[60%] bg-cyan-500/20 rounded-full blur-[150px]"></div>
        <div className="absolute top-[60%] -right-[10%] w-[50%] h-[40%] bg-violet-600/20 rounded-full blur-[150px]"></div>
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-emerald-400/10 rounded-full blur-[100px]"></div>
      </div>
      
      <Header openModal={openModal} />
      <main>
        <Hero openModal={openModal} />
        <OmnichannelFlow />
        <IndustryUseCases />
        <PersonalizedBuild />
        <Integrations />
        <WhyChooseUs />
        <LaunchCTA openModal={openModal} />
      </main>
      <Footer openModal={openModal} />
      
      <DemoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;