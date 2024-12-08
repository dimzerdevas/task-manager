import { useQuery } from '@tanstack/react-query';
import { CHUCK_NORRIS_JOKE_QUERY } from './constants';
import { useAlerts } from '../../../hooks';
import { useEffect } from 'react';

const fetchRandomChuckNorrisJoke = async () => {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  if (!response.ok) {
    throw new Error('Failed to fetch joke');
  }
  return response.json();
};

export const useChuckNorrisJoke = () => {
  const {
    data,
    isError: isErrorChuckNorrisJoke,
    isLoading: isLoadingChuckNorrisJoke,
    refetch: refetchChuckNorrisJoke,
  } = useQuery({
    queryKey: [CHUCK_NORRIS_JOKE_QUERY],
    queryFn: fetchRandomChuckNorrisJoke,
    enabled: false,
    retry: false,
  });

  const { successAlert, errorAlert } = useAlerts();

  const { value: chuckNorrisJoke } = data || {};

  useEffect(() => {
    if (chuckNorrisJoke) {
      successAlert(chuckNorrisJoke);
    } else if (isErrorChuckNorrisJoke) {
      errorAlert('Error while fetching Chuck Norris joke');
    }
  }, [chuckNorrisJoke, errorAlert, isErrorChuckNorrisJoke, successAlert]);

  return {
    chuckNorrisJoke: data?.value,
    isErrorChuckNorrisJoke,
    isLoadingChuckNorrisJoke,
    refetchChuckNorrisJoke,
  };
};
