import type { AxiosError } from 'axios';
import { getRecommend } from './getRecommend';
import { useQuery } from '@tanstack/react-query';

interface Recommend {
  type: 'string';
  titleAndTags: 'string';
  price: 0;
  imageUrl: 'string';
}

interface RecommendResponse {
  result: Recommend[];
}

export const useRecommend = () => {
  return useQuery<RecommendResponse, AxiosError>({
    queryKey: ['recommend'],
    queryFn: getRecommend,
  });
};
