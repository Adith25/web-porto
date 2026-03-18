export const useLoading = () => {
  const isLoading = useState('isLoading', () => true);
  
  const finishLoading = () => {
    isLoading.value = false;
  };
  
  return {
    isLoading,
    finishLoading
  };
};
