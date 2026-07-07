import { apiClient } from '../apiClient/apiClient';
import { API_ENDPOINTS } from '../apiClient/constants/api.constents';
import { Stadium } from '../apiClient/types/stadium';

export const stadiumApi = {
  getAllStadiums: async (): Promise<Stadium[]> => {
    return apiClient.get<Stadium[]>(API_ENDPOINTS.STADIUMS);
  },
} as const;
