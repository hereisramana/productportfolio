import React, { KeyboardEvent } from 'react';
import { Project } from '../../types';

interface ProjectGridTileProps {
  project: Project;
  onNavigate: (projectId: string) => void;
}

export const ProjectGridTile: React.FC<ProjectGridTileProps> = ({ project, onNavigate }) => {

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onNavigate(project.id);
    }
  };

  return (
    <div 
      className="group relative flex flex-col text-left transition-all duration-300 cursor-pointer h-full hover:-translate-y-1"
      onClick={() => onNavigate(project.id)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-paper-dark)]/30 shadow-sm bg-[var(--color-paper-dim)]">
        <img 
          src={project.thumbnailUrl} 
          alt="" 
          className="w-full h-full object-cover image-technical transition-all duration-500 group-hover:scale-105" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <p className="text-[10px] font-mono uppercase tracking-widest text-white/50 mb-2">{project.role}</p>
          <h3 className="text-white font-medium text-lg leading-tight mb-3">{project.title}</h3>
          <p className="text-xs leading-relaxed text-white/80 font-light text-balance line-clamp-3">{project.summary}</p>
        </div>
      </div>
    </div>
  );
};
