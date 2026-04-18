import React, { useState, useRef, useEffect } from 'react';
import { Project } from '../../types';
import { useTheme } from '../../hooks/useTheme';

interface ProjectGridTileProps {
  project: Project;
  onNavigate: (projectId: string) => void;
}

export const ProjectGridTile: React.FC<ProjectGridTileProps> = ({ project, onNavigate }) => {
  const { theme } = useTheme();
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
          className="absolute inset-0 w-full h-full backface-hidden rounded-[var(--radius-lg)] md:rounded-t-[40px] overflow-hidden bg-[var(--color-paper-dim)] border border-[var(--color-ink)]/5 transition-all duration-500"
          aria-hidden={isFlipped}
        >
          <img 
            src={theme === 'dark' && project.thumbnailUrlLight ? project.thumbnailUrlLight : project.thumbnailUrl} 
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

        {/* Back Face - Refined Technical Sheet */}
        <div 
          className="absolute inset-0 backface-hidden rotate-y-180 rounded-[var(--radius-lg)] md:rounded-t-[40px] bg-[#E0E0E0] flex flex-col shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-[#323840]/10"
          aria-hidden={!isFlipped}
          onClick={() => setIsFlipped(false)}
        >
           {/* Charcoal Header Block - Thinner & Centered like Mockup */}
           <div className="bg-[#323840] h-[96px] flex items-center justify-center px-6">
              <h3 className="text-xl font-bold text-[#F0F0F0] tracking-tight uppercase" style={{ fontFamily: 'var(--font-accent)' }}>
                {project.title}
              </h3>
           </div>

           {/* Content Body - Improved Spacing */}
           <div className="flex-1 p-8 pt-10 flex flex-col justify-between">
              <div className="space-y-4">
                 <p className="text-[15px] text-[#323840] leading-relaxed font-medium opacity-90" style={{ fontFamily: 'var(--font-primary)' }}>
                   {project.summary}
                 </p>
              </div>

              {/* Action Buttons styled like Mockup */}
              <div className="flex gap-4 mt-6">
                 <button 
                   onClick={(e) => {
                     e.stopPropagation();
                     onNavigate(project.id);
                   }}
                   className="flex-1 py-3.5 text-sm font-bold bg-[#5479A2] text-white rounded-[16px] hover:brightness-110 active:scale-95 transition-all cursor-pointer shadow-sm"
                   style={{ fontFamily: 'var(--font-accent)' }}
                 >
                    Case Study
                 </button>
                 
                 {project.liveUrl ? (
                   <a 
                     href={project.liveUrl}
                     target="_blank"
                     rel="noreferrer"
                     onClick={(e) => e.stopPropagation()} 
                     className="flex-1 py-3.5 text-sm font-bold border-2 border-[#5479A2] text-[#323840] rounded-[16px] flex items-center justify-center hover:bg-[#5479A2]/5 transition-all cursor-pointer"
                     style={{ fontFamily: 'var(--font-accent)' }}
                   >
                     Prototype
                   </a>
                 ) : (
                    <div className="flex-1 py-3.5 text-sm font-bold border-2 border-[#323840]/20 text-[#323840]/40 rounded-[16px] flex items-center justify-center cursor-not-allowed">
                      Prototype
                    </div>
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
    </div>
  );
};





