import queryClient from '../queryClient';

export default function refetchTokens(queryKey: string) {
  return () => queryClient.invalidateQueries(queryKey);
}