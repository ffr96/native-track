import { useState, useEffect } from 'react';

import type { Weight } from '@/types/weights';
import type { User } from '@/types/user';
import { getWeights } from '../api/getWeights';

type GetWeightsReturn = {
  weight: Weight[];
  isLoading: boolean;
  error: boolean;
  refetchLogs: () => void;
};

/**
 * TODO: Test pagination (on api/getLogs as well)
 * Possibly change error type from boolean to object (containing error message)
 */

export const useGetWeights = (user: User, page?: number): GetWeightsReturn => {
  const [weight, setLogs] = useState<Weight[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchLogs = async () => {
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
    void fetchLogs();
  }, []);

  return { weight, isLoading, error, refetchLogs: fetchLogs };
};
