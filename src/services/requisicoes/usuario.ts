import api from '../api';

export const buscarUsuario = async (userName: string) => {
  try {
    const res = await api.get(`/users?login=${userName}`);
    return res.data[0];
  } catch (error) {
    console.error(error);
    return {};
  }
};
