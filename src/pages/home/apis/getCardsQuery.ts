import { useQuery } from '@tanstack/react-query';
import { getCards } from '@/pages/home/apis/getCards';
import type { AxiosError } from 'axios';

interface Card {
  cardName: string;
  description: string;
  imageUrl: string;
}

interface CardResponse {
  result: Card[];
}

export const useCards = () => {
  return useQuery<CardResponse, AxiosError>({
    queryKey: ['cards'],
    queryFn: getCards,
  });
};
