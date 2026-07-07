import { useQuery } from '@tanstack/react-query';
import { stadiumKeys } from '../apiClient/constants/api.keys';
import { stadiumApi } from './stadium.api';

export const useStadiums = () =>
  useQuery({
    queryKey: stadiumKeys.all,
    queryFn: stadiumApi.getAllStadiums,
  });
