/**
 * usePortfolioData — global composable
 * Fetches all backend data once during the loading phase.
 * Pages consume this instead of re-fetching individually.
 */
export const usePortfolioData = () => {
  const config = useRuntimeConfig();
  const API_BASE = config.public.apiBase as string;

  // ── Reactive state (shared across all components via useState) ──
  const projects      = useState<any[]>('portfolio_projects',      () => []);
  const experiences   = useState<any[]>('portfolio_experiences',   () => []);
  const aboutCards    = useState<any[]>('portfolio_aboutCards',    () => []);
  const certificates  = useState<any[]>('portfolio_certificates',  () => []);
  const cvUrl         = useState<string>('portfolio_cvUrl',        () => '');
  const isPdfEnabled  = useState<boolean>('portfolio_isPdfEnabled', () => false);
  const isDataReady   = useState<boolean>('portfolio_dataReady',   () => false);

  // ── Individual fetch functions ──
  const fetchExperiences = async () => {
    try {
      const data = await $fetch<any[]>(`${API_BASE}/experiences`);
      experiences.value = data;
    } catch (e) {
      console.error('[usePortfolioData] experiences:', e);
    }
  };

  const fetchAboutCards = async () => {
    try {
      const data = await $fetch<any[]>(`${API_BASE}/about-cards`);
      aboutCards.value = data;
    } catch (e) {
      console.error('[usePortfolioData] about-cards:', e);
    }
  };

  const fetchProjects = async () => {
    try {
      const data = await $fetch<any[]>(`${API_BASE}/projects`);
      projects.value = data.map((p: any) => ({
        ...p,
        tags: p.techStack
          ? p.techStack.split(',').map((t: string) => t.trim()).filter(Boolean)
          : [],
        github: p.githubUrl,
        demo: p.demoUrl,
      }));
    } catch (e) {
      console.error('[usePortfolioData] projects:', e);
    }
  };

  const fetchCertificates = async () => {
    try {
      const data = await $fetch<any[]>(`${API_BASE}/certificates`);
      certificates.value = data.map((c: any) => ({
        ...c,
        image:  c.fileUrl ? `${API_BASE}${c.fileUrl}` : '',
        pdfUrl: c.pdfUrl  ? `${API_BASE}${c.pdfUrl}`  : '',
      }));
    } catch (e) {
      console.error('[usePortfolioData] certificates:', e);
    }
  };

  const fetchSettings = async () => {
    try {
      const settings = await $fetch<any>(`${API_BASE}/settings`);
      if (settings.cvUrl)        cvUrl.value        = `${API_BASE}${settings.cvUrl}`;
      if (settings.enablePdfView) isPdfEnabled.value = settings.enablePdfView;
    } catch (e) {
      console.error('[usePortfolioData] settings:', e);
    }
  };

  /**
   * Fetch ALL data in parallel (call once, from SplashScreen).
   * Resolves when every request has settled (success or error).
   */
  const fetchAll = async () => {
    await Promise.allSettled([
      fetchExperiences(),
      fetchAboutCards(),
      fetchProjects(),
      fetchCertificates(),
      fetchSettings(),
    ]);
    isDataReady.value = true;
  };

  return {
    projects,
    experiences,
    aboutCards,
    certificates,
    cvUrl,
    isPdfEnabled,
    isDataReady,
    fetchAll,
  };
};
