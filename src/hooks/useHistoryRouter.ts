import { useState, useEffect, useCallback } from 'react';
import { ViewState } from '../types';

interface RouterState {
  view: ViewState;
  selectedProjectId: string | null;
  navigateToProject: (projectId: string) => void;
  navigateToDocumentation: () => void;
  goBack: () => void;
  clearSelection: () => void;
}

export const useHistoryRouter = (): RouterState => {
  const [view, setView] = useState<ViewState>('HOME');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const state = event.state;
      if (!state) {
        setView('HOME');
        setSelectedProjectId(null);
      } else {
        setView(state.view || 'HOME');
        setSelectedProjectId(state.projectId || null);
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Initial State Restoration & History Reconstruction
    const restoreState = () => {
      const params = new URLSearchParams(window.location.search);
      const pId = params.get('project');
      const v = params.get('view');
      const state = window.history.state;

      if (state) {
         // Browser restored state
         setView(state.view || 'HOME');
         setSelectedProjectId(state.projectId || null);
      } else if (v === 'documentation') {
         // Reconstruct History: Home -> Documentation
         window.history.replaceState(
            { view: 'HOME' }, 
            '', 
            '/'
         );
         
         const docUrl = `?view=documentation`;
         window.history.pushState(
            { view: 'DOCUMENTATION' }, 
            '', 
            docUrl
         );

         setSelectedProjectId(null);
         setView('DOCUMENTATION');
      } else if (pId) {
         // Deep Link Handling
         if (v === 'detail') {
            // Reconstruct History: Home -> Detail
            window.history.replaceState(
               { view: 'HOME' }, 
               '', 
               '/'
            );
            
            const detailUrl = `?project=${pId}&view=detail`;
            window.history.pushState(
               { view: 'PROJECT_DETAIL', projectId: pId }, 
               '', 
               detailUrl
            );

            setSelectedProjectId(pId);
            setView('PROJECT_DETAIL');
         }
      }
    };

    restoreState();

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigateToProject = useCallback((id: string) => {
    const detailUrl = `?project=${id}&view=detail`;
    window.history.pushState(
       { view: 'PROJECT_DETAIL', projectId: id }, 
       '', 
       detailUrl
    );
    
    setSelectedProjectId(id);
    setView('PROJECT_DETAIL');
  }, []);

  const navigateToDocumentation = useCallback(() => {
    const docUrl = `?view=documentation`;
    window.history.pushState(
       { view: 'DOCUMENTATION' }, 
       '', 
       docUrl
    );
    
    setSelectedProjectId(null);
    setView('DOCUMENTATION');
  }, []);

  const goBack = useCallback(() => {
    window.history.back();
  }, []);

  const clearSelection = useCallback(() => {
      setSelectedProjectId(null);
  }, []);

  return { 
      view, 
      selectedProjectId, 
      navigateToProject, 
      navigateToDocumentation,
      goBack, 
      clearSelection
  };
};
