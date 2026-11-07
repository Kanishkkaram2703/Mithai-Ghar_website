import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, ArrowLeft } from 'lucide-react';
import { SingleDiya } from '../components/DiyaRow';
import { usePageMeta } from '../hooks/usePageMeta';

export const NotFoundPage: React.FC = () => {
  usePageMeta('404 — Page Not Found | Mithai Ghar', 'The requested confectionery page could not be found.');

  return (
    <div className="min-h-[75vh] bg-[#fff8ec] flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-[#fffdfa] p-8 sm:p-10 rounded-2xl border border-[#5b1a1a]/15 shadow-sm space-y-5">
        <div className="flex justify-center mb-2">
          <SingleDiya scale={1.2} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#e8590c]">
            Error 404
          </span>
          <h1 className="text-3xl font-serif font-bold text-[#5b1a1a]">
            Sweet Not Found
          </h1>
          <p className="text-xs text-[#231815]/75 leading-relaxed">
            The confection recipe or page you are looking for seems to have dissolved like delicate sugar syrup.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold rounded bg-[#5b1a1a] text-[#fff8ec] hover:bg-[#3a1010] transition-colors shadow-xs"
          >
            <Home size={14} />
            <span>Return Home</span>
          </Link>
          <Link
            to="/sweets"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold rounded border border-[#5b1a1a]/20 bg-white hover:bg-[#fff8ec] text-[#5b1a1a] transition-colors"
          >
            <Compass size={14} />
            <span>Explore Catalog</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
