export interface SiteSetting {
  announcementText: string;
  announcementActive: boolean;
  bannerColor: string;
  textColor: string;
  animationSpeed: number;
}

export const useAnnouncement = () => {
  const settings = useState<SiteSetting | null>('announcement-settings', () => null);
  const isLoading = useState<boolean>('announcement-loading', () => false);

  const fetchSettings = async () => {
    if (settings.value || isLoading.value) return;
    
    isLoading.value = true;
    const config = useRuntimeConfig();
    const API_BASE = config.public.apiBase;
    
    try {
      const res = await $fetch<any>(`${API_BASE}/settings`);
      settings.value = res;
    } catch (err) {
      console.error('Failed to load site settings for banner:', err);
    } finally {
      isLoading.value = false;
    }
  };

  const isBannerVisible = computed(() => {
    return !!(settings.value?.announcementActive && settings.value?.announcementText);
  });

  return {
    settings,
    isLoading,
    fetchSettings,
    isBannerVisible
  };
};
