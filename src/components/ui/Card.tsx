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
      className="group relative flex flex-col gap-4 perspective-1000"
    >
      <div 
        className="relative w-full aspect-[4/5] md:aspect-[3/4] transition-all duration-700 transform-style-3d"
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

        {/* Back Face */}
        <div 
          className="absolute inset-0 backface-hidden rotate-y-180 rounded-[var(--radius-lg)] md:rounded-[40px] bg-[var(--color-ink)] p-8 flex flex-col justify-between shadow-2xl transition-all duration-500 cursor-pointer"
          aria-hidden={!isFlipped}
          onClick={() => setIsFlipped(false)}
        >
           <div className="mt-2">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-on-active)] opacity-60 mb-4">{project.tags[0]}</p>
              <h3 className="text-2xl font-bold text-[var(--color-on-active)] mb-4 leading-tight">{project.title}</h3>
              <p className="text-sm text-[var(--color-on-active)] opacity-80 leading-relaxed font-mono line-clamp-6">{project.summary}</p>
           </div>

           <div className="flex flex-col gap-3 mt-4">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(project.id);
                }}
                className="w-full py-4 text-xs font-bold uppercase tracking-wider bg-[var(--color-on-active)] text-[var(--color-paper)] rounded-full hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                 View Case Study
              </button>
              
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()} 
                  className="w-full py-4 text-xs font-bold uppercase tracking-wider border border-[var(--color-on-active)] text-[var(--color-on-active)] rounded-full flex items-center justify-center hover:bg-[var(--color-on-active)] hover:text-[var(--color-paper)] transition-all cursor-pointer"
                >
                  Live Prototype
                </a>
              )}
           </div>
        </div>
      </div>

      {/* Static Info Below Card (Visible at all times like SVG) */}
      <div className={`mt-2 transition-opacity duration-300 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
         <h4 className="text-2xl font-bold text-[var(--color-ink)] mb-1">{project.title}</h4>
         <p className="text-sm font-mono text-[var(--color-ink-subtle)]">{project.tagline}</p>
      </div>
    </div>
  );
};


