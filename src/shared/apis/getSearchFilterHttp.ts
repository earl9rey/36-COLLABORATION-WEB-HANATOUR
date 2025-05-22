import http from './http';

export const getSearchFilterHttp = async ({
  period,
  page = 0,
  size = 20,
}: {
  period: string;
  page?: number;
  size?: number;
}) => {
  const response = await http.get(`/api/v1/packages/filter`, {
    params: { period, page, size },
  });

  return response.data;
};
