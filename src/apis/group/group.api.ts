import { apiClient } from '../apiClient/apiClient';
import { API_ENDPOINTS } from '../apiClient/constants/api.constents';
import { Group } from '../apiClient/types/group';

export const groupApi = {
  getAllGroups: async (): Promise<Group[]> => {
    return apiClient.get<Group[]>(API_ENDPOINTS.GROUPS);
  },
} as const;
