import { request } from 'umi';

export async function queryFakerData() {
  return request('/api/data/faker');
}
