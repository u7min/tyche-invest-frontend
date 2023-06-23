export const extractApolloError = (error: any): string => {
  const response = JSON.parse(JSON.stringify(error));
  const networkErrors = response.networkError?.result?.errors.map(
    (e: Record<string, any>) => e.message
  );
  return networkErrors ?? error.message;
};
