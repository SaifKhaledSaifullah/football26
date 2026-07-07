import { apiClient } from '../apiClient/apiClient';
import { API_ENDPOINTS } from '../apiClient/constants/api.constents';
import { Game } from '../apiClient/types/game';

export const gameApi = {
  getAllGames: async (): Promise<Game[]> => {
    return apiClient.get<Game[]>(API_ENDPOINTS.GAMES);
  },
} as const;
