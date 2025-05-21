import http from '@/shared/apis/http';

interface mainSearchRequest {
  departure: string;
  arrival: string;
  departDate: string;
  arriveDate: string;
  size: number;
}

export const postMainSearch = async (body: mainSearchRequest) => {
  const response = await http.post('/api/v1/packages/search', body);
  return response.data;
};
