import React from 'react';
import { PROJECTS } from './constants/siteData';
import { Home } from './components/sections/Home';
import { UnifiedProjectDetail } from './components/sections/ProjectDetail';
import { Documentation } from './components/sections/Documentation';
import { Layout } from './components/layout/Layout';
import { useHistoryRouter } from './hooks/useHistoryRouter';
import { ThemeProvider } from './context/ThemeContext';

export const App: React.FC = () => {
  const { view, selectedProjectId, navigateToProject, navigateToDocumentation, goBack } = useHistoryRouter();

  const currentProject = PROJECTS.find(p => p.id === selectedProjectId);

  // --- RENDERING ---

  const renderView = () => {
    if (view === 'PROJECT_DETAIL' && currentProject) {
        return (
          <UnifiedProjectDetail 
              project={currentProject} 
              onBack={goBack} 
          />
        );
    }

    if (view === 'DOCUMENTATION') {
        return (
          <Documentation 
              onBack={goBack} 
          />
        );
    }

    return (
      <Home 
          onNavigate={navigateToProject} 
          onNavigateToDocumentation={navigateToDocumentation}
      />
    );
  };

  return (
    <ThemeProvider>
      <Layout>
        {renderView()}
      </Layout>
    </ThemeProvider>
  );
};

