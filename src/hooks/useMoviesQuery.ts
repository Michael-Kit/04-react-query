import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from '../services/movieService';
import type { MovieApiResponse } from '../types/api';

interface UseMoviesQueryParams {
  query: string;
  page: number;
}

export const useMoviesQuery = ({ query, page }: UseMoviesQueryParams) => {
  return useQuery<MovieApiResponse>({
    queryKey: ['movies', query, page],
    queryFn: () => fetchMovies({ query, page }),
    enabled: !!query,
    staleTime: 1000 * 60 * 5, // 5 хвилин
  });
};
