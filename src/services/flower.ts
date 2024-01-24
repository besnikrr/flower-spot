import { axiosClient } from '../application/apiClient';

export function getFlowers() {
  return axiosClient.get('/flowers');
}

export function searchFlowers(queryString: string) {
  return axiosClient.get(`/flowers/search?query=${queryString}`);
}
