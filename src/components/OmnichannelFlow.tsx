// src/components/OmnichannelFlow.tsx

import React, { useEffect, useRef } from 'react';
import {
  Phone,
  Volume2,
  MessageSquare,
  Mail,
  CreditCard,
  Repeat,
  FileText,
  BarChart3,
  RefreshCw,
  MessageCircle as WhatsApp,
  CheckCircle2,
} from 'lucide-react';

/* ── Floating “bubble” card ──────────────────────────────── */
const Bubble: React.FC<{
  className: string;
  iconBg: string;
  icon: React.ReactNode;
  title: string;
  time: string;
  body?: string;
  children?: React.ReactNode;
}> = ({ className, iconBg, icon, title, time, body, children }) => (
  <div
    className={`
      absolute z-40 w-64 bg-gray-800 border border-gray-700 
      rounded-lg p-4 shadow-2xl animate-float ${className}
    `}
  >
    <div className="flex items-center space-x-2 mb-2">
      <div
        className={`w-8 h-8 ${iconBg} rounded-full flex items-center justify-center`}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-200">{title}</p>
        <p className="text-xs text-gray-400">{time}</p>
      </div>
    </div>
    {body && <p className="text-xs text-gray-300 mb-2">{body}</p>}
    {children}
  </div>
);

/* ── Phone + bubbles + blurred orbs ─────────────────────── */
const PhoneIntegration: React.FC = () => (
  <div className="relative animate-on-scroll">
    {/* blurred orbs */}
    <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-cyan-500/15 rounded-full blur-[110px]" />
    <div className="absolute -top-12 -left-12 w-72 h-72 bg-violet-600/15 rounded-full blur-[110px]" />

    {/* handset (z-30) */}
    <div className="relative mx-auto w-[280px] h-[560px] bg-gray-800 rounded-[36px] border-[8px] border-gray-700 shadow-xl overflow-hidden z-30">
      <div className="absolute top-0 w-full h-8 bg-gray-700 flex justify-center">
        <div className="w-24 h-6 bg-gray-700 rounded-b-xl" />
      </div>
      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 p-4 overflow-y-auto flex flex-col">
        <div className="text-center pt-4 pb-6">
          <h3 className="text-lg font-semibold text-gray-200">AI Voice Call</h3>
          <p className="text-sm text-gray-400">In progress, 2 : 34</p>
        </div>
        <div className="flex-grow flex flex-col justify-center items-center space-y-6">
          <div className="w-24 h-24 rounded-full bg-blue-900/30 flex items-center justify-center">
            <Volume2 className="h-12 w-12 text-blue-400" />
          </div>
          <div className="text-center">
            <p className="text-lg font-medium text-gray-200">Call in progress</p>
            <p className="text-sm text-gray-400">
              AI agent is providing information
            </p>
          </div>
        </div>
        <div className="mt-auto pt-8 pb-4 flex justify-center">
          <button className="w-12 h-12 rounded-full bg-red-500/80 text-white flex items-center justify-center">
            <Volume2 className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    {/* bubbles spread out, with WhatsApp & Payment further right */}
    <Bubble
      className="-top-6 -left-48 -rotate-6"
      iconBg="bg-blue-500"
      icon={<FileText className="w-5 h-5 text-white" />}
      title="New Lead"
      time="Just now"
      body="Lead form submitted. AI agent initiating call..."
    />

    <Bubble
      className="top-4 -right-36 md:-right-48 rotate-6"
      iconBg="bg-green-600"
      icon={<WhatsApp className="w-5 h-5 text-white" />}
      title="WhatsApp Update"
      time="Just now"
    >
      <p className="text-xs text-gray-300 mb-3">
        Here's the product information you requested! 📱
      </p>
      <div className="bg-gray-700 rounded p-2 text-xs">
        <p className="font-medium text-gray-200">Product-Details.pdf</p>
        <div className="flex justify-between mt-1">
          <span className="text-gray-400">2.4 MB</span>
          <span className="text-blue-400">Download</span>
        </div>
      </div>
    </Bubble>

    <Bubble
      className="bottom-20 -right-36 md:-right-[14rem] -rotate-3 animation-delay-1000"
      iconBg="bg-blue-600"
      icon={<CreditCard className="w-5 h-5 text-white" />}
      title="Payment Link"
      time="1 min ago"
    >
      <p className="text-xs text-gray-300 mb-2">
        Complete your purchase securely via WhatsApp
      </p>
      <button className="w-full bg-green-600 text-white text-xs font-medium py-2 px-4 rounded">
        Pay Now • $299
      </button>
    </Bubble>

    <Bubble
      className="bottom-32 -left-[14rem] rotate-3 animation-delay-2000"
      iconBg="bg-purple-600"
      icon={<BarChart3 className="w-5 h-5 text-white" />}
      title="CRM Updated"
      time="2 mins ago"
    >
      {['Lead Status: Hot', 'Sentiment: Positive', 'Next Action: Follow-up'].map(
        (txt) => (
          <div key={txt} className="flex items-center text-xs text-gray-300">
            <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
            <span>{txt}</span>
          </div>
        )
      )}
    </Bubble>
  </div>
);

/* ── Main Section ─────────────────────────────────────────── */
const OmnichannelFlow: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.animate-on-scroll')
              .forEach((el, i) =>
                setTimeout(
                  () => (el as HTMLElement).classList.add('animate-visible'),
                  150 * i
                )
              );
          }
        }),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent z-10" />

      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* LEFT: improved handset + well-spaced bubbles */}
        <div className="lg:w-1/2 flex justify-center">
          <PhoneIntegration />
        </div>

        {/* RIGHT: unchanged feature list */}
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold animate-on-scroll">
            <span className="text-gray-300">Omnichannel, </span>
            <span className="text-cyan-400">End-to-End</span>
          </h2>

          <p className="text-lg text-gray-300 animate-on-scroll">
            Customers don't want to repeat themselves — or stay locked in one
            channel. Our agent ensures they don't have to.
          </p>

          {[
            {
              bg: 'from-violet-600 to-violet-800',
              icon: <Phone className="w-6 h-6 text-white" />,
              heading: 'Starts on voice',
              sub: 'Inbound or outbound calls handled naturally by our AI agent',
            },
            {
              bg: 'from-cyan-600 to-cyan-800',
              icon: <MessageSquare className="w-6 h-6 text-white" />,
              heading: 'Sends info mid-call',
              sub: 'Product links, images, or documents via WhatsApp or email during the conversation',
            },
            {
              bg: 'from-emerald-600 to-emerald-800',
              icon: <Mail className="w-6 h-6 text-white" />,
              heading: 'Continuous conversation',
              sub: 'Chat continues after the call on WhatsApp, SMS, or web messenger',
            },
            {
              bg: 'from-amber-600 to-amber-800',
              icon: <CreditCard className="w-6 h-6 text-white" />,
              heading: 'Transact inside chat',
              sub: 'Payments, bookings, and form submissions handled directly in the conversation',
            },
            {
              bg: 'from-purple-600 to-purple-800',
              icon: <Repeat className="w-6 h-6 text-white" />,
              heading: 'Context stays intact',
              sub: 'Full conversation history follows the customer across every channel switch',
            },
          ].map(({ bg, icon, heading, sub }) => (
            <div
              key={heading}
              className="flex items-start gap-4 animate-on-scroll"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${bg} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
              >
                {icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{heading}</h3>
                <p className="text-gray-400">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OmnichannelFlow;
