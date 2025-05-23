import { useQuery } from '@tanstack/react-query';
import { getTimedeal } from './getTimedeal';
import type { AxiosError } from 'axios';

interface Timedeal {
  title: 'string';
  tagName1: 'string';
  tagName2: 'string';
  tagName3: 'string';
  price: 0;
  imageUrl: 'string';
  bottomTag1: 'string';
  bottomTag2: 'string';
}

interface TimedealResponse {
  result: Timedeal[];
}

export const useTimedeal = () => {
  return useQuery<TimedealResponse, AxiosError>({
    queryKey: ['timedeals'],
    queryFn: getTimedeal,
  });
};
