// getFoodQuery.ts
import { useQuery } from '@tanstack/react-query';
import { getFood } from './getFood';
import type { AxiosError } from 'axios';

interface Food {
  type: string;
  title: string;
  tag1: string;
  tag2: string;
  tag3: string;
  price: number;
  imageUrl: string;
}

interface FoodResponse {
  result: Food[];
}

export const useFood = (country: string) => {
  return useQuery<FoodResponse, AxiosError>({
    queryKey: ['food', country], // region별로 캐싱됨
    queryFn: () => getFood(country),
    enabled: !!country, // region이 없으면 fetch 안함
  });
};
