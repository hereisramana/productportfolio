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
        <header className="flex justify-between items-center px-6 py-4 border-b border-[var(--color-paper-dark)]/10 bg-[var(--color-paper)] sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[var(--color-ink)] flex-shrink-0 flex items-center justify-center overflow-hidden">
              {/* Branding Placeholder */}
              <span className="text-[var(--color-paper)] font-bold text-xs">R</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm font-bold tracking-tight uppercase">Ramana</h1>
              <p className="text-[10px] font-mono text-[var(--color-ink-subtle)] lowercase">ramanadesign.tech</p>
            </div>
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-mono tracking-widest uppercase opacity-80">Design-folio</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--color-ink)]/10 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {/* Hero - Matching SVG */}
        <div className="px-6 pt-20 pb-16 max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-start gap-8">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-[var(--color-ink)] uppercase">
              Product <br /> Designer.
            </h2>
            
            <div className="space-y-1">
              <p className="text-lg md:text-xl text-[var(--color-ink)] max-w-2xl font-mono">
                I design end-to-end products.
              </p>
              <p className="text-lg md:text-xl text-[var(--color-ink-subtle)] max-w-2xl font-mono">
                I'm skilled at handling every stage, from discovery to delivery.
              </p>
              <p className="text-lg md:text-xl text-[var(--color-ink-subtle)] max-w-2xl font-mono">
                Always eager to learn and grow through new work experiences.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={onNavigateToDocumentation}
                className="px-8 py-3 text-sm font-bold border border-[var(--color-ink)] text-[var(--color-ink)] rounded-full hover:bg-[var(--color-ink)] hover:text-[var(--color-on-active)] active:scale-95 transition-all cursor-pointer"
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
    </>
  );
};