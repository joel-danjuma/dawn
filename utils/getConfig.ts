export const getConfig = () => {
  return {
    apiUrl:
      process.env.NEXT_PUBLIC_LINGOLETTE_BASE_URL ||
      "https://lingolette.com/api",
    // Add other configuration settings as needed
  };
};
