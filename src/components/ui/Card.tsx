import React, { KeyboardEvent, useState, useRef, useEffect } from 'react';
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
        // Only apply this logic on mobile/touch devices if needed, 
        // but applying generally provides a nice scroll effect.
        // We'll check if it's a touch device or small screen to be specific if requested,
        // but "on mobile" usually implies the context where hover doesn't exist.
        if (window.matchMedia('(max-width: 768px)').matches) {
            setIsInView(entry.isIntersecting);
        }
      },
      {
        threshold: 0.6, // 60% visibility required to be "in focus"
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

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div 
      ref={cardRef}
      className="group relative h-full perspective-1000 cursor-pointer focus:outline-none"
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={handleKeyDown}
    >
      <div 
        className="relative w-full aspect-square transition-all duration-500 transform-style-3d"
        style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden rounded-[var(--radius-md)] overflow-hidden shadow-sm bg-[var(--color-paper-static-light)] group-hover:ring-2 group-hover:ring-[#2B6B7C] group-focus:ring-2 group-focus:ring-[#2B6B7C] transition-all duration-300">
          <img 
            src={project.thumbnailUrl} 
            alt="" 
            className={`w-full h-full object-cover image-technical ${isInView ? 'in-view' : ''}`}
            loading="lazy"
          />
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-[var(--radius-md)] bg-[var(--color-paper-dim)] p-6 flex flex-col justify-between shadow-sm border border-[var(--color-paper-dark)]/30 group-hover:ring-2 group-hover:ring-[#2B6B7C] group-focus:ring-2 group-focus:ring-[#2B6B7C] transition-all duration-300">
           
           {/* Header / Metrics */}
           <div>
              <div className="flex justify-between items-start mb-3">
                <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-ink-subtle)]">{project.role}</p>
                <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-ink-subtle)]">{project.duration}</p>
              </div>
              <h3 className="text-xl font-bold text-[var(--color-ink)] mb-3 leading-tight">{project.title}</h3>
              <p className="text-sm text-[var(--color-ink)] leading-relaxed line-clamp-4">{project.summary}</p>
           </div>

           {/* Actions */}
           <div className="flex flex-col gap-2 mt-4">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(project.id);
                }}
                tabIndex={isFlipped ? 0 : -1}
                className="w-full py-3 text-xs font-bold uppercase tracking-wider border border-[var(--color-ink)] text-[var(--color-ink)] rounded-[var(--radius-md)] hover:bg-[var(--color-ink)] hover:border-[var(--color-ink)] hover:text-[var(--color-on-active)] active:bg-[var(--color-ink)] active:border-[var(--color-ink)] active:text-[var(--color-on-active)] active:scale-95 transition-all cursor-pointer"
              >
                 Case Study
              </button>
              
              {project.liveUrl ? (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()} 
                  tabIndex={isFlipped ? 0 : -1}
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider border border-[#2B6B7C] text-[#2B6B7C] rounded-[var(--radius-md)] flex items-center justify-center hover:bg-[#2B6B7C] hover:text-white active:bg-[#2B6B7C] active:text-white active:scale-95 transition-all cursor-pointer"
                >
                  Prototype
                </a>
              ) : (
                <button 
                  disabled 
                  tabIndex={-1}
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider border border-[var(--color-paper-dark)] text-[var(--color-ink-subtle)] rounded-[var(--radius-md)] opacity-50 cursor-not-allowed"
                >
                  Prototype N/A
                </button>
              )}
           </div>
        </div>

      </div>
    </div>
  );
};
