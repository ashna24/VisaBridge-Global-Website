import { motion } from 'motion/react';
import { ChevronRight, CheckCircle2, ShieldCheck, Users, Globe2, GraduationCap, Briefcase, Building2, Scale, ArrowLeft, Home, Activity, Heart } from 'lucide-react';
import { useEffect } from 'react';

export const SERVICE_CONTENT: Record<string, any> = {
  "uk-visitor-visa": {
    title: "UK Standard Visitor Visa: Your Gateway to Britain",
    icon: Globe2,
    content: (
      <div className="space-y-10">
        <div className="bg-accent/5 p-8 rounded-3xl border border-accent/20">
          <p className="text-lg leading-relaxed text-slate-700 mb-4 font-medium">
            The United Kingdom remains a premier global destination for culture, commerce, and connection. However, with the full implementation of the 2026 Digital Border mandate and the ETA (Electronic Travel Authorisation) system, navigating entry requirements now requires expert precision.
          </p>
          <p className="text-lg leading-relaxed text-slate-600">
            At Visa Bridge Global, we bridge the gap between complex immigration policies and your travel goals. We don’t just process paperwork, we build a comprehensive case to ensure your visit to the UK is seamless and successful.
          </p>
        </div>

        <div>
          <h4 className="text-2xl font-display font-bold text-primary mb-6 flex items-center">
            <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center mr-3 text-sm">01</span>
            Who We Serve
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white shadow-lg shadow-slate-200/50 rounded-2xl border-t-4 border-t-accent">
              <h5 className="font-bold text-primary mb-2 text-lg">Global Tourists</h5>
              <p className="text-slate-600 text-sm leading-relaxed">Explorers seeking a stress-free entry to experience British heritage.</p>
            </div>
            <div className="p-6 bg-white shadow-lg shadow-slate-200/50 rounded-2xl border-t-4 border-t-primary">
              <h5 className="font-bold text-primary mb-2 text-lg">Family & Social Visits</h5>
              <p className="text-slate-600 text-sm leading-relaxed">Individuals reuniting with loved ones or attending milestone celebrations.</p>
            </div>
            <div className="p-6 bg-white shadow-lg shadow-slate-200/50 rounded-2xl border-t-4 border-t-accent">
              <h5 className="font-bold text-primary mb-2 text-lg">Corporate & Business Travelers</h5>
              <p className="text-slate-600 text-sm leading-relaxed">Professionals attending high-stakes meetings, trade fairs, or corporate events.</p>
            </div>
            <div className="p-6 bg-white shadow-lg shadow-slate-200/50 rounded-2xl border-t-4 border-t-primary">
              <h5 className="font-bold text-primary mb-2 text-lg">Refusal Reversal Specialists</h5>
              <p className="text-slate-600 text-sm leading-relaxed">We provide a lifeline for applicants who have faced previous rejections, using "forensic document review" to correct and resubmit.</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-display font-bold text-primary mb-6 flex items-center">
            <span className="w-8 h-8 rounded-lg bg-accent text-primary flex items-center justify-center mr-3 text-sm">02</span>
            The Visa Bridge Edge: Our Comprehensive Support
          </h4>
          <ul className="space-y-4 bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <li className="flex items-start space-x-4">
              <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <strong className="text-primary block text-lg mb-1">2026 Compliance Audit</strong>
                <p className="text-slate-600">We verify if you require a Standard Visa or the new Digital ETA, ensuring you are compliant with the latest entry protocols.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <strong className="text-primary block text-lg mb-1">Financial Portfolio Strategy</strong>
                <p className="text-slate-600">We guide you in presenting "bulletproof" evidence of funds, focusing on the 28-day consistency rule and disposable income.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <strong className="text-primary block text-lg mb-1">The "Intent & Ties" Narrative</strong>
                <p className="text-slate-600">The #1 reason for refusal is a lack of "ties to home." We help you articulate your professional and personal commitments to satisfy entry clearance officers.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <strong className="text-primary block text-lg mb-1">Biometric & eVisa Guidance</strong>
                <p className="text-slate-600">Step-by-step assistance with the UK’s fully digital immigration status (eVisas), eliminating the need for physical vignettes for many nationalities.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  "uk-student-visa": {
    title: "UK Student Visa: Engineering Your Educational Future",
    icon: GraduationCap,
    content: (
      <div className="space-y-10">
        <p className="text-lg leading-relaxed text-slate-600 bg-accent/5 p-8 rounded-3xl border border-accent/20">
          <strong className="text-primary block mb-2 text-xl">Your Educational Milestone</strong>
          Securing your place at a UK institution is a major milestone; securing your visa is the critical final step. At Visa Bridge Global, we ensure your Confirmation of Acceptance for Studies (CAS) is supported by a flawless financial and administrative portfolio.
        </p>

        <div className="p-10 bg-primary rounded-3xl shadow-xl shadow-primary/20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <h4 className="text-2xl font-display font-bold text-accent mb-4 flex items-center">
              <ShieldCheck className="w-6 h-6 mr-3" />
              The 2026 Financial Success Formula
            </h4>
            <p className="text-slate-300 text-lg">
              To meet the strict UKVI maintenance requirements, your evidence must show a specific total held for a minimum of 28 consecutive days.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-bold text-primary flex items-center space-x-3 text-lg">
              <div className="w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center shrink-0">1</div>
              <span>Unpaid Tuition Fees</span>
            </h5>
            <p className="text-slate-600">We review your university offer to ensure it meets all Student Route criteria.</p>
          </div>
          <div className="space-y-4 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-bold text-primary flex items-center space-x-3 text-lg">
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">2</div>
              <span>Maintenance Fund Forensics</span>
            </h5>
            <p className="text-slate-600">Detailed oversight of the "28-day rule" to prevent technical refusals based on account fluctuations.</p>
          </div>
          <div className="space-y-4 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-bold text-primary flex items-center space-x-3 text-lg">
              <div className="w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center shrink-0">3</div>
              <span>Interview Coaching</span>
            </h5>
            <p className="text-slate-600">Personalised preparation for UKVI credibility interviews, focusing on your academic intent and future career trajectory.</p>
          </div>
          <div className="space-y-4 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-bold text-primary flex items-center space-x-3 text-lg">
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">4</div>
              <span>Post-Study Transitions</span>
            </h5>
            <p className="text-slate-600">Early-stage guidance on the Graduate Route to help you plan your professional future in the UK after graduation.</p>
          </div>
        </div>
      </div>
    )
  },
  "uk-self-sponsorship": {
    title: "UK Business Ownership: The Self-Sponsorship Route",
    icon: Building2,
    content: (
      <div className="space-y-10">
        <p className="text-lg leading-relaxed text-slate-700 bg-accent/5 p-8 rounded-3xl border border-accent/20 font-medium">
          Establishing a business in the UK no longer requires you to find an external employer to sponsor your residency. Through the Self-Sponsorship pathway, you can empower yourself by founding a UK company and acting as your own sponsor.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h4 className="text-2xl font-display font-bold text-primary mb-6 flex items-center">
              <div className="w-2 h-8 bg-accent rounded-full mr-3"></div>
              Why Choose Self-Sponsorship?
            </h4>
            <div className="space-y-4">
              {[
                { title: "Complete Ownership", text: "You can hold 100% of the shares in your UK entity and serve as its Director." },
                { title: "Industry Versatility", text: "Unlike \"innovator\" visas, this pathway is open to almost any legitimate business sector." },
                { title: "Path to Residency", text: "Direct route toward Indefinite Leave to Remain (ILR), allowing application after five years." },
                { title: "Family Inclusion", text: "Your spouse and children can join you, enjoying the right to live, work, and study in the UK." }
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white shadow-sm rounded-xl border-l-4 border-l-primary hover:border-l-accent transition-colors">
                  <h5 className="font-bold text-primary mb-1 text-lg">{item.title}</h5>
                  <p className="text-slate-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-3xl shadow-xl">
             <h4 className="text-2xl font-display font-bold text-accent mb-6">Are You Eligible?</h4>
             <ul className="space-y-6">
               {[
                 { title: "Professional Expertise", text: "Demonstrated background or skill set relevant to your business." },
                 { title: "Language Skills", text: "Proficiency in English to effectively lead UK operations." },
                 { title: "Investment Ready", text: "Access to sufficient funds to launch and sustain the business." },
                 { title: "Age & Compliance", text: "Must be 18+ and meet health and character requirements." }
               ].map((item, i) => (
                 <li key={i} className="flex items-start space-x-4">
                   <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                   <div>
                     <strong className="block text-lg mb-1">{item.title}</strong>
                     <p className="text-slate-300 text-sm">{item.text}</p>
                   </div>
                 </li>
               ))}
             </ul>
          </div>
        </div>

        {/* STRUCTURED PROCESS WITH IMAGE FILLING WHITE SPACE */}
        <div className="pt-8 border-t border-slate-200">
          <h4 className="text-3xl font-display font-bold text-primary mb-8 text-center md:text-left">Structured Process</h4>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* Steps - takes up 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {[
                { title: "Strategic Planning", text: "Review background and select the best business model." },
                { title: "Corporate Formation", text: "Legal incorporation and correct structuring for sponsorship." },
                { title: "Sponsor License Acquisition", text: "Apply for legal authority to hire international talent—including you." },
                { title: "Visa Issuance", text: "Certificate of Sponsorship (COS) allows Skiled Worker visa filing." },
                { title: "Relocation & Support", text: "Bank accounts, healthcare, schools, and settling in." }
              ].map((step, i) => (
                <div key={i} className="flex items-center space-x-6 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 text-accent flex items-center justify-center shrink-0 font-display font-bold text-xl">
                    {i + 1}
                  </div>
                  <div>
                    <h5 className="font-bold text-primary text-lg">{step.title}</h5>
                    <p className="text-slate-600">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image - takes up 1 column on the right to fill space */}
            <div className="lg:col-span-1 hidden lg:block relative">
              {/* Decorative background block */}
              <div className="absolute inset-0 bg-accent rounded-[2rem] translate-x-4 translate-y-4 opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
                alt="UK Corporate Business" 
                className="relative rounded-[2rem] object-cover shadow-2xl h-[480px] w-full border-4 border-white"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </div>
    )
  },
  "uk-sponsor-license": {
    title: "UK Sponsor License: Solutions",
    icon: Scale,
    content: (
      <div className="space-y-10">
        <p className="text-lg leading-relaxed text-slate-700 bg-accent/5 p-8 rounded-3xl border border-accent/20 font-medium">
          A UK Sponsor License is the gateway for British businesses to recruit global talent. This legal authorization allows companies to employ professionals from outside the UK via routes like the Skilled Worker visa, ensuring your recruitment remains compliant with Home Office regulations. Whether you are launching a new venture or scaling an established firm, our consultancy provides the structural expertise needed to navigate the complexities of corporate sponsorship.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 bg-white shadow-xl shadow-slate-200/50 rounded-3xl border border-slate-100">
            <h4 className="text-2xl font-display font-bold text-primary mb-8 flex items-center">
               <div className="w-2 h-8 bg-accent rounded-full mr-3"></div>
               Who We Support
            </h4>
            <ul className="space-y-6">
              {[
                { title: "Growing Enterprises", desc: "UK companies looking to bridge local skill gaps with international expertise." },
                { title: "Innovative Startups", desc: "New businesses building specialized global talent pipelines from day one." },
                { title: "Strategic Employers", desc: "Firms seeking the legal capability to sponsor Skilled Worker visas." },
                { title: "Compliance-Focused Owners", desc: "Organizations requiring a clear understanding of their long-term sponsorship duties." }
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-primary block text-lg mb-1">{item.title}</strong>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 bg-primary text-white rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>
            <div>
              <h4 className="text-2xl font-display font-bold mb-8 text-accent relative z-10">Our Areas of Expertise</h4>
              <ul className="space-y-6 relative z-10">
                {[
                  { title: "Eligibility Assessment", desc: "Evaluating your business to ensure it meets all Home Office sponsorship criteria." },
                  { title: "Document Management", desc: "Streamlining the preparation of required evidence and corporate records." },
                  { title: "Application Strategy", desc: "Designing a clear roadmap for a successful license submission." },
                  { title: "Compliance Guidance", desc: "Educating your team on mandatory sponsor duties and record-keeping." },
                  { title: "Specialized Consultation", desc: "Providing professional insights for complex business sponsorship scenarios." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <ShieldCheck className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <strong className="block text-lg mb-1">{item.title}</strong>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
              <h5 className="font-bold text-accent mb-2">Empower Your Global Recruitment</h5>
              <p className="text-sm text-slate-300">Don't let borders limit your team's potential. Our consultants provide the clarity and professional support necessary to secure your Sponsor License and build a world-class workforce.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  "uae-business-setup": {
    title: "UAE Business Setup: Company Formation",
    icon: Building2,
    content: (
      <div className="space-y-10">
        <p className="text-lg leading-relaxed text-slate-700 bg-accent/5 p-8 rounded-3xl border border-accent/20 font-medium">
          The United Arab Emirates is a premier destination for global entrepreneurs, offering a tax-efficient environment and a strategic location for international trade.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h4 className="text-2xl font-display font-bold text-primary mb-8">Who This Is For</h4>
            <div className="space-y-4">
              {["Entrepreneurs", "Global Investors", "Relocating Owners", "Residency Seekers"].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 p-5 bg-white rounded-2xl shadow-sm border-l-4 border-l-accent">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-primary text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-display font-bold text-primary mb-8 flex items-center">
              <div className="w-2 h-8 bg-primary rounded-full mr-3"></div>
              How We Help
            </h4>
            <ul className="space-y-6">
              {["Formation Guidance", "Jurisdiction Selection (Mainland vs Free Zone)", "Documentation Support", "Strategic Planning", "End-to-End Support"].map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-slate-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  },
  "uk-skilled-worker-visa": {
    title: "UK Skilled Worker Visa: Consultancy",
    icon: Briefcase,
    content: (
      <div className="space-y-10">
        <p className="text-lg leading-relaxed text-slate-700 bg-accent/5 p-8 rounded-3xl border border-accent/20 font-medium">
          The Skilled Worker visa is the primary route for international professionals to live and work in the UK under the sponsorship of a licensed employer. To qualify, applicants must have a valid job offer that meets specific salary and skill requirements while demonstrating proficiency in the English language. Our consultancy provides a clear, step-by-step framework to help you navigate the application process with precision and confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-primary text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <h4 className="text-2xl font-display font-bold text-accent mb-8 relative z-10">Who This Is For</h4>
            <ul className="space-y-6 relative z-10">
              {[
                { title: "Professionals with Job Offers", desc: "Individuals who have secured a role from a UK-based licensed sponsor." },
                { title: "Long-term Career Seekers", desc: "Those planning to relocate to the UK for permanent employment opportunities." },
                { title: "Path to Residency", desc: "Applicants looking for a visa category that leads toward permanent UK settlement." },
                { title: "Skilled Specialists", desc: "International workers aiming to match their expertise with UK market needs." }
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4 bg-white/5 p-5 rounded-xl border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <div>
                    <strong className="block text-lg mb-1">{item.title}</strong>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8">
             <h4 className="text-2xl font-display font-bold text-primary mb-8 flex items-center">
               <div className="w-2 h-8 bg-accent rounded-full mr-3"></div>
               How We Help
             </h4>
             <ul className="space-y-6 mb-10">
               {[
                 { title: "Eligibility Reviews", desc: "Assessing your profile against current Home Office skill and salary thresholds." },
                 { title: "Sponsorship Guidance", desc: "Helping you understand the requirements for a valid Certificate of Sponsorship (CoS)." },
                 { title: "Document Preparation", desc: "Organizing the necessary evidence, from English test results to financial records." },
                 { title: "Application Strategy", desc: "Providing a structured plan to ensure your filing is accurate and timely." },
                 { title: "Case Consultation", desc: "Offering professional insights to address specific challenges in your visa journey." }
               ].map((item, i) => (
                 <li key={i} className="flex items-start space-x-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                   <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                     <CheckCircle2 className="w-5 h-5" />
                   </div>
                   <div>
                     <strong className="block text-primary text-lg mb-1">{item.title}</strong>
                     <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                   </div>
                 </li>
               ))}
             </ul>
             <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
               <h5 className="font-bold text-primary mb-2">Begin Your UK Career</h5>
               <p className="text-slate-600 text-sm">If you are ready to transition your professional life to the United Kingdom, our experts provide the structured support needed to handle the complexities of the Skilled Worker route.</p>
             </div>
          </div>
        </div>
      </div>
    )
  },
 "uk-property-investment": {
    title: "Invest in UK Property: Explore Residency",
    icon: Home,
    content: (
      <div className="space-y-10">
        <p className="text-lg leading-relaxed text-slate-700 bg-accent/5 p-8 rounded-3xl border border-accent/20 font-medium">
          The UK real estate market offers robust investment potential and a unique gateway to residency through strategic planning. By combining property acquisition with established immigration pathways, international investors can build a high-performing portfolio while securing a future in the United Kingdom. Our consultancy bridges the gap between high-value property investment and long-term residency, providing the expertise needed to manage both your assets and your relocation.
        </p>

        <div>
          <h4 className="text-2xl font-display font-bold text-primary mb-6">Investment Opportunities</h4>
          <p className="text-slate-600 mb-8">We specialize in identifying and securing diverse property assets tailored to your financial goals:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-primary text-white rounded-3xl shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
              <h5 className="font-bold text-accent mb-3 text-xl relative z-10">Residential & Off-Plan</h5>
              <p className="text-slate-300 text-sm italic relative z-10">High-growth developments and new builds in key urban centers.</p>
            </div>
            <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-md hover:shadow-lg transition-shadow">
              <h5 className="font-bold text-primary mb-3 text-xl">Hospitality Assets</h5>
              <p className="text-slate-500 text-sm italic">Hotel investments, Airbnb portfolios, and holiday homes.</p>
            </div>
            <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-md hover:shadow-lg transition-shadow">
              <h5 className="font-bold text-primary mb-3 text-xl">Commercial & Land</h5>
              <p className="text-slate-500 text-sm italic">Office spaces, retail units, and strategic land development opportunities.</p>
            </div>
            <div className="p-8 bg-accent text-primary rounded-3xl shadow-xl relative overflow-hidden group">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-10 -mb-10 group-hover:scale-150 transition-transform duration-500"></div>
              <h5 className="font-bold mb-3 text-xl relative z-10">Value-Add Projects</h5>
              <p className="text-primary/80 text-sm italic relative z-10">Refurbished properties designed for rental yield or resale appreciation.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary text-accent rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-display font-bold text-primary">The Residency Connection</h4>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              While property purchase alone does not grant a visa, we help you leverage your investment through the Self-Sponsorship route. By establishing a UK-based property management or real estate company, you can act as your own sponsor and qualify for a Skilled Worker visa.
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h5 className="font-bold text-primary mb-4">Benefits of this approach:</h5>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary">Full Control:</strong>
                    <span className="text-slate-600 ml-1">Own and manage your UK property portfolio through your own corporate entity.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary">Family Security:</strong>
                    <span className="text-slate-600 ml-1">Bring your spouse and children to live, work, and study in the UK.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-display font-bold text-primary mb-6 flex items-center">
              <div className="w-2 h-8 bg-accent rounded-full mr-3"></div>
              How We Help
            </h4>
            <ul className="space-y-4 mb-8">
              {[
                { title: "Investment Strategy", desc: "Aligning your property selection with UK immigration requirements." },
                { title: "Corporate Structuring", desc: "Setting up your UK company to manage your real estate assets." },
                { title: "Sponsorship Licensing", desc: "Assisting your company in obtaining the legal right to sponsor your visa." },
                { title: "Portfolio Management", desc: "Ongoing support to ensure your investments remain compliant and profitable." }
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <span className="font-bold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <strong className="block text-primary mb-1">{item.title}</strong>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="p-6 bg-primary text-white rounded-2xl">
              <h5 className="font-bold text-accent mb-2">Build Your UK Legacy</h5>
              <p className="text-slate-300 text-sm">Whether you are looking for offshore stability or a home for your family, we provide the structured guidance to turn property investment into a pathway for residency.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  "uk-healthcare-transition": {
    title: "UK Healthcare Transition: NHS Career Program",
    icon: Activity,
    content: (
      <div className="space-y-10">
        <p className="text-lg leading-relaxed text-slate-700 bg-accent/5 p-8 rounded-3xl border border-accent/20 font-medium">
          The UK's NHS offers unparalleled opportunities for healthcare professionals. We specialize in the ethical recruitment of medical professionals.
        </p>

        <div>
          <h4 className="text-2xl font-display font-bold text-primary mb-8 text-center">Medical Opportunities</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-accent transition-all">
              <div className="w-16 h-16 mx-auto bg-primary/5 text-primary rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h5 className="font-bold text-primary text-xl">Doctors</h5>
            </div>
            <div className="p-8 bg-primary rounded-3xl shadow-xl text-white hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 mx-auto bg-white/10 text-accent rounded-full flex items-center justify-center mb-4">
                <Activity className="w-8 h-8" />
              </div>
              <h5 className="font-bold text-xl">Nurses</h5>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-accent transition-all">
              <div className="w-16 h-16 mx-auto bg-primary/5 text-primary rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h5 className="font-bold text-primary text-xl">Care Assistants</h5>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 p-10 rounded-3xl border border-slate-200">
           <div className="space-y-6">
             <h4 className="text-2xl font-display font-bold text-primary border-b border-slate-200 pb-4">Why Join?</h4>
             <ul className="space-y-4">
               {["Ethical Standards adherence", "Health & Care Worker Visa route", "Professional Growth in NHS", "Family Benefits"].map((item, i) => (
                 <li key={i} className="flex items-center space-x-4 p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                   <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                     <CheckCircle2 className="w-4 h-4 text-accent" />
                   </div>
                   <span className="font-medium text-slate-700">{item}</span>
                 </li>
               ))}
             </ul>
           </div>
           <div className="space-y-6">
             <h4 className="text-2xl font-display font-bold text-primary border-b border-slate-200 pb-4">Our Support</h4>
             <ul className="space-y-4">
               {["Compliance & Licensing", "English Readiness", "Visa Processing", "Settlement Assistance"].map((item, i) => (
                 <li key={i} className="flex items-center space-x-4 p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                   <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                     <ShieldCheck className="w-4 h-4 text-primary" />
                   </div>
                   <span className="font-medium text-slate-700">{item}</span>
                 </li>
               ))}
             </ul>
           </div>
        </div>
      </div>
    )
  },
  "uk-settlement": {
    title: "UK Settlement: ILR Consultancy",
    icon: ShieldCheck,
    content: (
       <div className="space-y-8">
        <div className="bg-primary text-white p-10 rounded-3xl shadow-xl">
          <p className="text-xl leading-relaxed mb-4">
            Guidance for long-term residency, Indefinite Leave to Remain (ILR), and British citizenship pathways.
          </p>
          <p className="text-accent font-medium">This section covers the specialized requirements for making the UK your permanent home.</p>
        </div>
      </div>
    )
  }
};

export const ServiceDetail = ({ serviceId, onBack }: { serviceId: string, onBack: () => void }) => {
  const contentMap = SERVICE_CONTENT[serviceId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!contentMap) {
    return (
      <div className="pt-40 pb-20 text-center bg-slate-50 min-h-screen">
        <h2 className="text-2xl font-bold text-primary">Service Not Found</h2>
        <button onClick={onBack} className="mt-4 text-accent font-bold hover:underline">Back to all services</button>
      </div>
    );
  }

  const Icon = contentMap.icon;
  // Split title to style the subtitle differently (e.g., "Main Title: Subtitle")
  const titleParts = contentMap.title.split(':');

  return (
    <div className="pt-28 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button 
          onClick={onBack}
          className="group flex items-center space-x-2 text-slate-500 hover:text-primary font-bold mb-8 transition-all bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200 w-fit"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-accent" />
          <span>Back to Services</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          
          {/* COLORFUL NAVY/GOLD HEADER */}
          <div className="bg-primary rounded-[3rem] p-10 md:p-16 mb-12 relative overflow-hidden shadow-2xl shadow-primary/10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="w-24 h-24 rounded-[2rem] bg-accent/20 border border-accent/30 flex items-center justify-center text-accent shrink-0 shadow-inner backdrop-blur-sm">
                 <Icon className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                  {titleParts[0]}
                </h1>
                {titleParts[1] && (
                  <h2 className="text-2xl md:text-3xl font-display font-medium text-accent mt-3">
                    {titleParts[1].trim()}
                  </h2>
                )}
              </div>
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200/40 border border-slate-100">
            <div className="prose prose-slate max-w-none">
              {contentMap.content}
            </div>
          </div>

          {/* THEMED BOTTOM CTA */}
          <div className="mt-16 p-12 bg-primary rounded-[3rem] border border-white/10 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent/0 via-accent to-accent/0"></div>
             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
             
             <div className="relative z-10">
               <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Take the Next Step</h3>
               <p className="text-slate-300 mb-10 max-w-xl mx-auto text-lg">
                 Ready to move forward with your {titleParts[0]}? Book a free consultation to discuss your specific case requirements.
               </p>
               <a 
                 href="#contact" 
                 onClick={(e) => {
                   e.preventDefault();
                   onBack();
                   setTimeout(() => {
                     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                   }, 100);
                 }}
                 className="inline-flex items-center space-x-3 px-10 py-5 bg-accent text-primary rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl shadow-black/20 hover:scale-105 active:scale-95"
                >
                  <span>Talk To Us</span>
                  <ChevronRight className="w-6 h-6" />
                </a>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};