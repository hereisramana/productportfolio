import React from 'react';
import { PROJECTS } from './constants/siteData';
import { Home } from './components/sections/Home';
import { UnifiedProjectDetail } from './components/sections/ProjectDetail';
import { Documentation } from './components/sections/Documentation';
import { Layout } from './components/layout/Layout';
import { useHistoryRouter } from './hooks/useHistoryRouter';

export const App: React.FC = () => {
  const { view, selectedProjectId, navigateToProject, navigateToDocumentation, goBack } = useHistoryRouter();

  const currentProject = PROJECTS.find(p => p.id === selectedProjectId);

  // --- RENDERING ---

  if (view === 'PROJECT_DETAIL' && currentProject) {
      return (
        <Layout>
            <UnifiedProjectDetail 
                project={currentProject} 
                onBack={goBack} 
            />
        </Layout>
      );
  }

  if (view === 'DOCUMENTATION') {
      return (
        <Layout>
            <Documentation 
                onBack={goBack} 
            />
        </Layout>
      );
  }

  return (
    <Layout>
        <Home 
            onNavigate={navigateToProject} 
            onNavigateToDocumentation={navigateToDocumentation}
        />
    </Layout>
  );
};
