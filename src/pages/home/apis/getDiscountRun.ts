import http from '@/shared/apis/http';

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

export const getDiscountRun = async () => {
  const response = await http.get<DiscountRunResponse>('/api/v1/packages/discount-run');
  return response.data;
};
