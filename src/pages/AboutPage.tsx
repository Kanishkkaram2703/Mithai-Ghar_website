import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flame,
  ShieldAlert,
  Code2,
  BookOpen,
  GraduationCap,
  Layers,
  Thermometer,
  Sparkles
} from 'lucide-react';
import { PatternDivider } from '../components/PatternDivider';
import { usePageMeta } from '../hooks/usePageMeta';

export const AboutPage: React.FC = () => {
  usePageMeta(
    'About Mithai Ghar — Project Purpose, Tech Stack & Kitchen Safety',
    'Learn about the Mithai Ghar college project submission, frontend architecture, and essential culinary safety guidelines for hot sugar syrup and ghee.'
  );

  return (
    <div className="min-h-screen bg-[#fff8ec] py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e8590c]">
            <GraduationCap size={15} />
            <span>Academic Project Submission</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#5b1a1a] tracking-tight">
            About Mithai Ghar
          </h1>
          <p className="text-xs sm:text-base text-[#231815]/75 max-w-2xl mx-auto leading-relaxed">
            A digital celebration of traditional Indian confectionery, developed to document culinary science, preserve festival heritage, and deliver a modern responsive web tool.
          </p>
        </div>

        {/* Section 1: Project Purpose */}
        <div className="bg-[#fffdfa] rounded-xl border border-[#5b1a1a]/15 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wider text-[#5b1a1a]">
            <BookOpen size={18} className="text-[#e8590c]" />
            <span>Project Purpose & Background</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#231815]">
            Preserving Artisanal Diwali Confectionery
          </h2>
          <p className="text-xs sm:text-sm text-[#231815]/85 leading-relaxed">
            During Diwali, the festival of lights, gifting and sharing handcrafted sweets (mithai) is the centerpiece of hospitality and family reunion. However, modern commercial production frequently replaces pure desi ghee with hydrogenated fats and substitutes authentic dairy chenna with artificial stabilizers.
          </p>
          <p className="text-xs sm:text-sm text-[#231815]/85 leading-relaxed">
            <strong>Mithai Ghar</strong> was engineered as a college project to bridge traditional regional confectionery wisdom with modern software design. Rather than generic recipe blogs, it treats Indian sweet-making as an exact thermal science, featuring:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#231815]/85">
            <li className="p-3 bg-[#fff8ec] rounded-lg border border-[#5b1a1a]/10">
              <strong className="text-[#5b1a1a] block mb-1">Authentic Traditional Methods:</strong>
              14 recipes featuring true techniques like slow besan bhunao, rolling-boil chenna expansion, and multi-thread flour lamination.
            </li>
            <li className="p-3 bg-[#fff8ec] rounded-lg border border-[#5b1a1a]/10">
              <strong className="text-[#5b1a1a] block mb-1">Strict Metric Formulations:</strong>
              Exact grams, milliliters, and ratios calculated to match stated servings and step sequences without guesswork.
            </li>
            <li className="p-3 bg-[#fff8ec] rounded-lg border border-[#5b1a1a]/10">
              <strong className="text-[#5b1a1a] block mb-1">Live Interactive Scaling:</strong>
              Dynamic serving adjusters that recalculate whole-recipe ingredient ratios in real-time.
            </li>
            <li className="p-3 bg-[#fff8ec] rounded-lg border border-[#5b1a1a]/10">
              <strong className="text-[#5b1a1a] block mb-1">Gift Box Shopping Consolidation:</strong>
              An algorithmic pantry planner that combines duplicate ingredients across varied confections into one single shopping list.
            </li>
          </ul>
        </div>

        {/* Section 2: Essential Kitchen Safety Guide (CRITICAL REQUIREMENT) */}
        <div id="sugar-safety" className="bg-[#fffdfa] rounded-xl border-2 border-[#e8590c]/40 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wider text-[#e8590c]">
            <ShieldAlert size={20} />
            <span>Essential Culinary Safety Protocols</span>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-[#5b1a1a]">
              Working with Hot Sugar Syrup & Boiling Ghee
            </h2>
            <p className="text-xs text-[#231815]/75 mt-1 leading-relaxed">
              Traditional mithai preparation involves temperatures far hotter than boiling water. Read these safety protocols before commencing any recipe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hot Sugar Syrup Safety */}
            <div className="p-5 rounded-lg bg-[#fff8ec] border border-[#e8590c]/20 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#e8590c]">
                <Thermometer size={16} />
                <span>Hot Sugar Syrup (Chashni) Safety</span>
              </div>
              <p className="text-xs text-[#231815]/85 leading-relaxed">
                Boiling sugar syrup reaches <strong>115°C to 125°C (240°F–257°F)</strong>, significantly higher than boiling water. Because sugar is viscous, it adheres tenaciously to skin and causes severe instant thermal burns.
              </p>
              <ul className="space-y-2 text-xs text-[#231815]/80">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#e8590c] font-bold">1.</span>
                  <span><strong>Never dip fingers directly into boiling syrup.</strong> To test string consistency (ek-tar), take half a teaspoon of syrup on a small ceramic plate, wait 15 seconds until comfortably warm, then touch with fingertips.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#e8590c] font-bold">2.</span>
                  <span><strong>Use long-handled ladles:</strong> Prevent hot syrup splashes while stirring or skimming foam.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#e8590c] font-bold">3.</span>
                  <span><strong>Emergency first aid:</strong> In the event of a syrup burn, immerse the affected area immediately under cold running water for 15 minutes. Do not attempt to rip off hardened syrup dry.</span>
                </li>
              </ul>
            </div>

            {/* Hot Ghee & Deep Frying Safety */}
            <div className="p-5 rounded-lg bg-[#fff8ec] border border-[#5b1a1a]/20 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5b1a1a]">
                <Flame size={16} />
                <span>Hot Ghee & Deep Frying Safety</span>
              </div>
              <p className="text-xs text-[#231815]/85 leading-relaxed">
                Desi ghee used for frying gulab jamun, jalebi, and motichoor boondi is heated between <strong>140°C and 180°C</strong>. Ghee has a smoke point of 250°C and must be handled with utmost respect.
              </p>
              <ul className="space-y-2 text-xs text-[#231815]/80">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#5b1a1a] font-bold">1.</span>
                  <span><strong>Never introduce wet utensils:</strong> Water droplets introduced into hot ghee cause violent explosive splattering. Always dry spoons and strainers completely.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#5b1a1a] font-bold">2.</span>
                  <span><strong>Gentle sliding:</strong> Slide dough spheres or boondi from close above the surface using a perforated ladle; never drop them from high heights.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#5b1a1a] font-bold">3.</span>
                  <span><strong>Fire safety:</strong> Never pour water on a ghee fire. In case of flames, turn off the heat immediately and slide a metal lid over the pan to extinguish oxygen.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Technical Architecture & Stack */}
        <div className="bg-[#fffdfa] rounded-xl border border-[#5b1a1a]/15 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wider text-[#5b1a1a]">
            <Code2 size={18} className="text-[#e8590c]" />
            <span>Technical Architecture</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#231815]">
            Frontend Engineering & Architecture
          </h2>
          <p className="text-xs sm:text-sm text-[#231815]/85 leading-relaxed">
            Mithai Ghar is designed as a standalone, zero-dependency client-side application engineered for performance, resilience, and accessibility.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-[#fff8ec] border border-[#5b1a1a]/10 space-y-1.5">
              <span className="text-xs font-bold text-[#5b1a1a] block">Core Framework</span>
              <p className="text-xs text-[#231815]/80 leading-relaxed">
                React 19 + TypeScript with strict typing across all 14 sweet recipes, step timers, and shopping list structures.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#fff8ec] border border-[#5b1a1a]/10 space-y-1.5">
              <span className="text-xs font-bold text-[#5b1a1a] block">Styling & Theme</span>
              <p className="text-xs text-[#231815]/80 leading-relaxed">
                Tailwind CSS v4 with custom brand tokens: deep maroon (#5b1a1a), marigold (#f2a900), saffron (#e8590c), and cream (#fff8ec).
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#fff8ec] border border-[#5b1a1a]/10 space-y-1.5">
              <span className="text-xs font-bold text-[#5b1a1a] block">Motion & Animation</span>
              <p className="text-xs text-[#231815]/80 leading-relaxed">
                Framer Motion powering the flickering hero diyas and floating golden sparks with full <code className="text-[11px] bg-black/5 px-1 py-0.5 rounded">prefers-reduced-motion</code> compliance.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#fff8ec] border border-[#5b1a1a]/10 space-y-1.5">
              <span className="text-xs font-bold text-[#5b1a1a] block">State Persistence</span>
              <p className="text-xs text-[#231815]/80 leading-relaxed">
                Reactive React Context backed by HTML5 localStorage for offline persistence of bookmarks and gift box state.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#fff8ec] border border-[#5b1a1a]/10 space-y-1.5">
              <span className="text-xs font-bold text-[#5b1a1a] block">Typography</span>
              <p className="text-xs text-[#231815]/80 leading-relaxed">
                Strict 2-font hierarchy with Google Fonts Playfair Display for editorial headings and Plus Jakarta Sans for body prose.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#fff8ec] border border-[#5b1a1a]/10 space-y-1.5">
              <span className="text-xs font-bold text-[#5b1a1a] block">Print Engine</span>
              <p className="text-xs text-[#231815]/80 leading-relaxed">
                Dedicated CSS <code className="text-[11px] bg-black/5 px-1 py-0.5 rounded">@media print</code> formatting for distraction-free kitchen prep sheets and gift box grocery receipts.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Confectionery Glossary */}
        <div className="bg-[#fffdfa] rounded-xl border border-[#5b1a1a]/15 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wider text-[#5b1a1a]">
            <Layers size={18} className="text-[#e8590c]" />
            <span>Culinary Science Glossary</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#231815]">
            Essential Indian Confectionery Terms
          </h2>

          <div className="space-y-4 pt-2 text-xs text-[#231815]/85">
            <div className="p-3.5 bg-[#fff8ec] rounded-lg border border-[#5b1a1a]/10">
              <strong className="text-[#5b1a1a] text-sm block mb-1">Chashni (Sugar Syrup Stages)</strong>
              <span>
                • <strong>Half-Thread (Aadha Taar):</strong> Sticky, syrup coats fingers without forming an unbroken thread; used for motichoor boondi.<br/>
                • <strong>One-Thread (Ek Taar):</strong> A single continuous translucent thread forms when pulling thumb and forefinger apart; used for kaju katli and jalebi.<br/>
                • <strong>Two-Thread (Do Taar):</strong> Two firm threads form; used for soan papdi and firm barfis.
              </span>
            </div>

            <div className="p-3.5 bg-[#fff8ec] rounded-lg border border-[#5b1a1a]/10">
              <strong className="text-[#5b1a1a] text-sm block mb-1">Chenna vs. Paneer vs. Khoya</strong>
              <span>
                • <strong>Chenna:</strong> Freshly curdled cow milk curds drained to delicate softness, retaining microscopic moisture for spongy expansion (rasgulla, sandesh).<br/>
                • <strong>Paneer:</strong> Pressed and weighted curd blocks with denser structural integrity.<br/>
                • <strong>Khoya / Mawa:</strong> Whole buffalo or cow milk slow-evaporated until only rich solid milk solids remain (gulab jamun, peda).
              </span>
            </div>

            <div className="p-3.5 bg-[#fff8ec] rounded-lg border border-[#5b1a1a]/10">
              <strong className="text-[#5b1a1a] text-sm block mb-1">Bhunao (Slow Ghee Roasting)</strong>
              <span>
                The critical phase where chickpea flour (besan) or semolina is roasted over gentle heat with pure ghee until the starch gelatinizes, moisture departs, and caramelization produces deep hazelnut aroma.
              </span>
            </div>
          </div>
        </div>

        <PatternDivider variant="rangoli" />

        {/* Navigation CTA */}
        <div className="text-center pt-2">
          <Link
            to="/sweets"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded bg-[#5b1a1a] text-[#fff8ec] hover:bg-[#3a1010] transition-colors shadow-sm"
          >
            <span>Explore All 14 Traditional Sweets</span>
            <Sparkles size={14} className="text-[#f2a900]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
