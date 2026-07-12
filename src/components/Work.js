import React, { useState, useRef, useEffect, useCallback } from 'react';
import ProjectVideo from './ProjectVideo';
import medrontVideo1 from '../Assets/WorkProjects/medront 1.mp4';
import medrontVideo2 from '../Assets/WorkProjects/Medront 2.mp4';
import medrontVideo3 from '../Assets/WorkProjects/Medront 3.mp4';
import medrontLandingImg from '../Assets/WorkProjects/medront_landing.png';
import booleanLandingImg1 from '../Assets/WorkProjects/booleanmaths_landing.png';
import booleanLandingImg2 from '../Assets/WorkProjects/booleanmaths_landing_2.png';
import booleanJourneyBuilderImg from '../Assets/WorkProjects/booleanmaths_journey_builder.png';
import booleanAudienceBuilderImg from '../Assets/WorkProjects/booleanmaths_audience_builder.png';
import booleanAudienceDetailImg from '../Assets/WorkProjects/booleanmaths_audience_detail.png';
import booleanHealthCheckImg from '../Assets/WorkProjects/booleanmaths_health_check.png';
import booleanConnectionsImg from '../Assets/WorkProjects/booleanmaths_connections.png';
import booleanUtmFixImg from '../Assets/WorkProjects/booleanmaths_utm_fix.png';
import booleanAttributionImg from '../Assets/WorkProjects/booleanmaths_attribution.png';
import booleanSurveyReportImg from '../Assets/WorkProjects/booleanmaths_survey_report.png';
import booleanSurveyPerfImg from '../Assets/WorkProjects/booleanmaths_survey_perf.png';
import booleanSurveySetupImg from '../Assets/WorkProjects/booleanmaths_survey_setup.png';
import booleanCreativeImg from '../Assets/WorkProjects/booleanmaths_creative_attribution.png';
import booleanCapiStatsImg from '../Assets/WorkProjects/booleanmaths_capi_stats.png';
import booleanCapiDataImg from '../Assets/WorkProjects/booleanmaths_capi_data.png';
import booleanCapiSetupImg from '../Assets/WorkProjects/booleanmaths_capi_setup.png';
import booleanCapiEventsImg from '../Assets/WorkProjects/booleanmaths_capi_events.png';
import shopifyAppStoreImg from '../Assets/WorkProjects/shopify_app_store.png';
import shopifyAppAdminImg from '../Assets/WorkProjects/shopify_app_admin.png';

/* ── Shared: prevent right-click/drag on any media ── */
const noSave = (e) => e.preventDefault();

/* ── ImageGallery: full-width snap carousel with arrows + pagination dots ── */
function ImageGallery({ imgs, altPrefix }) {
  const scrollRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const itemW = el.scrollWidth / imgs.length;
    setActiveIdx(Math.round(el.scrollLeft / itemW));
  }, [imgs.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const scrollTo = (idx) => {
    const el = scrollRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(imgs.length - 1, idx));
    const itemW = el.scrollWidth / imgs.length;
    el.scrollTo({ left: clamped * itemW, behavior: 'smooth' });
  };

  if (imgs.length === 0) return null;

  return (
    <div className="w-full mt-4 space-y-3">
      {/* Carousel + arrow buttons */}
      <div className="relative group">
        {/* Left arrow */}
        {imgs.length > 1 && activeIdx > 0 && (
          <button
            onClick={() => scrollTo(activeIdx - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-300 hover:text-white hover:border-violet-500 hover:bg-zinc-800 transition-all duration-200 flex items-center justify-center shadow-lg"
            aria-label="Previous image"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {/* Right arrow */}
        {imgs.length > 1 && activeIdx < imgs.length - 1 && (
          <button
            onClick={() => scrollTo(activeIdx + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-300 hover:text-white hover:border-violet-500 hover:bg-zinc-800 transition-all duration-200 flex items-center justify-center shadow-lg"
            aria-label="Next image"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {/* Full-width snap scroll */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory rounded-xl"
        >
          {imgs.map((img, i) => (
            <div
              key={i}
              className="snap-start flex-shrink-0 w-full border border-zinc-800 shadow-lg overflow-hidden bg-zinc-950"
            >
              <img
                src={img}
                alt={`${altPrefix} ${i + 1}`}
                draggable={false}
                onContextMenu={noSave}
                className="w-full h-auto object-contain select-none pointer-events-none block"
                style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      {imgs.length > 1 && (
        <div className="flex justify-center items-center gap-2 pt-1">
          {imgs.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === activeIdx
                  ? 'w-6 h-2 bg-violet-400'
                  : 'w-2 h-2 bg-zinc-700 hover:bg-zinc-500'
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Portrait video row (Play Store style) ── */
function VideoRow({ videos }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar justify-start md:justify-center mt-4">
      {videos.map((vid, i) => (
        <div key={i} className="w-[140px] sm:w-[170px] flex-shrink-0">
          <ProjectVideo
            src={vid}
            className="w-full rounded-xl border border-zinc-800 shadow-md aspect-[9/16]"
          />
        </div>
      ))}
    </div>
  );
}

// ── BooleanMaths WebApp feature tabs (ordered by user flow) ──
const booleanFeatures = [
  {
    label: "Audience Builder",
    desc: "Rule-based customer cohort composer with multi-condition groups (AND/OR). Syncs segments in real-time to Meta Ads, Google Ads, and email networks from a single source dashboard.",
    imgs: [booleanAudienceBuilderImg, booleanAudienceDetailImg]
  },
  {
    label: "CAPI",
    desc: "Built the Meta Conversion API (CAPI) monitoring and configuration dashboard end-to-end. Tracks total conversion events, EMQ scores, event coverage %, and sync timestamps per pixel in real-time. Includes a data summary view (city, email, name signal coverage), failure reason logs, and a full event setup panel where users choose data sync mode (attributed-only vs all events) and select specific Shopify events (AddToCart, Purchase, PageView, CheckoutStarted etc.) to fire through the server-side CAPI pipeline.",
    imgs: [booleanCapiStatsImg, booleanCapiDataImg, booleanCapiSetupImg, booleanCapiEventsImg]
  },
  {
    label: "Post Purchase Survey",
    desc: "Embeds a configurable survey on the Shopify thank-you page to capture customer origin data post-checkout. Includes a survey builder (drag-drop questions, visibility toggles), a live customer preview simulator, and a full analytics report with response distribution, revenue attribution per answer, and performance KPIs.",
    imgs: [booleanSurveyPerfImg, booleanSurveyReportImg, booleanSurveySetupImg]
  },
  {
    label: "Creative Attribution",
    desc: "Creative-level performance reporting view. Pulls creative assets (videos, images) from Facebook and Shopify, then surfaces attribution data calculated by the team's engine — including True ROAS, New ROAS, AD Platform Orders, True Orders, and Revenue — per individual creative, helping brands identify which ad creatives are actually driving real conversions.",
    imgs: [booleanCreativeImg]
  },
  {
    label: "Channel Attribution",
    desc: "Cross-channel reporting dashboard consolidating True Orders, True ROAS, NC ROAS, NC Orders, and NC Revenue across Meta, Google, App, and Organic channels alongside live ad platform spend data — giving brands a complete picture of actual marketing impact beyond platform-reported numbers.",
    imgs: [booleanAttributionImg]
  },
  {
    label: "Health Check",
    desc: "Platform health monitor for Meta token validity, Shopify tracking bridge, app-embed status, and subscription health. Also includes the full Facebook ad account connection flow and a UTM parameter auditor that detects and corrects missing or invalid UTM mappings across active campaigns.",
    imgs: [booleanHealthCheckImg, booleanConnectionsImg, booleanUtmFixImg]
  }
];

export default function Work() {
  const [activeFeature, setActiveFeature] = useState(0);

  const projects = [
    // ── BooleanMaths ──
    {
      title: "Engage: BooleanMaths' Own Journey Builder",
      tech: "React.js, React Flow, Tailwind CSS, Node.js",
      description: "Designed, architected, and built end-to-end the dynamic drag-and-drop marketing automation canvas application (Engage). Integrated custom node controls, filters, waits, and action nodes to orchestrate automated messaging campaigns across WhatsApp, Email, and SMS.",
      isWebsite: true,
      websiteUrl: "https://engage.booleanmaths.com",
      imgs: [booleanJourneyBuilderImg]
    },
    {
      title: "BooleanMaths Landing Website",
      tech: "Next.js, Tailwind CSS, Calendly Integration",
      description: "Designed, architected, and built the official web landing platform for BooleanMaths end-to-end. Showcases details about the marketing tracking products, pricing matrix, and integrates Calendly to allow leads to book a date/session for a product demo.",
      isWebsite: true,
      websiteUrl: "https://booleanmaths.com",
      imgs: [booleanLandingImg1, booleanLandingImg2]
    },
    // ── Medront ──
    {
      title: "Medront Mobile App",
      tech: "React Native, Redux, Google Play Services",
      description: "Designed, architected, and built end-to-end the core rewards and coupon-redeeming workflow system. Integrated secure API routes to validate codes, manage user rewards balances, and process Google Play billing frameworks.",
      isPlayStore: true,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.medront&hl=en_IN",
      videos: [medrontVideo1, medrontVideo2, medrontVideo3]
    },
    {
      title: "Medront Landing Website",
      tech: "React.js, Tailwind CSS",
      description: "Designed, architected, and built the official web landing presence for Medront end-to-end to drive conversion rates and Google Play Store installations. Crafted a responsive, high-performance page featuring dynamic animations and marketing integrations.",
      isWebsite: true,
      websiteUrl: "https://medront.com",
      imgs: [medrontLandingImg]
    },
    // ── Personal Projects ──
    {
      title: "Kedar's Collection",
      tech: "React.js, Express.js, Node.js, MongoDB",
      description: "Made Kedar's Collection app, a user-friendly coin management tool, utilizing the MERN stack for seamless organization and display of coin collections.",
      videoSrc: "https://raw.githubusercontent.com/kedarshenoy/newportfolio/master/src/Assets/coincollection.mp4"
    },
    {
      title: "MovieDB",
      tech: "React Native, Node.js, MongoDB",
      description: "Built a mobile app with React Native, Node.js, and MongoDB for efficient cross-platform performance. Delivers detailed movie information—awards, trends, top-rated, and shows—for a personalized experience.",
      videoSrc: "https://github.com/kedarshenoy/videos/raw/master/moviedb.mp4"
    },
    {
      title: "AKS Food Ordering",
      tech: "React.js, Express.js, Node.js, MongoDB",
      description: "Developed an interactive web experience using React.js, Axios, carousels, and tabs for intuitive navigation. Used Express.js, Node.js, and MongoDB with Mongoose to manage orders and user data.",
      videoSrc: 'https://github.com/kedarshenoy/videos/raw/master/zomato.mp4'
    },
    {
      title: "CommandVault",
      tech: "React.js, Firebase, Google Auth, Tailwind CSS",
      description: "Built a collaborative platform for developers to share and organize command snippets using rich text. Used Firebase Realtime Database and Google Auth for secure sign-in with live preview for structured, searchable content."
    },
    {
      title: "Trycode Online",
      tech: "React.js, Node.js, Express.js, Bootstrap, MongoDB, Docker",
      description: "Created TryCode Online, a LeetCode clone, demonstrating MERN stack expertise. Enhanced with Docker for code validation.",
      videoSrc: "https://github.com/kedarshenoy/videos/raw/master/leetcode%20-%20Copy.mp4"
    },
  ];

  return (
    <div className="flex flex-col h-screen overflow-y-auto no-scrollbar" style={{ color: '#faebd7', fontFamily: 'monospace' }}>
      <div className="max-w-4xl mx-auto w-full p-6 sm:p-12 md:p-20 mb-10">
        <section className="space-y-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center mt-12 sm:pt-0">Projects & Contributions</h2>

          {/* ── BooleanMaths WebApp: unified feature card ── */}
          <div className="space-y-6 bg-zinc-900/10 border border-zinc-900 p-6 rounded-2xl text-left">
            <div className="flex flex-wrap justify-between items-start gap-2">
              <div>
                <h3 className="text-2xl font-bold leading-tight">BooleanMaths WebApp</h3>
                <p className="text-xs text-zinc-400 mt-0.5">React.js, Tailwind CSS, Node.js, MongoDB, PostgreSQL, ClickHouse, Meta Ads API, Shopify API</p>
              </div>
              <a href="https://booleanmaths.com" target="_blank" rel="noopener noreferrer"
                className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-950/30 text-cyan-400 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-900/30 transition-all duration-300 inline-flex items-center gap-1.5">
                <span>Visit Site</span><span className="text-[10px]">↗</span>
              </a>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              Designed, architected, and built end-to-end the core BooleanMaths platform — a data-driven marketing intelligence tool for eCommerce brands. Below are the key features I independently built within the webapp.
            </p>

            {/* Feature Tab Switcher */}
            <div className="flex flex-wrap gap-2">
              {booleanFeatures.map((f, idx) => (
                <button key={idx} onClick={() => setActiveFeature(idx)}
                  className={`px-3 py-1.5 text-xs rounded-lg border font-semibold transition-all duration-200 ${
                    activeFeature === idx
                      ? 'bg-violet-950/40 text-violet-300 border-violet-500/50 shadow-[0_0_8px_rgba(139,92,246,0.15)]'
                      : 'bg-zinc-950/20 text-zinc-500 border-zinc-800 hover:text-zinc-300 hover:border-zinc-700'
                  }`}>
                  {f.label}
                </button>
              ))}
            </div>

            {/* Active Feature Description */}
            <div className="p-4 rounded-xl bg-zinc-950/30 border border-zinc-800/60">
              <p className="text-sm text-zinc-300 leading-relaxed">{booleanFeatures[activeFeature].desc}</p>
            </div>

            {/* Active Feature Screenshots with pagination */}
            <ImageGallery imgs={booleanFeatures[activeFeature].imgs} altPrefix={booleanFeatures[activeFeature].label} />
          </div>

          {/* ── BooleanMaths Shopify App ── */}
          <div className="space-y-4 bg-zinc-900/10 border border-zinc-900 p-6 rounded-2xl text-left">
            <div className="flex flex-wrap justify-between items-start gap-2">
              <div>
                <h3 className="text-2xl font-bold leading-tight">BooleanMaths Shopify App</h3>
                <p className="text-xs text-zinc-400 mt-0.5">Node.js, Remix, Shopify Admin API, Webhooks, Polaris, PostgreSQL, Shopify App Bridge</p>
              </div>
              <a href="https://apps.shopify.com/booleanmaths" target="_blank" rel="noopener noreferrer"
                className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-950/30 text-cyan-400 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-900/30 transition-all duration-300 inline-flex items-center gap-1.5">
                <span>App Store</span><span className="text-[10px]">↗</span>
              </a>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Designed, architected, and maintained end-to-end the BooleanMaths Shopify App — the data backbone bridging eCommerce stores with the attribution engine. Built and owned:
            </p>
            <ul className="text-sm text-zinc-400 space-y-1.5 list-none pl-0">
              {[
                "Shopify Webhook listener for real-time order, checkout, and product events to feed the attribution pipeline",
                "Shopify Admin API integration to pull product details, variants, and store metadata for accurate attribution mapping",
                "Client-side CAPI plugin — theme app extension that fires server-side conversion events to Meta/Google for improved signal quality",
                "Post Purchase Survey theme extension — embeds natively in the Shopify checkout thank-you page",
                "Custom usage-based billing — built with Shopify App Subscription API for dynamic plan charging based on store activity",
                "Full app install & onboarding flow with store authentication, plan selection, and app embed management"
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-violet-400 mt-0.5 flex-shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ImageGallery imgs={[shopifyAppStoreImg, shopifyAppAdminImg]} altPrefix="BooleanMaths Shopify App" />
          </div>

          {/* ── Remaining Projects ── */}
          {projects.map((project, index) => (
            <div key={index} className="space-y-4 bg-zinc-900/10 border border-zinc-900 p-6 rounded-2xl text-left">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <h3 className="text-2xl font-bold leading-tight">
                    {project.title}{" "}
                    <span className="text-xs font-normal text-zinc-400">| {project.tech}</span>
                  </h3>
                </div>
                {project.isPlayStore && (
                  <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-950/30 text-cyan-400 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-900/30 transition-all duration-300 inline-flex items-center gap-1.5">
                    <span>Play Store</span><span className="text-[10px]">↗</span>
                  </a>
                )}
                {project.isWebsite && (
                  <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-950/30 text-cyan-400 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-900/30 transition-all duration-300 inline-flex items-center gap-1.5">
                    <span>Visit Site</span><span className="text-[10px]">↗</span>
                  </a>
                )}
              </div>

              <p className="leading-relaxed text-zinc-300 text-sm">{project.description}</p>

              {/* Play Store portrait video row */}
              {project.isPlayStore && project.videos && <VideoRow videos={project.videos} />}

              {/* Image gallery with pagination dots */}
              {project.imgs && <ImageGallery imgs={project.imgs} altPrefix={project.title} />}

              {/* Standard project video */}
              {!project.isPlayStore && project.videoSrc && (
                <div className="w-full flex justify-center mt-4">
                  <ProjectVideo src={project.videoSrc}
                    className="max-w-full md:max-w-2xl rounded-lg shadow-xl border border-zinc-800" />
                </div>
              )}
            </div>
          ))}

        </section>
      </div>
    </div>
  );
}