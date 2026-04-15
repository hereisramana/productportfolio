import React from 'react';
import { PROJECTS } from '../../constants/siteData';
import { Sun, Moon } from 'lucide-react';
import { ProjectGridTile } from '../ui/Card';
import { useTheme } from '../../hooks/useTheme';

interface HomeProps {
  onNavigate: (projectId: string) => void;
  onNavigateToDocumentation: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onNavigateToDocumentation }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-ink)] focus:text-[var(--color-paper)] focus:rounded-[var(--radius-sm)] focus:font-bold">
        Skip to content
      </a>
      <main id="main-content" className="min-h-[100dvh] w-full flex flex-col bg-[var(--color-paper)]">
        {/* Header */}
        <header className="grid grid-cols-3 items-center px-6 py-4 border-b border-[var(--color-paper-dark)]/10 bg-[var(--color-paper)] sticky top-0 z-40">
          {/* Branding Left */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-ink)] flex-shrink-0 flex items-center justify-center overflow-hidden">
              <span className="text-[var(--color-paper)] font-bold text-xs">R</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm font-bold tracking-tight uppercase">Ramana</h1>
              <p className="text-[10px] font-mono text-[var(--color-ink-subtle)] lowercase">ramanadesign.tech</p>
            </div>
          </div>

          {/* Title Center */}
          <div className="text-center">
            <p className="text-sm font-mono tracking-widest uppercase opacity-80">Design-folio</p>
          </div>

          {/* Theme Toggle Right */}
          <div className="flex justify-end">
            <div className="relative flex items-center bg-[var(--color-ink)]/5 p-1 rounded-[var(--radius-md)]">
              {/* Highlight Backdrop */}
              <div 
                className={`absolute w-[34px] h-[34px] bg-[var(--color-ink)] rounded-[var(--radius-sm)] transition-all duration-300 ease-[var(--ease-soft)]`}
                style={{ 
                  transform: theme === 'dark' ? 'translateX(0)' : 'translateX(34px)',
                  opacity: 1
                }}
              />
              
              <button
                onClick={() => theme !== 'dark' && toggleTheme()}
                className={`w-[34px] h-[34px] flex items-center justify-center relative z-10 transition-colors duration-300 ${theme === 'dark' ? 'text-[var(--color-paper)]' : 'text-[var(--color-ink-subtle)]'}`}
                aria-label="Switch to dark mode"
              >
                <Sun className="w-4 h-4 fill-current" />
              </button>
              
              <button
                onClick={() => theme !== 'light' && toggleTheme()}
                className={`w-[34px] h-[34px] flex items-center justify-center relative z-10 transition-colors duration-300 ${theme === 'light' ? 'text-[var(--color-paper)]' : 'text-[var(--color-ink-subtle)]'}`}
                aria-label="Switch to light mode"
              >
                <Moon className="w-4 h-4 fill-current" />
              </button>
            </div>
          </div>
        </header>

        {/* Hero - Montserrat & Chivo Mono */}
        <div className="px-6 pt-24 pb-20 max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-start gap-10">
            <h2 className="text-[64px] font-bold tracking-tighter leading-tight text-[var(--color-ink)] uppercase" style={{ fontFamily: 'var(--font-accent)' }}>
              Product Designer.
            </h2>
            
            <div className="space-y-2">
              <p className="text-[18px] text-[var(--color-ink)] max-w-2xl" style={{ fontFamily: 'var(--font-mono-chivo)' }}>
                I design end-to-end products.
              </p>
              <p className="text-[18px] text-[var(--color-ink-subtle)] max-w-2xl" style={{ fontFamily: 'var(--font-mono-chivo)' }}>
                I'm skilled at handling every stage, from discovery to delivery.
              </p>
              <p className="text-[18px] text-[var(--color-ink-subtle)] max-w-2xl" style={{ fontFamily: 'var(--font-mono-chivo)' }}>
                Always eager to learn and grow through new work experiences.
              </p>
            </div>


            <div className="pt-6">
              <button
                onClick={onNavigateToDocumentation}
                className="px-10 py-4 text-sm font-bold border border-[var(--color-ink)] text-[var(--color-ink)] rounded-full hover:bg-[var(--color-ink)] hover:text-[var(--color-on-active)] active:scale-95 transition-all cursor-pointer"
                style={{ fontFamily: 'var(--font-accent)' }}
              >
                Contact me
              </button>
            </div>
          </div>
        </div>


        {/* Content Area */}
        <div className="flex-1 p-6 pb-24 w-full max-w-7xl mx-auto">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)] mb-6 opacity-50">Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-2 duration-500">
            {PROJECTS.map((project) => (
              <ProjectGridTile
                key={project.id}
                project={project}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Global Noise Filter (Hidden) */}
      <svg className="hidden">
        <filter id="noise-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feBlend mode="overlay" />
        </filter>
      </svg>
    </>
  );
};
