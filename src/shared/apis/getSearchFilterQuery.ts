// hooks/useFilteredPackages.ts
import { useQuery } from '@tanstack/react-query';
import { getSearchFilterHttp } from './getSearchFilterHttp';

interface getSearchFilterQueryParamsTypes {
  period: string;
  page?: number;
  size?: number;
}

export const useGetSearchFilterQuery = ({ period, page = 0, size = 20 }: getSearchFilterQueryParamsTypes) => {
  return useQuery({
    queryKey: ['filteredPackages', period, page, size],
    queryFn: () => getSearchFilterHttp({ period, page, size }),
    enabled: !!period,
  });
};
