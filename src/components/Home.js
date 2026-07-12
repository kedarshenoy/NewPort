import React from 'react';
import Typed from 'react-typed';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as BooleanMathsLogo } from '../Assets/Company/booleanmaths.svg';
import { ReactComponent as TorsecureLogo } from '../Assets/Company/torsecure.svg';
import { ReactComponent as ConectiaLogo } from '../Assets/Company/conectia.svg';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center h-screen px-4 overflow-hidden relative" style={{ color: '#faebd7', fontFamily: 'monospace' }}>
            
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F96815]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[gold]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-xl w-full text-center space-y-8 z-10">
                
                {/* Profile Circle Avatar */}
                <div className="flex justify-center">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-[#F96815] to-[gold] shadow-[0_0_20px_rgba(249,104,21,0.15)] hover:shadow-[0_0_30px_rgba(249,104,21,0.3)] transition-shadow duration-500">
                        <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
                            <img 
                                src={require('../Assets/Hero.png')} 
                                alt="Kedar Shenoy" 
                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" 
                            />
                        </div>
                        {/* Status Indicator */}
                        <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-black rounded-full shadow-[0_0_8px_#10b981]" />
                    </div>
                </div>

                {/* Typography Header */}
                <div className="space-y-3">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-100 via-[#faebd7] to-zinc-400 bg-clip-text text-transparent">
                        A KEDAR SHENOY
                    </h1>
                    <h2 className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-md mx-auto">
                        Passionate Full-Stack Web & Mobile Application Developer
                    </h2>
                </div>

                {/* Animated Typing Console */}
                <div className="py-2.5 px-4 rounded-xl bg-zinc-950/40 border border-zinc-900 inline-block max-w-sm mx-auto shadow-sm">
                    <div className="flex items-center gap-2 text-xs text-zinc-500 font-bold border-b border-zinc-900/60 pb-1.5 mb-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/60"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/60"></span>
                        <span className="pl-1">skills.sh</span>
                    </div>
                    <div className="text-sm text-[#F96815] font-bold">
                        <Typed
                            strings={[
                                "React.js",
                                "Next.js / Remix",
                                "React Native",
                                "Node.js / Express",
                                "PostgreSQL",
                                "ClickHouse",
                                "MongoDB / Prisma",
                                "RabbitMQ / BullMQ",
                                "Cloudflare Serverless",
                                "Meta Ads & CAPI Integration",
                                "PHP / SQL"
                            ]}
                            typeSpeed={50}
                            backSpeed={30}
                            cursorChar="▋"
                            loop
                        />
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4 justify-center">
                    <button 
                        className="px-6 py-2.5 rounded-xl border border-[#F96815]/50 bg-black text-[#F96815] font-bold hover:border-[#F96815] hover:bg-[#F96815]/5 transition-all duration-300 shadow-[0_0_5px_rgba(249,104,21,0.05)] hover:shadow-[0_0_12px_rgba(249,104,21,0.15)] flex items-center gap-1.5 group"
                        onClick={() => navigate('/about')}
                    >
                        <span>Learn More</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>

                    <button 
                        className="px-6 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950/20 text-zinc-400 font-bold hover:border-zinc-700 hover:text-zinc-200 transition-all duration-300 flex items-center gap-1.5 group"
                        onClick={() => navigate('/contact')}
                    >
                        <span>Contact</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>
                </div>

                {/* Featured Companies Logo Bar */}
                <div className="pt-6 space-y-4 border-t border-zinc-900/60">
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">3+ Years of Professional Experience</p>
                    <div className="flex items-center justify-center gap-8 sm:gap-12 mt-2">
                        {/* BooleanMaths */}
                        <div className="group relative flex flex-col items-center">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-950/40 border border-zinc-900 group-hover:border-cyan-500/40 group-hover:bg-cyan-950/5 transition-all duration-300 p-2 shadow-sm group-hover:shadow-[0_0_15px_rgba(77,208,225,0.15)] cursor-pointer" onClick={() => navigate('/about')}>
                                <BooleanMathsLogo className="w-full h-full text-zinc-500 group-hover:text-cyan-400 filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                            </div>
                            <span className="absolute -bottom-6 text-[9px] tracking-wider text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold uppercase whitespace-nowrap">BooleanMaths</span>
                        </div>

                        {/* Torsecure */}
                        <div className="group relative flex flex-col items-center">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-950/40 border border-zinc-900 group-hover:border-pink-500/40 group-hover:bg-pink-950/5 transition-all duration-300 p-2 shadow-sm group-hover:shadow-[0_0_15px_rgba(244,114,182,0.15)] cursor-pointer" onClick={() => navigate('/about')}>
                                <TorsecureLogo className="w-full h-full text-zinc-500 group-hover:text-pink-400 filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                            </div>
                            <span className="absolute -bottom-6 text-[9px] tracking-wider text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold uppercase whitespace-nowrap">Torsecure</span>
                        </div>

                        {/* Connectia */}
                        <div className="group relative flex flex-col items-center">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-950/40 border border-zinc-900 group-hover:border-amber-500/40 group-hover:bg-amber-950/5 transition-all duration-300 p-2 shadow-sm group-hover:shadow-[0_0_15px_rgba(245,158,11,0.15)] cursor-pointer" onClick={() => navigate('/about')}>
                                <ConectiaLogo className="w-full h-full text-zinc-500 group-hover:text-amber-400 filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                            </div>
                            <span className="absolute -bottom-6 text-[9px] tracking-wider text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold uppercase whitespace-nowrap">Connectia</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
