import { useMutation } from '@tanstack/react-query';
import { postMainSearch } from './postMainSearch';

interface MainSearchRequest {
  departure: string;
  arrival: string;
  departDate: string;
  arriveDate: string;
  size: number;
}

export const usePostMainSearch = () => {
  return useMutation({
    mutationFn: (body: MainSearchRequest) => postMainSearch(body),
  });
};
