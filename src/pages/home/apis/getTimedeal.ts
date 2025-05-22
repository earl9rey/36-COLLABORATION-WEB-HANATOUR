import http from '@/shared/apis/http';

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

export const getTimedeal = async () => {
  const response = await http.get<TimedealResponse>('/api/v1/packages/discount-timedeals');
  return response.data;
};
