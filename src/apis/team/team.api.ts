import { apiClient } from '../apiClient/apiClient';
import { API_ENDPOINTS } from '../apiClient/constants/api.constents';
import { Team } from '../apiClient/types/team';

export const teamApi = {
  getAllTeams: async (): Promise<Team[]> => {
    return apiClient.get<Team[]>(API_ENDPOINTS.TEAMS);
  },
} as const;
