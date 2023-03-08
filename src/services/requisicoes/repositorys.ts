import {IRepository} from './../../interfaces/IRepository';
import api from '../api';

export const getRepositorysByUser = async (id: number) => {
  try {
    const res = await api.get<IRepository[]>(`/repos?postId=${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
