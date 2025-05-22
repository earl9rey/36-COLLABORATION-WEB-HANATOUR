import http from '@/shared/apis/http';

interface Card {
  cardName: string;
  description: string;
  imageUrl: string;
}

interface CardResponse {
  result: Card[];
}

export const getCards = async () => {
  const response = await http.get<CardResponse>('/api/v1/card');
  return response.data;
};
