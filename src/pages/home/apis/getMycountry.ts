import http from '@/shared/apis/http';

interface Mycountry {
  title: 'string';
  description: 'string';
  imageUrl: 'string';
}

interface MycountryResponse {
  result: Mycountry[];
}

export const getMycountry = async () => {
  const response = await http.get<MycountryResponse>('/api/v1/my');
  return response.data;
};
