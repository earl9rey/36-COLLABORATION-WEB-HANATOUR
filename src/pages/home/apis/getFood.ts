// getFood.ts
import http from '@/shared/apis/http';

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

export const getFood = async (country: string): Promise<FoodResponse> => {
  const response = await http.get<FoodResponse>('/api/v1/foods', {
    params: { country },
  });
  return response.data;
};
