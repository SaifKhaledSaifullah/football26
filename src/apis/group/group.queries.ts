import { useQuery } from '@tanstack/react-query';
import { groupKeys } from '../apiClient/constants/api.keys';
import { groupApi } from './group.api';

export const useGroups = () =>
  useQuery({
    queryKey: groupKeys.all,
    queryFn: groupApi.getAllGroups,
  });
