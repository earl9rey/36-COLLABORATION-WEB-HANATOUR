import { useQuery } from '@tanstack/react-query';
import { getMycountry } from './getMycountry';
import type { AxiosError } from 'axios';

interface Mycountry {
  title: 'string';
  description: 'string';
  imageUrl: 'string';
}

interface MycountryResponse {
  result: Mycountry[];
}

export const useMycountry = () => {
  return useQuery<MycountryResponse, AxiosError>({
    queryKey: ['mycountry'],
    queryFn: getMycountry,
  });
};
