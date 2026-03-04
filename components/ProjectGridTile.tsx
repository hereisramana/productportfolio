import React, { useState, KeyboardEvent } from 'react';
import { Project, DetailMode } from '../types';
import { Play, FileText, ArrowUpRight } from 'lucide-react';

interface ProjectGridTileProps {
  project: Project;
  onNavigate: (projectId: string, mode: DetailMode) => void;
}

export const ProjectGridTile: React.FC<ProjectGridTileProps> = ({ project, onNavigate }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleFlip();
    }
  };

  return (
    <div 
      className="group relative flex flex-col text-left transition-all duration-300 perspective-1000 cursor-pointer h-full"
      onClick={handleFlip}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      aria-expanded={isFlipped}
    >
      <div className={`relative w-full aspect-square transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden bg-[var(--color-paper-dim)] rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-paper-dark)]/30 shadow-sm">
          <img 
            src={project.thumbnailUrl} 
            alt="" 
            className="w-full h-full object-cover image-technical transition-all duration-500" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/50 mb-2">{project.role}</p>
            <h3 className="text-white font-medium text-lg leading-tight mb-3">{project.title}</h3>
            <p className="text-xs leading-relaxed text-white/80 font-light text-balance">{project.summary}</p>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[var(--color-ink)] rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-paper-dark)]/30 shadow-sm flex flex-col items-center justify-center p-6 space-y-4" aria-hidden={!isFlipped}>
           <h3 className="text-[var(--color-paper)] font-medium text-lg mb-2">{project.title}</h3>
           
           <button 
             onClick={(e) => { e.stopPropagation(); onNavigate(project.id, 'WRITTEN'); }}
             className="w-full py-3 bg-[var(--color-paper)] text-[var(--color-ink)] rounded-[var(--radius-sm)] text-xs uppercase font-bold tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-paper)]"
             tabIndex={isFlipped ? 0 : -1}
           >
             <FileText className="w-3 h-3" />
             Case Study
           </button>

           <button 
             onClick={(e) => { e.stopPropagation(); onNavigate(project.id, 'VIDEO'); }}
             className="w-full py-3 border border-[var(--color-paper)]/30 text-[var(--color-paper)] rounded-[var(--radius-sm)] text-xs uppercase font-bold tracking-widest hover:bg-[var(--color-paper)]/10 transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-paper)]"
             tabIndex={isFlipped ? 0 : -1}
           >
             <Play className="w-3 h-3" />
             Video Demo
           </button>

           {project.liveUrl && (
             <a 
               href={project.liveUrl}
               target="_blank"
               rel="noreferrer"
               onClick={(e) => e.stopPropagation()}
               className="w-full py-3 border border-[var(--color-paper)]/30 text-[var(--color-paper)] rounded-[var(--radius-sm)] text-xs uppercase font-bold tracking-widest hover:bg-[var(--color-paper)]/10 transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-paper)]"
               tabIndex={isFlipped ? 0 : -1}
             >
               <ArrowUpRight className="w-3 h-3" />
               Prototype
             </a>
           )}
        </div>

      </div>
    </div>
  );
};
