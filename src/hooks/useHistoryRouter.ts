import { useState, useEffect, useCallback } from 'react';
import { ViewState, DetailMode } from '../types';

interface RouterState {
  view: ViewState;
  selectedProjectId: string | null;
  detailMode: DetailMode;
  navigate: (projectId: string, mode?: DetailMode) => void;
  goBack: () => void;
  setDetailMode: (mode: DetailMode) => void;
  clearSelection: () => void;
}

export const useHistoryRouter = (): RouterState => {
  const [view, setView] = useState<ViewState>('HOME');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [detailMode, setDetailMode] = useState<DetailMode>('WRITTEN');

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const state = event.state;
      if (!state) {
        setView('HOME');
        setSelectedProjectId(null);
      } else {
        setView(state.view || 'HOME');
        setSelectedProjectId(state.projectId || null);
        if (state.mobileMode) {
            setDetailMode(state.mobileMode);
        }
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
         if (state.mobileMode) setDetailMode(state.mobileMode);
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

  const navigate = useCallback((id: string, mode?: DetailMode) => {
    const detailUrl = `?project=${id}&view=detail`;
    window.history.pushState(
       { view: 'PROJECT_DETAIL', projectId: id, mobileMode: mode }, 
       '', 
       detailUrl
    );
    
    setSelectedProjectId(id);
    if (mode) setDetailMode(mode);
    setView('PROJECT_DETAIL');
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
      detailMode, 
      navigate, 
      goBack, 
      setDetailMode,
      clearSelection
  };
};
