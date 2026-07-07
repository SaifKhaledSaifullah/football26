import { useQuery } from '@tanstack/react-query';
import { gameKeys } from '../apiClient/constants/api.keys';
import { gameApi } from './game.api';

export const useGames = () =>
  useQuery({
    queryKey: gameKeys.all,
    queryFn: gameApi.getAllGames,
  });
