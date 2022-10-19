import { useState, useEffect } from 'react';

import type { Weight } from '@/types/weights';
import type { User } from '@/types/user';
import { getWeights } from '../api/getWeights';

export type GetWeightsReturn = {
  weights: Weight[];
  isLoading: boolean;
  error: boolean;
  refetchWeights: () => void;
};

/**
 * TODO: Test pagination (on api/getLogs as well)
 * Possibly change error type from boolean to object (containing error message)
 */

export const useGetWeights = (user: User, page?: number): GetWeightsReturn => {
  const [weights, setLogs] = useState<Weight[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchWeights = async () => {
    setIsLoading(true);
    const weight = await getWeights({ id: user.id, token: user.token, page });
    if (typeof weight !== 'string') {
      setLogs(weight);
      setIsLoading(false);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    void fetchWeights();
  }, []);

  return { weights, isLoading, error, refetchWeights: fetchWeights };
};
