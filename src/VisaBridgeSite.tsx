import { motion } from 'motion/react';
import { Phone, Mail, MessageSquare, ChevronRight, CheckCircle2, ShieldCheck, PieChart, Users, Globe2, GraduationCap, Briefcase, Heart, Building2, Scale, HelpCircle, Instagram } from 'lucide-react';
import { useState } from 'react';

import { ServiceDetail } from './ServiceDetail';

// --- Components ---

const Navbar = ({ onHomeClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    onHomeClick();
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-bottom border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={onHomeClick}>
            <div className="text-2xl font-display font-bold text-primary tracking-tight">
              VisaBridge<span className="text-accent">Global</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-slate-600 hover:text-accent font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-slate-800 transition-all duration-200 shadow-lg shadow-slate-200"
            >
              Consult Now
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-0.5 bg-current mb-1.5 transition-all"></div>
              <div className="w-6 h-0.5 bg-current mb-1.5 transition-all"></div>
              <div className="w-6 h-0.5 bg-current transition-all"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-slate-100 py-4 px-6 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-3 text-slate-600 font-medium border-b border-slate-50"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-4 text-center bg-slate-900 text-white py-3 rounded-lg font-bold"
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            Book Consultation
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  // 1. We track the loading state here
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-primary overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform origin-top translate-x-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: Text and Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Connecting You with Trusted <span className="text-accent">UK Immigration</span> Experts
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
              We partner with OISC-registered advisors in the UK to provide transparent, reliable, and professional immigration guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="flex items-center justify-center space-x-2 px-8 py-4 bg-accent text-primary rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl shadow-black/20 scale-100 hover:scale-105 active:scale-95">
                <span>Book Free Consultation</span>
                <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#services" className="flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white/20 rounded-full font-bold text-lg hover:border-white transition-all scale-100 hover:scale-105 active:scale-95">
                Get Started
              </a>
            </div>
          </motion.div>
          
          {/* RIGHT SIDE: The Image */}
          {/* 2. We use Framer Motion to force opacity to 0 until isLoaded is true */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="absolute top-6 -right-6 w-full h-full bg-white/5 rounded-3xl -z-10 border border-white/10"></div>
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-primary">
              <img 
                // 3. Removed "public/" - Vite automatically looks in the public folder
                src="/marcin-nowak-iXqTqC-f6jI-unsplash.jpg" 
                alt="VisaBridge Global Hero" 
                // 4. Added text-transparent to hide alt-text while loading
                className="w-full h-auto object-cover text-transparent outline-none border-none"
                referrerPolicy="no-referrer"
                // 5. This triggers the fade-in only when the file is fully downloaded
                onLoad={() => setIsLoaded(true)} 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const TrustStrip = () => {
  const trustItems = [
    { text: "Partnered with UK OISC-Registered Advisors" },
    { text: "Transparent & Ethical Process" },
    { text: "No False Promises" },
  ];

  return (
    <div className="bg-primary py-8 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* We changed this from a grid to a flexbox that perfectly centers the 3 items */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center space-x-3 text-white/90">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
              <span className="text-sm md:text-base font-medium text-center md:text-left">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
             <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">About Us</h2>
             <h3 className="text-4xl font-display font-bold text-primary mb-6 leading-tight">
               Your Trusted Bridge to Licensed <br/>Professional Immigration Experts
             </h3>
             <div className="space-y-6 text-lg text-slate-600">
               <p>
               VisaBridge Global is a dedicated immigration guidance platform designed to put clients first. We bridge the gap between individuals, businesses, and highly qualified UK immigration specialists to ensure a smooth journey.               </p>
               <p>
                 We understand that immigration is a major life decision. That’s why we prioritize:
               </p>
               <ul className="grid grid-cols-2 gap-4 mt-6">
                 {['Transparency', 'Honesty', 'Professional Handling', 'Genuine Evaluation'].map((item) => (
                   <li key={item} className="flex items-center space-x-2 text-slate-800 font-medium">
                     <span className="w-2 h-2 rounded-full bg-accent"></span>
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
             </div>
          </div>
          <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100 relative">
             <div className="relative z-10">
               <h4 className="text-2xl font-display font-bold text-primary mb-4">Our Approach</h4>
               <p className="text-slate-600 text-lg leading-relaxed mb-6">
               We are built on honesty and meticulous care. Every case begins with a rigorous assessment so we can provide realistic expectations and precise, tailored guidance for your immigration journey.               </p>
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                 <p className="italic text-slate-500 text-sm">
                 "Every client receives a verified roadmap, not a standard solution."                 </p>
               </div>
             </div>
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = ({ onServiceSelect }) => {
  const ukServices = [
    { title: "UK Self-Sponsorship", desc: "Guidance for entrepreneurs looking to establish businesses in the UK and obtain sponsorship pathways.", id: "uk-self-sponsorship", icon: Building2 },
    { title: "UK Visitor Visa", desc: "Assistance for individuals and families applying for UK visit visas with proper documentation and case preparation.", id: "uk-visitor-visa", icon: Globe2 },
    { title: "UK Student Visa", desc: "End-to-end guidance for students applying to UK institutions, including admission support and visa processing.", id: "uk-student-visa", icon: GraduationCap },
    { title: "UK Skilled Worker Visa", desc: "Professional guidance for individuals seeking employment-based visa routes in the UK.", id: "uk-skilled-worker-visa", icon: Briefcase },
    { title: "Sponsor Licence", desc: "Expert consultancy for UK companies looking to obtain a sponsor licence and hire international talent.", id: "uk-sponsor-license", icon: Scale },
    { title: "NHS Job Assistance", desc: "Guidance for healthcare professionals seeking opportunities within the UK NHS system.", id: "uk-healthcare-transition", icon: Users },
    { title: "UAE Business Setup & Company Formation", desc: "Assistance with company formation and business setup in the United Arab Emirates.", id: "uae-business-setup", icon: Building2 },
    { title: "UK Property Investment", desc: "Strategic real estate acquisition paired with residency-focused corporate structuring.", id: "uk-property-investment", icon: Building2 },
  ];

  return (
    <section id="services" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background element to add depth to the Navy */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 transform translate-x-32 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Expert Immigration Pathways</h3>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Comprehensive guidance and case strategy for your global ambitions. We provide free initial consultation to assess your profile.
          </p>
        </div>

        {/* UK Services Section */}
        <div className="mb-20">
          <h4 className="flex items-center space-x-4 text-3xl font-display font-bold text-white mb-10 pb-6 border-b border-white/10 relative">
            <span className="w-10 h-10 rounded-lg bg-accent text-primary flex items-center justify-center text-lg font-display font-bold shadow-xl shadow-accent/20 ring-4 ring-accent/10">
              UK
            </span>
            <span className="tracking-tight">UK Immigration Services</span>
            <div className="absolute bottom-0 left-0 w-24 h-1 bg-accent -mb-[2px] rounded-full"></div>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ukServices.map((service, i) => (
              <div 
                key={i} 
                className="bg-accent/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 shadow-2xl hover:bg-accent/10 hover:border-accent/30 hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex flex-col h-full"
                onClick={() => onServiceSelect(service.id)}
              >
                <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 shadow-inner">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-primary" />
                </div>
                <h5 className="font-display font-bold text-white mb-4 text-2xl tracking-tight leading-tight group-hover:text-accent transition-colors">
                  {service.title}
                </h5>
                <p className="text-slate-300 text-base leading-relaxed font-medium mb-8 flex-grow opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.desc}
                </p>
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center text-accent text-sm font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  <span>Explore Details</span>
                  <ChevronRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: "Free Consultation", desc: "We understand your goals and assess your eligibility." },
    { title: "Case Evaluation", desc: "We review your profile and determine the best route." },
    { title: "Expert Connection", desc: "We connect you with advisors." },
    { title: "Application Process", desc: "We handle documentation, submission, and follow-ups." },
    { title: "Ongoing Updates", desc: "You remain informed at every stage of the process." },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">How it works</h2>
          <h3 className="text-4xl font-display font-bold text-primary">Your Journey, Simplified</h3>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl relative ring-8 ring-white">
                  {i + 1}
                </div>
                <h4 className="font-bold text-primary mb-3">{step.title}</h4>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const RegulationSection = () => {
  return (
    <section className="py-24 bg-primary text-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform origin-top translate-x-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-bold mb-6">Important Update</div>
            <h3 className="text-4xl font-display font-bold mb-8">Why Trust & Regulation Matter in Immigration</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Immigration is a legal process that directly impacts your future. In countries like the UK, immigration advice is strictly regulated, and only licensed professionals are authorized to provide it.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                  <span className="text-red-500 text-xl font-bold">!</span>
                </div>
                <p className="text-slate-300">Choosing unverified guidance can lead to incorrect applications, delays, and visa refusals.</p>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-accent/10 rounded-2xl border border-accent/20">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                <p className="text-slate-300">At VisaBridge Global, we prioritize your safety by connecting you ONLY with OISC-registered advisors.</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-10 text-primary shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <ShieldCheck className="w-32 h-32" />
             </div>
             <h4 className="text-2xl font-display font-bold mb-6">Trust & Compliance</h4>
             <p className="text-slate-600 mb-8 leading-relaxed">
               We work in partnership with OISC-registered immigration advisors in the UK, ensuring that all immigration advice and application handling is conducted by licensed professionals.
             </p>
             <div className="border-t border-slate-100 pt-8">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   "Licensed Professionals Only",
                   "Regulated Guidance",
                   "Ethical Standards",
                   "Legal Compliance"
                 ].map((item) => (
                   <div key={item} className="flex items-center space-x-2">
                     <ShieldCheck className="w-5 h-5 text-accent" />
                     <span className="font-semibold text-sm">{item}</span>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    "Transparent and ethical approach",
    "No misleading claims or guarantees",
    "Personalized case handling",
    "Strong focus on genuine applicants",
    "Professional communication and support",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-accent rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
            <div>
              <h3 className="text-4xl font-display font-bold mb-8">Why Choose VisaBridge?</h3>
              <p className="text-white/90 text-xl mb-12 opacity-90">
                We bridge the gap between your dreams and global opportunities through integrity and professional excellence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {reasons.map((reason, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                    <span className="font-medium text-white/90">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
               <img 
                 src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                 alt="Our commitment" 
                 className="rounded-2xl shadow-2xl brightness-90 contrast-110"
                 referrerPolicy="no-referrer"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Do you guarantee visa approval?", a: "No. Visa decisions are made by the relevant immigration authorities. We ensure proper guidance and strong case preparation." },
    { q: "Do you process applications yourself?", a: "Yes, we process applications internally, but only after your case has been consulted on and initiated by a regulated OISC-licensed advisor." },
    { q: "Is consultation free?", a: "Yes, we offer an initial free consultation to assess your profile and eligibility." },
    { q: "What makes you different?", a: "We focus on transparency, ethical practices, and working only with regulated OISC-registered professionals." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Common Questions</h2>
          <h3 className="text-4xl font-display font-bold text-primary">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-primary rounded-2xl border border-white/10 overflow-hidden shadow-xl shadow-primary/10">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 text-left flex justify-between items-center group transition-colors hover:bg-slate-800"
              >
                <span className="font-bold text-white text-lg group-hover:text-accent transition-colors">
                  {faq.q}
                </span>
                <HelpCircle className={`w-6 h-6 text-accent transition-transform duration-300 ${openIndex === i ? 'rotate-180 scale-110' : ''}`} />
              </button>
              
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="px-8 pb-8 text-slate-300 leading-relaxed border-t border-white/5 pt-4"
                >
                  {faq.a}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative two-tone background to make the cards "pop" */}
      <div className="absolute top-0 left-0 w-full h-[60%] bg-primary rounded-b-[4rem] -z-0 shadow-inner"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mt-20 -mr-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center mb-16 pt-8">
          <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Contact Us</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Get in Touch with Our Global Bridge</h3>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Ready to start your journey? Connect with us through any of the channels below and let us guide you to the right expertise.
          </p>
        </div>

        {/* 3-Column Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Phone / WhatsApp Card */}
          <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 text-center group hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-300">
              <Phone className="w-10 h-10 text-accent group-hover:text-primary transition-colors" />
            </div>
            <h4 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-3">WhatsApp / Phone</h4>
            <p className="text-slate-900 text-2xl font-bold font-display">0330-2441900</p>
          </div>

          {/* Email Card */}
          <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 text-center group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="w-20 h-20 mx-auto bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300 relative z-10">
              <Mail className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-3 relative z-10">Email Support</h4>
            <p className="text-slate-900 text-xl font-bold relative z-10">visa.bglobal@gmail.com</p>
          </div>

          {/* Instagram Card */}
          <a 
            href="https://www.instagram.com/visabridge.global" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 text-center group hover:-translate-y-2 hover:border-accent/30 transition-all duration-300 block cursor-pointer"
          >
            <div className="w-20 h-20 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gradient-to-tr group-hover:from-amber-400 group-hover:via-orange-500 group-hover:to-pink-500 group-hover:shadow-lg transition-all duration-300">
              <Instagram className="w-10 h-10 text-accent group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-3">Social Media</h4>
            <p className="text-slate-900 text-2xl font-bold font-display group-hover:text-accent transition-colors">visabridge.global</p>
          </a>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="text-3xl font-display font-bold mb-8">
              VisaBridge<span className="text-accent">Global</span>
            </div>
            <p className="text-slate-400 text-lg max-w-md leading-relaxed mb-8">
              Empowering global mobility by bridging the gap between individuals and regulated immigration expertise.
            </p>
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
               <h5 className="font-bold text-accent mb-2">Legal Disclaimer</h5>
               <p className="text-slate-400 text-sm leading-relaxed">
                 VisaBridge Global is not a law firm and does not provide regulated immigration advice directly. We act as an independent platform connecting clients with OISC-registered immigration advisors in the UK.
               </p>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-lg mb-8 underline underline-offset-8 decoration-accent">Quick Links</h5>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-accent transition-colors">Process</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-lg mb-8 underline underline-offset-8 decoration-accent">Compliance</h5>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Partnering exclusively with OISC-Registered Immigration Advisors for all UK-related applications.
            </p>
            <div className="flex space-x-4">
              <ShieldCheck className="w-10 h-10 text-accent" />
              <CheckCircle2 className="w-10 h-10 text-emerald-500" />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-10 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} VisaBridge Global. All rights reserved.</p>
          <p className="mt-2">Developed with integrity for global citizens.</p>
        </div>
      </div>
    </footer>
  );
};

export default function VisaBridgeSite() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-amber-100 selection:text-amber-900">
      <Navbar onHomeClick={() => setSelectedService(null)} />
      <main className="flex-grow">
        {selectedService ? (
          <ServiceDetail 
            serviceId={selectedService} 
            onBack={() => setSelectedService(null)} 
          />
        ) : (
          <>
            <Hero />
            <TrustStrip />
            <About />
            <Services onServiceSelect={setSelectedService} />
            <HowItWorks />
            <RegulationSection />
            <WhyChooseUs />
            <FAQ />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
