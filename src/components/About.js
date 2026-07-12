import React from 'react';
import Typed from 'react-typed';

// Import company logos as React components to preserve SVG features (gradients, filters, glows) when rendered inline
import { ReactComponent as BooleanMathsLogo } from '../Assets/Company/booleanmaths.svg';
import { ReactComponent as TorsecureLogo } from '../Assets/Company/torsecure.svg';
import { ReactComponent as ConectiaLogo } from '../Assets/Company/conectia.svg';

export default function About() {
  // Company data
  const booleanMathsData = {
    name: "BooleanMaths / Medront Datalabs",
    image: BooleanMathsLogo,
    website: "https://www.booleanmaths.com"
  };

  const torsecureData = {
    name: "Torsecure",
    image: TorsecureLogo,
    website: "https://www.torsecure.com" 
  };

  const connectiaTechnologiesData = {
    name: "Connectia Technologies",
    image: ConectiaLogo,
    website: "https://connectiainfotech.in/"
  };

  return (
    <div className="flex flex-col h-screen overflow-y-auto no-scrollbar" style={{ color: '#faebd7', fontFamily: 'monospace' }}>
      {/* Scrollable Container */}
      <div className="max-w-6xl mx-auto w-full p-4 sm:p-8 md:p-12 mb-10 mt-16 sm:mt-12">
        
        {/* Terminal Header */}
        <div className="mb-8 text-left border-b border-zinc-800 pb-4">
          <div className="flex items-center space-x-1.5 mb-3">
            <span className="w-3 h-3 rounded-full bg-[#ef4444] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#eab308] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#22c55e] inline-block"></span>
            <span className="pl-2 text-xs text-zinc-500">bash - about_me.json</span>
          </div>
          <div className="text-sm sm:text-base font-mono">
            <span className="text-green-400">kedar@portfolio</span>:<span className="text-cyan-400">~</span>${' '}
            <Typed
              strings={['cat profile.json --format=dashboard']}
              typeSpeed={40}
              showCursor={true}
              cursorChar="▋"
            />
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-start">
          
          {/* Left Column - Profile & Metrics (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Profile Avatar Card */}
            <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 p-6 rounded-2xl flex flex-col items-center text-center shadow-lg hover:border-[#F96815]/40 transition-all duration-300">
              <div className="relative w-32 h-32 mb-4 rounded-full p-1 bg-gradient-to-tr from-[#F96815] to-[gold]">
                <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
                  <img 
                    src={require('../Assets/Hero.png')} 
                    alt="Kedar Shenoy" 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <span className="absolute bottom-1 right-2 w-3.5 h-3.5 bg-green-500 border-2 border-black rounded-full animate-pulse"></span>
              </div>
              
              <h2 className="text-2xl font-bold tracking-tight text-[#faebd7]">
                <span className="bg-gradient-to-r from-[#F96815] to-[gold] bg-clip-text text-transparent">Kedar Shenoy</span>
              </h2>
              <p className="text-sm text-amber-300 mt-1 font-semibold">Software Engineer</p>
              
              <div className="mt-4 py-1.5 px-3 bg-zinc-950/80 rounded-full border border-zinc-800/60 text-xs text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Active & Open to Roles</span>
              </div>
            </div>

            {/* Quick Achievements / Metrics */}
            <div className="bg-zinc-900/20 border border-zinc-900 p-5 rounded-2xl space-y-4">
              <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-bold border-b border-zinc-800 pb-2">Key Accomplishments</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-zinc-950/40 border border-zinc-800/40 rounded-xl">
                  <p className="text-lg font-bold text-[#ffa7ec]">20-25%</p>
                  <p className="text-[10px] text-zinc-400 mt-1 leading-tight">ROAS Growth for Brands</p>
                </div>
                <div className="p-3 bg-zinc-950/40 border border-zinc-800/40 rounded-xl">
                  <p className="text-lg font-bold text-cyan-400">25k+/min</p>
                  <p className="text-[10px] text-zinc-400 mt-1 leading-tight">RabbitMQ & BullMQ Throughput</p>
                </div>
                <div className="p-3 bg-zinc-950/40 border border-zinc-800/40 rounded-xl">
                  <p className="text-lg font-bold text-amber-400">95%+</p>
                  <p className="text-[10px] text-zinc-400 mt-1 leading-tight">Attribution & Tracking Coverage</p>
                </div>
                <div className="p-3 bg-zinc-950/40 border border-zinc-800/40 rounded-xl">
                  <p className="text-lg font-bold text-emerald-400">9.0+</p>
                  <p className="text-[10px] text-zinc-400 mt-1 leading-tight">Meta CAPI Event Match Quality</p>
                </div>
              </div>
            </div>

            {/* Categorized Tech Stack Grid */}
            <div className="bg-zinc-900/10 border border-zinc-900 p-6 rounded-2xl space-y-6">
              <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
                <span>[02]</span> Tech Stack Registry
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {/* Frontend */}
                <div className="p-4 bg-zinc-950/50 border border-zinc-800/60 rounded-xl space-y-3">
                  <h4 className="text-xs uppercase font-bold text-[#F96815]">Frontend</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['React.js', 'Next.js', 'Remix', 'React Native', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'Material UI'].map((skill) => (
                      <span key={skill} className="px-2 py-0.5 rounded text-xs bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors text-zinc-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend & DB */}
                <div className="p-4 bg-zinc-950/50 border border-zinc-800/60 rounded-xl space-y-3">
                  <h4 className="text-xs uppercase font-bold text-[gold]">Backend & Databases</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['Node.js', 'Express', 'JavaScript', 'SQL', 'PostgreSQL', 'ClickHouse', 'MongoDB', 'Prisma', 'Mongoose'].map((skill) => (
                      <span key={skill} className="px-2 py-0.5 rounded text-xs bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors text-zinc-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* API & E-Commerce */}
                <div className="p-4 bg-zinc-950/50 border border-zinc-800/60 rounded-xl space-y-3">
                  <h4 className="text-xs uppercase font-bold text-[#ffa7ec]">APIs & Marketing</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['Meta Ads API', 'Meta Conversion API (CAPI)', 'Google Marketing API', 'Shopify App Integration'].map((skill) => (
                      <span key={skill} className="px-2 py-0.5 rounded text-xs bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors text-zinc-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools & Devops */}
                <div className="p-4 bg-zinc-950/50 border border-zinc-800/60 rounded-xl space-y-3">
                  <h4 className="text-xs uppercase font-bold text-cyan-400">Tools & DevOps</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['Cloudflare Serverless', 'Docker', 'Linux', 'GitHub', 'RabbitMQ', 'BullMQ', 'Sentry', 'Mixpanel', 'Calendly'].map((skill) => (
                      <span key={skill} className="px-2 py-0.5 rounded text-xs bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors text-zinc-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline, Bio & Tech Stack (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Bio Section */}
            <div className="bg-zinc-900/10 border border-zinc-900 p-6 rounded-2xl space-y-4">
              <h3 className="text-lg font-bold text-[#F96815] flex items-center gap-2">
                <span>[01]</span> Profile Summary
              </h3>
              <p className="leading-relaxed text-zinc-300 text-justify text-sm sm:text-base">
                Hey there! I'm Kedar, a Software Engineer specialized in building high-throughput event tracking systems, marketing attribution dashboards, and automated journey workflows. From single-handedly architecting scalable Shopify integration apps and Conversion APIs processing thousands of events per minute, to designing visual drag-and-drop campaign canvas tools using React Flow, I build robust full-stack platforms that connect browsers, webhooks, and advertisement networks cleanly and securely.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="bg-zinc-900/10 border border-zinc-900 p-6 rounded-2xl space-y-6">
              <h3 className="text-lg font-bold text-[gold] flex items-center gap-2">
                <span>[03]</span> Career Journey
              </h3>
              
              <div className="relative border-l border-zinc-800 pl-6 ml-2 space-y-8">
                {/* Item 1 */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 bg-cyan-400 w-4 h-4 rounded-full border-4 border-black ring-2 ring-cyan-950"></span>
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-bold text-zinc-400">2024 - Present</span>
                      <a 
                        href={booleanMathsData.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-sm sm:text-base font-bold bg-cyan-950/30 text-cyan-400 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-900/30 transition-all duration-300 shadow-[0_0_5px_rgba(77,208,225,0.05)] hover:shadow-[0_0_12px_rgba(77,208,225,0.2)] transform hover:-translate-y-0.5 inline-flex items-center gap-2.5"
                      >
                        <BooleanMathsLogo className="w-6 h-6 sm:w-7 sm:h-7 filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
                        <span>BooleanMaths / Medront Datalabs</span>
                        <span className="text-[10px]">↗</span>
                      </a>
                    </div>
                    
                    <p className="text-xs text-zinc-400 italic">Core software engineer leading tracking architectures, marketing attribution platforms, and automated workflow engines.</p>
                    
                    <div className="space-y-3.5 pl-1 text-sm text-zinc-300 leading-relaxed">
                      
                      {/* Sub-system 1 */}
                      <details 
                        onMouseEnter={(e) => { e.currentTarget.open = true; }}
                        onMouseLeave={(e) => { e.currentTarget.open = false; }}
                        className="group border border-zinc-900/60 rounded-xl bg-zinc-950/20 overflow-hidden transition-all duration-300"
                      >
                        <summary className="flex items-center justify-between p-3.5 cursor-pointer select-none text-xs font-bold uppercase tracking-wider text-cyan-400 hover:bg-zinc-900/20 list-none">
                          <span className="flex items-center gap-2">
                            <span>⚡</span> Real-Time Tracking & Shopify Integration Engine
                          </span>
                          <span className="transition-transform duration-300 group-open:rotate-180 text-zinc-500 text-[10px]">▼</span>
                        </summary>
                        <div className="p-4 border-t border-zinc-900/60 text-xs sm:text-sm text-zinc-300 space-y-3 text-justify bg-black/40">
                          <p>
                            Single-handedly architected and built the complete <strong className="text-amber-300">Shopify App</strong> integration flow (<a href="https://apps.shopify.com/booleanmaths" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">apps.shopify.com/booleanmaths</a>) from initial OAuth setup, embedding context, and store installations to dynamic theme customizers and usage-based billing logic.
                          </p>
                          <p>
                            Designed a performance-optimized tracking engine featuring a frontend plugin that moves event listeners to a background <strong className="text-cyan-300">WebWorker</strong>, eliminating main-thread blocking. Bridged the gap between client browser-side events and server-side webhooks by dynamically injecting bridging data into Shopify’s <strong className="text-cyan-300">noteAttributes</strong>.
                          </p>
                          <p>
                            Built a server infrastructure capable of processing <strong className="text-cyan-300">thousands of events per minute</strong>, automatically mapping Shopify order and cart webhook payloads back to original web acquisition sources.
                          </p>
                          <p>
                            Developed a theme extension that injects a Post-Purchase Customer Survey directly on checkout pages. Merchants can dynamically create questions from our admin portal to capture zero-party data, feeding it back into our attribution algorithms. Integrated custom-built backend MCP servers to coordinate these actions.
                          </p>
                        </div>
                      </details>

                      {/* Sub-system 2 */}
                      <details 
                        onMouseEnter={(e) => { e.currentTarget.open = true; }}
                        onMouseLeave={(e) => { e.currentTarget.open = false; }}
                        className="group border border-zinc-900/60 rounded-xl bg-zinc-950/20 overflow-hidden transition-all duration-300"
                      >
                        <summary className="flex items-center justify-between p-3.5 cursor-pointer select-none text-xs font-bold uppercase tracking-wider text-emerald-400 hover:bg-zinc-900/20 list-none">
                          <span className="flex items-center gap-2">
                            <span>📊</span> Meta & Google Marketing Integrations (CAPI)
                          </span>
                          <span className="transition-transform duration-300 group-open:rotate-180 text-zinc-500 text-[10px]">▼</span>
                        </summary>
                        <div className="p-4 border-t border-zinc-900/60 text-xs sm:text-sm text-zinc-300 space-y-3 text-justify bg-black/40">
                          <p>
                            Built robust server-side data pipelines integrating the <strong className="text-emerald-300">Facebook Ads API, Meta Conversion API (CAPI)</strong>, and Google Marketing APIs. 
                          </p>
                          <p>
                            The pipeline continuously streams event payloads to advertising platforms, merging platform-provided metadata with enriched first-party user details. This process optimizes event matching and ensures high event match quality, helping brands realize a proven <strong className="text-[#ffa7ec]">15-20% boost in their Return on Ad Spend (ROAS)</strong>.
                          </p>
                        </div>
                      </details>

                      {/* Sub-system 3 */}
                      <details 
                        onMouseEnter={(e) => { e.currentTarget.open = true; }}
                        onMouseLeave={(e) => { e.currentTarget.open = false; }}
                        className="group border border-zinc-900/60 rounded-xl bg-zinc-950/20 overflow-hidden transition-all duration-300"
                      >
                        <summary className="flex items-center justify-between p-3.5 cursor-pointer select-none text-xs font-bold uppercase tracking-wider text-[#ffa7ec] hover:bg-zinc-900/20 list-none">
                          <span className="flex items-center gap-2">
                            <span>👥</span> Behavior-Based Audience Segment Builder
                          </span>
                          <span className="transition-transform duration-300 group-open:rotate-180 text-zinc-500 text-[10px]">▼</span>
                        </summary>
                        <div className="p-4 border-t border-zinc-900/60 text-xs sm:text-sm text-zinc-300 space-y-3 text-justify bg-black/40">
                          <p>
                            Engineered an interactive Audience Builder component that enables merchants to construct custom user segments. Supports multi-group conditional filters, location scoping (e.g. Karnataka & Goa locations), and detailed behavioral logic.
                          </p>
                          <p>
                            Example Query: <span className="italic text-zinc-400 font-semibold font-sans">"Filter users who completed 'Add to Cart' at least 1 time in the last 59 days AND did NOT complete 'Purchase' in the last 90 days."</span>
                          </p>
                          <p>
                            Automated syncing of these cohorts to Facebook Custom Audiences, Meta CAPI, Google Ads, and third-party systems like Bitespeed and Helio to trigger targeted promotional cycles.
                          </p>
                        </div>
                      </details>

                      {/* Sub-system 4 */}
                      <details 
                        onMouseEnter={(e) => { e.currentTarget.open = true; }}
                        onMouseLeave={(e) => { e.currentTarget.open = false; }}
                        className="group border border-zinc-900/60 rounded-xl bg-zinc-950/20 overflow-hidden transition-all duration-300"
                      >
                        <summary className="flex items-center justify-between p-3.5 cursor-pointer select-none text-xs font-bold uppercase tracking-wider text-[#F96815] hover:bg-zinc-900/20 list-none">
                          <span className="flex items-center gap-2">
                            <span>⛓️</span> Journey Builder Campaign Engine (React Flow)
                          </span>
                          <span className="transition-transform duration-300 group-open:rotate-180 text-zinc-500 text-[10px]">▼</span>
                        </summary>
                        <div className="p-4 border-t border-zinc-900/60 text-xs sm:text-sm text-zinc-300 space-y-3 text-justify bg-black/40">
                          <p>
                            Designed and built a visual campaign flow creator using <strong className="text-orange-400">React Flow</strong>. Merchants drag-and-drop workflow nodes (e.g. Starting Point, Delays, Filters, Actions, Sticky Notes) to draw automated marketing and notification journeys.
                          </p>
                          <p>
                            Programmed intelligent database state tracking and memory logic, enabling advanced automation such as targeting users who haven't made a purchase in the last 30 days but had bought in the last 90 days.
                          </p>
                          <p>
                            Designed sequences for cart abandonment recovery, upselling, order confirmations, and retargeting, including dynamic template variable injection and coupon code mapping. (Note: Handled the UI canvas, logical processing node connections, variable template parsing, and dashboard analytics; excluded the third-party WhatsApp delivery gateways).
                          </p>
                        </div>
                      </details>

                      {/* Sub-system 5 */}
                      <details 
                        onMouseEnter={(e) => { e.currentTarget.open = true; }}
                        onMouseLeave={(e) => { e.currentTarget.open = false; }}
                        className="group border border-zinc-900/60 rounded-xl bg-zinc-950/20 overflow-hidden transition-all duration-300"
                      >
                        <summary className="flex items-center justify-between p-3.5 cursor-pointer select-none text-xs font-bold uppercase tracking-wider text-[gold] hover:bg-zinc-900/20 list-none">
                          <span className="flex items-center gap-2">
                            <span>📈</span> Creative & Product Attribution Analytics
                          </span>
                          <span className="transition-transform duration-300 group-open:rotate-180 text-zinc-500 text-[10px]">▼</span>
                        </summary>
                        <div className="p-4 border-t border-zinc-900/60 text-xs sm:text-sm text-zinc-300 space-y-3 text-justify bg-black/40">
                          <p>
                            Integrated Facebook Ads API to query and map ad creative assets (images, videos, copies) directly against first-party attribution statistics computed by our tracking engine.
                          </p>
                          <p>
                            Visualizes performance indicators including True ROAS, New ROAS, and Returning ROAS on a creative asset level. Includes Shopify Product Catalog mapping to track attribution performance on an item-by-item basis.
                          </p>
                        </div>
                      </details>

                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 bg-pink-400 w-4 h-4 rounded-full border-4 border-black ring-2 ring-pink-950"></span>
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-bold text-zinc-400">2023 - 2024</span>
                      <a 
                        href={torsecureData.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-sm sm:text-base font-bold bg-pink-950/30 text-pink-400 border border-pink-500/40 hover:border-pink-400 hover:bg-pink-900/30 transition-all duration-300 shadow-[0_0_5px_rgba(244,114,182,0.05)] hover:shadow-[0_0_12px_rgba(244,114,182,0.2)] transform hover:-translate-y-0.5 inline-flex items-center gap-2.5"
                      >
                        <TorsecureLogo className="w-6 h-6 sm:w-7 sm:h-7 filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
                        <span>Torsecure</span>
                        <span className="text-[10px]">↗</span>
                      </a>
                    </div>
                    
                    <p className="text-xs text-zinc-400 italic">Developer specializing in customized test platforms and Search Engine Optimization (SEO) campaigns for clients and platforms.</p>
                    
                    <div className="space-y-3.5 pl-1 text-sm text-zinc-300 leading-relaxed">
                      
                      {/* Sub-system 1 */}
                      <details 
                        onMouseEnter={(e) => { e.currentTarget.open = true; }}
                        onMouseLeave={(e) => { e.currentTarget.open = false; }}
                        className="group border border-zinc-900/60 rounded-xl bg-zinc-950/20 overflow-hidden transition-all duration-300"
                      >
                        <summary className="flex items-center justify-between p-3.5 cursor-pointer select-none text-xs font-bold uppercase tracking-wider text-pink-400 hover:bg-zinc-900/20 list-none">
                          <span className="flex items-center gap-2">
                            <span>🧠</span> Branch Selector – Career Guidance & Assessment Platform
                          </span>
                          <span className="transition-transform duration-300 group-open:rotate-180 text-zinc-500 text-[10px]">▼</span>
                        </summary>
                        <div className="p-4 border-t border-zinc-900/60 text-xs sm:text-sm text-zinc-300 space-y-3 text-justify bg-black/40">
                          <p>
                            Designed and engineered personalized, user-targeted assessment tests—including <strong className="text-pink-300">IQ tests</strong> and <strong className="text-pink-300">English proficiency modules</strong>—enabling candidates to accurately self-assess their skills.
                          </p>
                          <p>
                            Built logic and routing algorithms that process user responses to help them evaluate their strengths and determine the right career direction for their future.
                          </p>
                        </div>
                      </details>

                      {/* Sub-system 2 */}
                      <details 
                        onMouseEnter={(e) => { e.currentTarget.open = true; }}
                        onMouseLeave={(e) => { e.currentTarget.open = false; }}
                        className="group border border-zinc-900/60 rounded-xl bg-zinc-950/20 overflow-hidden transition-all duration-300"
                      >
                        <summary className="flex items-center justify-between p-3.5 cursor-pointer select-none text-xs font-bold uppercase tracking-wider text-pink-400 hover:bg-zinc-900/20 list-none">
                          <span className="flex items-center gap-2">
                            <span>📈</span> Search Engine Optimization (SEO) for Client Platforms
                          </span>
                          <span className="transition-transform duration-300 group-open:rotate-180 text-zinc-500 text-[10px]">▼</span>
                        </summary>
                        <div className="p-4 border-t border-zinc-900/60 text-xs sm:text-sm text-zinc-300 space-y-3 text-justify bg-black/40">
                          <p>
                            Spearheaded comprehensive SEO audit and optimization strategies to enhance search engine rankings, indexing speed, and organic search traffic for multiple client platforms:
                          </p>
                          <ul className="list-disc list-inside pl-2 space-y-1.5 text-zinc-400">
                            <li><strong className="text-zinc-300">Torsecure</strong>: Optimized search discovery and metadata for the core cybersecurity hub.</li>
                            <li><strong className="text-zinc-300">ECR Group of Institution</strong>: Improved visibility and indexing for the academic institution's web portal.</li>
                            <li><strong className="text-zinc-300">Onyxbnb Booking Platform</strong>: Optimized the booking engine pages to improve listings discoverability.</li>
                            <li><strong className="text-zinc-300">Other Clients</strong>: Audited Core Web Vitals, refined schema markups, and structured sitemaps for various client websites.</li>
                          </ul>
                        </div>
                      </details>

                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 bg-amber-400 w-4 h-4 rounded-full border-4 border-black ring-2 ring-amber-950"></span>
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-bold text-zinc-400">August 2022 – September 2022</span>
                      <a 
                        href={connectiaTechnologiesData.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-sm sm:text-base font-bold bg-amber-950/30 text-amber-400 border border-amber-500/40 hover:border-amber-400 hover:bg-amber-900/30 transition-all duration-300 shadow-[0_0_5px_rgba(245,158,11,0.05)] hover:shadow-[0_0_12px_rgba(245,158,11,0.2)] transform hover:-translate-y-0.5 inline-flex items-center gap-2.5"
                      >
                        <ConectiaLogo className="w-6 h-6 sm:w-7 sm:h-7 filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
                        <span>Connectia Technologies</span>
                        <span className="text-[10px]">↗</span>
                      </a>
                    </div>
                    
                    <p className="text-xs text-zinc-400 italic">Web Developer Intern specializing in PHP development and backend module creation for client web tools.</p>
                    
                    <div className="space-y-3.5 pl-1 text-sm text-zinc-300 leading-relaxed">
                      
                      {/* Sub-system 1 */}
                      <details 
                        onMouseEnter={(e) => { e.currentTarget.open = true; }}
                        onMouseLeave={(e) => { e.currentTarget.open = false; }}
                        className="group border border-zinc-900/60 rounded-xl bg-zinc-950/20 overflow-hidden transition-all duration-300"
                      >
                        <summary className="flex items-center justify-between p-3.5 cursor-pointer select-none text-xs font-bold uppercase tracking-wider text-amber-400 hover:bg-zinc-900/20 list-none">
                          <span className="flex items-center gap-2">
                            <span>🐘</span> PHP Development & MERA Employee Maintenance
                          </span>
                          <span className="transition-transform duration-300 group-open:rotate-180 text-zinc-500 text-[10px]">▼</span>
                        </summary>
                        <div className="p-4 border-t border-zinc-900/60 text-xs sm:text-sm text-zinc-300 space-y-3 text-justify bg-black/40">
                          <p>
                            Gained familiarity building custom server-side logic and modules using <strong className="text-amber-300">PHP</strong>.
                          </p>
                          <p>
                            Contributed to the core functionality of the management software <strong className="text-amber-300">MERA</strong>, specifically developing and testing features for employee maintenance and database record management.
                          </p>
                        </div>
                      </details>

                      {/* Sub-system 2 */}
                      <details 
                        onMouseEnter={(e) => { e.currentTarget.open = true; }}
                        onMouseLeave={(e) => { e.currentTarget.open = false; }}
                        className="group border border-zinc-900/60 rounded-xl bg-zinc-950/20 overflow-hidden transition-all duration-300"
                      >
                        <summary className="flex items-center justify-between p-3.5 cursor-pointer select-none text-xs font-bold uppercase tracking-wider text-amber-400 hover:bg-zinc-900/20 list-none">
                          <span className="flex items-center gap-2">
                            <span>🛕</span> Client Portals: Kateel Temple App & Chit Fund Association
                          </span>
                          <span className="transition-transform duration-300 group-open:rotate-180 text-zinc-500 text-[10px]">▼</span>
                        </summary>
                        <div className="p-4 border-t border-zinc-900/60 text-xs sm:text-sm text-zinc-300 space-y-3 text-justify bg-black/40">
                          <p>
                            Contributed development work to custom client websites:
                          </p>
                          <ul className="list-disc list-inside pl-2 space-y-1.5 text-zinc-400">
                            <li><strong className="text-zinc-300">Kateel Temple App</strong>: Developed pages and secure routing for temple account ledger management and online donation tracking.</li>
                            <li><strong className="text-zinc-300">Chit Fund Association site</strong>: Implemented interface layouts and functional views to assist administrative recording.</li>
                          </ul>
                        </div>
                      </details>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Openness Note */}
            <div className="p-4 bg-zinc-950/30 border border-dashed border-red-950 rounded-xl text-xs text-zinc-400 leading-relaxed">
              * I'm all about creating clean, efficient code and building products that just work. In my career, I'm always eager to explore new technologies and apply them to real-world challenges. If you have a technology in mind that I haven't used yet, <span className="text-[#f46565] font-bold">I'm always open to learning and can catch up quickly</span>.
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}