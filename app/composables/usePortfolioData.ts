import portfolioData from '~/data/portfolioData.json';

/**
 * usePortfolioData — global composable
 * Uses hardcoded static data instead of fetching from the backend.
 * Pages consume this instead of re-fetching individually.
 */
export const usePortfolioData = () => {
  // ── Reactive state (shared across all components via useState) ──
  const projects      = useState<any[]>('portfolio_projects',      () => []);
  const experiences   = useState<any[]>('portfolio_experiences',   () => []);
  const aboutCards    = useState<any[]>('portfolio_aboutCards',    () => []);
  const certificates  = useState<any[]>('portfolio_certificates',  () => []);
  const cvUrl         = useState<string>('portfolio_cvUrl',        () => '');
  const isPdfEnabled  = useState<boolean>('portfolio_isPdfEnabled', () => false);
  const visitorCount  = useState<number>('portfolio_visitorCount',  () => 0);
  const isDataReady   = useState<boolean>('portfolio_dataReady',   () => false);

  /**
   * Load ALL data (call once, from SplashScreen).
   */
  const fetchAll = async () => {
    try {
      experiences.value = portfolioData.experiences;
      aboutCards.value = portfolioData.aboutCards;
      
      projects.value = portfolioData.projects.map((p: any) => ({
        ...p,
        image: p.imageUrl ? p.imageUrl : '',
        tags: p.techStack
          ? p.techStack.split(',').map((t: string) => t.trim()).filter(Boolean)
          : [],
        github: p.githubUrl,
        demo: p.demoUrl,
      }));

      certificates.value = portfolioData.certificates.map((c: any) => ({
        ...c,
        image:  c.fileUrl ? c.fileUrl : '',
        pdfUrl: c.pdfUrl  ? c.pdfUrl  : '',
      }));

      const settings = portfolioData.settings;
      if (settings.cvUrl) cvUrl.value = settings.cvUrl;
      if (settings.enablePdfView !== undefined) isPdfEnabled.value = settings.enablePdfView;
      if (settings.visitorCount) visitorCount.value = settings.visitorCount;

    } catch (e) {
      console.error('[usePortfolioData] Error loading static data:', e);
    } finally {
      isDataReady.value = true;
    }
  };

  const fetchVisitorStats = async (range: string = '1m') => {
    // Return empty array since backend is offline
    return [];
  };

  return {
    projects,
    experiences,
    aboutCards,
    certificates,
    cvUrl,
    isPdfEnabled,
    visitorCount,
    isDataReady,
    fetchAll,
    fetchVisitorStats,
  };
};
