import { getLogs } from '../api/getLogs';
import { useState, useEffect } from 'react';

import { TrainingLog } from '@/types/logs';
import { User } from '@/types/user';

export type GetLogsReturn = {
  logs: TrainingLog[];
  isLoading: boolean;
  error: boolean;
  refetchLogs: () => void;
};

/**
 * TODO: Test pagination (on api/getLogs as well)
 * Possibly change error type from boolean to object (containing error message)
 */

export const useGetLogs = (user: User, page?: number): GetLogsReturn => {
  const [logs, setLogs] = useState<TrainingLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchLogs = async () => {
    setIsLoading(true);
    const logs = await getLogs({ id: user.id, token: user.token, page });
    if (typeof logs !== 'string') {
      setLogs(logs);
      setIsLoading(false);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    void fetchLogs();
  }, []);

  return { logs, isLoading, error, refetchLogs: fetchLogs };
};

//  Implement a generic datafetch hook
//
//type FetchDataReturn<Data> = {
//  logs: Data[];
//  isLoading: boolean;
//  error: boolean;
//  refetchLogs: () => void;
//};
//
//type FetchDataProps<Data> = {
//  user: User,
//  page?: number,
//  fetch: (user: any) => Promise<Data[]> | string;
//}
//
//export const useFetchData = <Data,>({user,page,fetch}: FetchDataProps<Data>): FetchDataReturn<Data> => {
//  const [logs, setLogs] = useState<Data[]>([]);
//  const [isLoading, setIsLoading] = useState(true);
//  const [error, setError] = useState(false);
//
//  const fetchLogs = async () => {
//    setIsLoading(true);
//    const logs = await fetch({ id: user.id, token: user.token, page });
//    if (typeof logs !== 'string') {
//      setLogs(logs);
//      setIsLoading(false);
//    } else {
//      setError(true);
//    }
//  };
//
//  useEffect(() => {
//    void fetchLogs();
//  }, []);
//
//  return { logs, isLoading, error, refetchLogs: fetchLogs };
//};
