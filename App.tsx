import React from 'react';
import { PROJECTS } from './constants';
import { Home } from './components/Home';
import { UnifiedProjectDetail } from './components/UnifiedProjectDetail';
import { Layout } from './components/Layout';
import { useHistoryRouter } from './hooks/useHistoryRouter';

export const App: React.FC = () => {
  const { view, selectedProjectId, detailMode, navigate, goBack } = useHistoryRouter();

  const currentProject = PROJECTS.find(p => p.id === selectedProjectId);

  // --- RENDERING ---

  if (view === 'PROJECT_DETAIL' && currentProject) {
      return (
        <Layout>
            <UnifiedProjectDetail 
                project={currentProject} 
                mode={detailMode} 
                onBack={goBack} 
            />
        </Layout>
      );
  }

  return (
    <Layout>
        <Home 
            onNavigate={navigate} 
        />
    </Layout>
  );
};
