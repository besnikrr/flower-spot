import { axiosClient } from '../application/apiClient';
import { User, UserLogin } from '../domain/user';

export function signUp(user: User) {
  return axiosClient.post('/users/register', user);
}

export function login(user: UserLogin) {
  return axiosClient.post('/users/login', user);
}

export function getUser() {
  return axiosClient.get('/users/me');
}

export function updateUser(user: User) {
  return axiosClient.put('/users/me', user);
}

export function getRefreshUser() {
  return axiosClient.get('/users/me/refresh');
}

export function getUserWithId(id: number) {
  return axiosClient.get(`/users/${id}`);
}
