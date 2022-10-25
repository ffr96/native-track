import { useState, useEffect } from 'react';

import type { Weight } from '@/types/weights';
import type { User } from '@/types/user';
import { getWeights } from '../api/getWeights';

export type GetWeightsReturn = {
  weights: Weight[];
  isLoading: boolean;
  error: boolean;
  fetchMore: () => void;
};

/**
 * TODO: Test pagination (on api/getLogs as well)
 * Possibly change error type from boolean to object (containing error message)
 */

export const useGetWeights = (user: User): GetWeightsReturn => {
  const [weights, setWeight] = useState<Weight[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);
  const [endReached, setEndReached] = useState(false);

  const fetchWeights = async (appendData?: boolean) => {
    // We don't want to keep fetching from the API since there's no more data to get
    if (endReached) return null;

    if (!appendData) setIsLoading(true);
    const weight = await getWeights({ id: user.id, token: user.token, page });

    if (typeof weight !== 'string') {
      // API is returning an empty array
      if (weight.length < 1) {
        setEndReached(true);
        return null;
      }
      // Whether we're fetching from scratch or just doing a fetchMore
      if (appendData) {
        setWeight((prev) => prev.concat(weight));
      } else {
        setWeight(weight);
      }

      setPage((prev) => prev + 1);
      setIsLoading(false);
    } else {
      setError(true);
    }
  };

  const fetchMore = () => {
    void fetchWeights(true);
  };

  useEffect(() => {
    void fetchWeights();
  }, []);

  return { weights, isLoading, error, fetchMore };
};
