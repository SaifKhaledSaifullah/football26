import { useQuery } from '@tanstack/react-query';
import { teamKeys } from '../apiClient/constants/api.keys';
import { teamApi } from './team.api';

export const useTeams = () =>
  useQuery({
    queryKey: teamKeys.all,
    queryFn: teamApi.getAllTeams,
  });
