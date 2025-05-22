import { useQuery } from '@tanstack/react-query';
import { getDiscountRun } from './getDiscountRun';
import type { AxiosError } from 'axios';

interface DiscountRun {
  title: string;
  tagName1: string;
  tagName2: string;
  tagName3: string;
  price: number;
  imageUrl: string;
  bottomTag1: string;
  bottomTag2: string;
}

interface DiscountRunResponse {
  result: DiscountRun[];
}

export const useDiscountRun = () => {
  return useQuery<DiscountRunResponse, AxiosError>({
    queryKey: ['discountrun'],
    queryFn: getDiscountRun,
  });
};
