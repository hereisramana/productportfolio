import React, { useState, useRef, useEffect } from 'react';
import { Project } from '../../types';

interface ProjectGridTileProps {
  project: Project;
  onNavigate: (projectId: string) => void;
}

export const ProjectGridTile: React.FC<ProjectGridTileProps> = ({ project, onNavigate }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (window.matchMedia('(max-width: 768px)').matches) {
          setIsInView(entry.isIntersecting);
        }
      },
      {
        threshold: 0.6,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="group relative flex flex-col gap-[10px] perspective-1000"
    >
      <div 
        className="relative w-full aspect-[405/321] transition-all duration-700 transform-style-3d"
        style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        
        {/* Front Face */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-[var(--radius-lg)] md:rounded-[40px] overflow-hidden bg-[var(--color-paper-dim)] border border-[var(--color-ink)]/5 transition-all duration-500"
          aria-hidden={isFlipped}
        >
          <img 
            src={project.thumbnailUrl} 
            alt={project.title} 
            className={`w-full h-full object-cover transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-90'}`}
            loading="lazy"
          />
          
          {/* Overlay Trigger for Flip */}
          <button 
            onClick={() => setIsFlipped(true)}
            className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors cursor-pointer focus:outline-none"
            aria-label={`View details for ${project.title}`}
          />
        </div>

        {/* Back Face - Technical Blueprint Look */}
        <div 
          className="absolute inset-0 backface-hidden rotate-y-180 rounded-[var(--radius-lg)] md:rounded-[32px] bg-[#D9D9D9] flex flex-col shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-[#323840]/20"
          aria-hidden={!isFlipped}
          onClick={() => setIsFlipped(false)}
          style={{ filter: 'url(#noise-filter)' }}
        >
           {/* Charcoal Header Block */}
           <div className="bg-[#323840] px-8 pt-6 pb-4 flex flex-col gap-1 rounded-t-[var(--radius-lg)] md:rounded-t-[32px]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#5479A2]" />
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#F0F0F0] opacity-60">Project metadata // 001</p>
              </div>
              <h3 className="text-xl font-bold text-[#F0F0F0] tracking-tight uppercase" style={{ fontFamily: 'var(--font-accent)' }}>{project.title}</h3>
           </div>

           {/* Content Body */}
           <div className="flex-1 p-8 flex flex-col justify-between">
              <div>
                 <p className="text-[11px] font-mono uppercase tracking-widest text-[#323840]/40 mb-2">Technical Summary</p>
                 <p className="text-[13px] text-[#323840] opacity-90 leading-relaxed font-mono line-clamp-5 whitespace-pre-line" style={{ fontFamily: 'var(--font-mono-chivo)' }}>
                   {project.summary}
                 </p>
              </div>

              {/* Action Buttons styled like SVG */}
              <div className="flex gap-3 mt-4">
                 <button 
                   onClick={(e) => {
                     e.stopPropagation();
                     onNavigate(project.id);
                   }}
                   className="flex-1 py-3 text-[10px] font-bold uppercase tracking-widest bg-[#5479A2] text-white rounded-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer shadow-sm"
                   style={{ fontFamily: 'var(--font-accent)' }}
                 >
                    View Project
                 </button>
                 
                 {project.liveUrl && (
                   <a 
                     href={project.liveUrl}
                     target="_blank"
                     rel="noreferrer"
                     onClick={(e) => e.stopPropagation()} 
                     className="flex-1 py-3 text-[10px] font-bold uppercase tracking-widest border-2 border-[#5479A2] text-[#5479A2] rounded-lg flex items-center justify-center hover:bg-[#5479A2] hover:text-white transition-all cursor-pointer"
                     style={{ fontFamily: 'var(--font-accent)' }}
                   >
                     Live Prototype
                   </a>
                 )}
              </div>
           </div>
        </div>
      </div>

      {/* Static Info Below Card (Visible at all times like SVG) */}
      <div className={`mt-2 transition-opacity duration-300 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
         <h4 className="text-2xl font-bold text-[var(--color-ink)] mb-1">{project.title}</h4>
         <p className="text-sm font-mono text-[var(--color-ink-subtle)]">{project.tagline}</p>
    </div>
  );
};




