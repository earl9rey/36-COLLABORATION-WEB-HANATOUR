import http from '@/shared/apis/http';

interface Recommend {
  type: 'string';
  titleAndTags: 'string';
  price: 0;
  imageUrl: 'string';
}

interface RecommendResponse {
  result: Recommend[];
}

export const getRecommend = async () => {
  const response = await http.get<RecommendResponse>('/api/v1/recommend');
  return response.data;
};
